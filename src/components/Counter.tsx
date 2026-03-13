import { useEffect, useState, type CSSProperties } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  play?: boolean;
  className?: string;
  style?: CSSProperties;
  decimals?: number;
  onComplete?: () => void;
}

const getDecimalPlaces = (value?: number) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0;
  const [, fraction] = value.toString().split(".");
  return fraction ? fraction.length : 0;
};

const formatValue = (value: number, decimals: number) =>
  decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

export default function Counter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  play = true,
  className = "",
  style,
  decimals,
  onComplete,
}: CounterProps) {
  const prefersReducedMotion = useMotionPreference();
  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion || !play ? start : start
  );
  const resolvedDecimals =
    typeof decimals === "number" && !Number.isNaN(decimals)
      ? Math.max(0, decimals)
      : Math.max(getDecimalPlaces(start), getDecimalPlaces(end));

  useEffect(() => {
    if (!play) {
      setDisplayValue(start);
      return;
    }

    if (prefersReducedMotion) {
      setDisplayValue(end);
      onComplete?.();
      return;
    }

    let rafId: number;
    let timeoutId: ReturnType<typeof window.setTimeout> | undefined;
    const range = end - start;

    if (range === 0) {
      setDisplayValue(end);
      onComplete?.();
      return;
    }

    const resolvedDuration = duration <= 0 ? 0 : duration;

    const begin = () => {
      const startTime = performance.now();

      const animate = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress =
          resolvedDuration === 0 ? 1 : Math.min(elapsed / resolvedDuration, 1);
        const value = start + range * progress;
        setDisplayValue(value);

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          onComplete?.();
        }
      };

      rafId = requestAnimationFrame(animate);
    };

    setDisplayValue(start);

    if (delay > 0) {
      timeoutId = window.setTimeout(begin, delay);
    } else {
      begin();
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [start, end, duration, delay, play, onComplete, prefersReducedMotion]);

  const formattedTarget = formatValue(end, resolvedDecimals);
  const minWidthCh = Math.max(1, formattedTarget.length);
  const baseClasses = ["counter-value", "tabular-nums", className]
    .filter(Boolean)
    .join(" ");
  const mergedStyles: CSSProperties = {
    display: "inline-block",
    minWidth: `calc(${minWidthCh}ch)`,
    ...style,
  };

  return (
    <span
      className={baseClasses}
      style={mergedStyles}
      aria-label={formattedTarget}
    >
      {formatValue(displayValue, resolvedDecimals)}
    </span>
  );
}
