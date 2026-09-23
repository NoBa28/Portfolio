"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const STEP = 4;
const INTERVAL_MS = 12;

type Entry = {
  id: string;
  text: string;
  getEl: () => HTMLElement | null;
  setCount: (count: number) => void;
  setCursor: (visible: boolean) => void;
  count: number;
};

type TypewriterContextValue = {
  register: (entry: Omit<Entry, "count">) => () => void;
};

const TypewriterContext = createContext<TypewriterContextValue | null>(null);

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isHidden(element: HTMLElement | null): boolean {
  return !element || element.getClientRects().length === 0;
}

function documentOrder(a: Entry, b: Entry): number {
  const left = a.getEl();
  const right = b.getEl();
  if (!left || !right || left === right) {
    return 0;
  }
  const position = left.compareDocumentPosition(right);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING) {
    return 1;
  }
  return 0;
}

export function TypewriterProvider({ children }: { children: ReactNode }) {
  const entries = useRef(new Map<string, Entry>());
  const order = useRef<string[]>([]);
  const index = useRef(0);
  const timer = useRef<number | null>(null);
  const ready = useRef(false);

  const clearCursor = useCallback(() => {
    for (const entry of entries.current.values()) {
      entry.setCursor(false);
    }
  }, []);

  const reveal = useCallback((id: string, count: number, cursor: boolean) => {
    const entry = entries.current.get(id);
    if (!entry) {
      return;
    }
    entry.count = count;
    entry.setCount(count);
    entry.setCursor(cursor);
  }, []);

  const sort = useCallback(() => {
    order.current = [...entries.current.values()]
      .sort(documentOrder)
      .map((entry) => entry.id);
  }, []);

  const finishThrough = useCallback(
    (end: number) => {
      for (let position = 0; position < end; position += 1) {
        const id = order.current[position];
        const entry = id ? entries.current.get(id) : undefined;
        if (!entry || entry.count >= entry.text.length) {
          continue;
        }
        reveal(entry.id, entry.text.length, false);
      }
      if (index.current < end) {
        index.current = end;
      }
    },
    [reveal],
  );

  const firstOnScreen = useCallback(() => {
    for (let position = 0; position < order.current.length; position += 1) {
      const entry = entries.current.get(order.current[position] ?? "");
      const element = entry?.getEl();
      if (!element || isHidden(element)) {
        continue;
      }
      if (element.getBoundingClientRect().bottom > 8) {
        return position;
      }
    }
    return order.current.length;
  }, []);

  const footerStart = useCallback(() => {
    const footer = document.querySelector("footer");
    if (!footer) {
      return -1;
    }
    const rect = footer.getBoundingClientRect();
    const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight + 1;
    const reachedEnd =
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2 && rect.top < window.innerHeight;
    if (!fullyVisible && !reachedEnd) {
      return -1;
    }
    return order.current.findIndex((entryId) => {
      const element = entries.current.get(entryId)?.getEl();
      return element ? footer.contains(element) : false;
    });
  }, []);

  const stop = useCallback(() => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    sort();
    while (index.current < order.current.length) {
      const entry = entries.current.get(order.current[index.current] ?? "");
      if (!entry) {
        index.current += 1;
        continue;
      }
      if (isHidden(entry.getEl())) {
        reveal(entry.id, entry.text.length, false);
        index.current += 1;
        continue;
      }
      if (entry.count >= entry.text.length) {
        reveal(entry.id, entry.text.length, false);
        index.current += 1;
        continue;
      }

      clearCursor();
      const next = Math.min(entry.text.length, entry.count + STEP);
      reveal(entry.id, next, true);
      timer.current = window.setTimeout(tick, INTERVAL_MS);
      return;
    }
    clearCursor();
    timer.current = null;
  }, [clearCursor, reveal, sort]);

  const start = useCallback(() => {
    if (!ready.current || prefersReducedMotion()) {
      return;
    }
    stop();
    timer.current = window.setTimeout(tick, INTERVAL_MS);
  }, [stop, tick]);

  const catchUpToScreen = useCallback(() => {
    if (!ready.current || prefersReducedMotion()) {
      return;
    }
    sort();
    const before = index.current;
    const footerAt = footerStart();
    finishThrough(footerAt >= 0 ? footerAt : firstOnScreen());
    if (index.current !== before || timer.current === null) {
      start();
    }
  }, [finishThrough, firstOnScreen, footerStart, sort, start]);

  const jumpToSection = useCallback(
    (id: string) => {
      if (!ready.current || prefersReducedMotion() || id === "top") {
        return;
      }
      const section = document.getElementById(id);
      if (!section) {
        return;
      }
      sort();
      const startAt = order.current.findIndex((entryId) => {
        const element = entries.current.get(entryId)?.getEl();
        return element ? section.contains(element) : false;
      });
      if (startAt < 0) {
        return;
      }
      finishThrough(startAt);
      start();
    },
    [finishThrough, sort, start],
  );

  const register = useCallback((entry: Omit<Entry, "count">) => {
    entries.current.set(entry.id, { ...entry, count: entry.text.length });
    return () => {
      entries.current.delete(entry.id);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const begin = () => {
      requestAnimationFrame(() => {
        ready.current = true;
        sort();
        const footerAt = footerStart();
        finishThrough(footerAt >= 0 ? footerAt : firstOnScreen());
        for (let position = index.current; position < order.current.length; position += 1) {
          const entry = entries.current.get(order.current[position] ?? "");
          if (!entry || isHidden(entry.getEl())) {
            continue;
          }
          if (entry.count > 0 && entry.count < entry.text.length) {
            continue;
          }
          if (entry.count === entry.text.length && position >= index.current) {
            reveal(entry.id, 0, false);
            entry.count = 0;
          }
        }
        start();
      });
    };

    if (document.readyState === "complete") {
      begin();
    } else {
      window.addEventListener("load", begin, { once: true });
    }

    const onScroll = () => catchUpToScreen();
    const onJump = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (typeof id === "string") {
        jumpToSection(id);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("portfolio:jump", onJump);
    return () => {
      ready.current = false;
      stop();
      window.removeEventListener("load", begin);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("portfolio:jump", onJump);
    };
  }, [catchUpToScreen, finishThrough, firstOnScreen, footerStart, jumpToSection, reveal, sort, start, stop]);

  return (
    <TypewriterContext.Provider value={{ register }}>
      {children}
    </TypewriterContext.Provider>
  );
}

export function Typed({ text }: { text: string }) {
  const context = useContext(TypewriterContext);
  const ref = useRef<HTMLSpanElement>(null);
  const id = useId();
  const [count, setCount] = useState(text.length);
  const [cursor, setCursor] = useState(false);

  useLayoutEffect(() => {
    if (!context) {
      return;
    }
    return context.register({
      id,
      text,
      getEl: () => ref.current,
      setCount,
      setCursor,
    });
  }, [context, id, text]);

  return (
    <span ref={ref} className="type-run">
      <span className="type-run-text invisible" aria-hidden="true">
        {text}
      </span>
      <span className="type-run-text" aria-hidden="true">
        {text.slice(0, count)}
        {cursor ? (
          <span className="type-cursor" aria-hidden="true">
            |
          </span>
        ) : null}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
