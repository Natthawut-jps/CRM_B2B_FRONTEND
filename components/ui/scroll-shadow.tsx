"use client";

import { cn } from "@/lib/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

type ScrollShadowProps = {
  children: ReactNode;
  className?: string;
  viewportClassName?: string;
  shadowClassName?: string;
};

export function ScrollShadow({
  children,
  className,
  viewportClassName,
  shadowClassName,
}: ScrollShadowProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const x = el.scrollLeft;
      setShowLeft(x > 0);
      setShowRight(max > 0 && x < max - 1);
    };

    update();

    const onScroll = () => update();
    const ro = new ResizeObserver(() => update());

    el.addEventListener("scroll", onScroll, { passive: true });
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div ref={viewportRef} className={cn("w-full max-w-full overflow-x-auto", viewportClassName)}>
        {children}
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-background to-transparent transition-opacity",
          showLeft ? "opacity-100" : "opacity-0",
          shadowClassName
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-background to-transparent transition-opacity",
          showRight ? "opacity-100" : "opacity-0",
          shadowClassName
        )}
      />
    </div>
  );
}
