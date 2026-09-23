"use client";

import { useEffect } from "react";

const STORAGE_KEY = "portfolio-scroll";

export function ScrollRestore() {
  useEffect(() => {
    const html = document.documentElement;
    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const saved = sessionStorage.getItem(STORAGE_KEY);
    const savedY = saved == null ? null : Number(saved);
    const shouldRestore =
      navigation?.type === "reload" &&
      savedY != null &&
      Number.isFinite(savedY);

    if (shouldRestore) {
      window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
    }

    const save = () => {
      sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
    };
    save();
    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("pagehide", save);

    const enableSmooth = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        html.dataset.scroll = "smooth";
      }
    };
    if (document.readyState === "complete") {
      enableSmooth();
    } else {
      window.addEventListener("load", enableSmooth, { once: true });
    }

    return () => {
      window.removeEventListener("scroll", save);
      window.removeEventListener("pagehide", save);
    };
  }, []);

  return null;
}
