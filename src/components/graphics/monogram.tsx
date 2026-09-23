type MonogramProps = {
  className?: string;
};

export function Monogram({ className }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle
        cx="18"
        cy="18"
        r="15"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="18"
        cy="18"
        r="15"
        stroke="#0c0b0a"
        strokeWidth="1.4"
        strokeDasharray="10 48"
        transform="rotate(-24 18 18)"
      />
      <circle cx="24.5" cy="18" r="2.1" fill="currentColor" />
    </svg>
  );
}
