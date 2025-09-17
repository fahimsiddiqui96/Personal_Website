"use client";

// IntersectionObserver reveal utility - optimized for speed
export function mountRevealUp() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));
  if (reduce) {
    elements.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -5% 0px", threshold: 0.05 } // More aggressive triggering
  );
  elements.forEach((el) => io.observe(el));
}

// Parallax utility (translateY based on scroll and data-speed) - optimized for speed
export function mountParallax() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const els = Array.from(document.querySelectorAll<HTMLElement>(".parallax"));
  if (reduce || els.length === 0) return;
  let lastY = -1;
  const tick = () => {
    const y = window.scrollY;
    if (Math.abs(y - lastY) < 1) return; // Reduced threshold for more responsive updates
    lastY = y;
    for (const el of els) {
      const speed = parseFloat(el.dataset.speed || "0.15");
      const offset = y * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  };
  const onScroll = () => requestAnimationFrame(tick);
  window.addEventListener("scroll", onScroll, { passive: true });
  tick();
}

// Split text by words for staggered reveal - optimized for speed
export function splitTextWords(selector = ".split-words") {
  const containers = Array.from(document.querySelectorAll<HTMLElement>(selector));
  for (const el of containers) {
    if (el.dataset.split === "1") continue;
    const text = el.textContent || "";
    el.textContent = "";
    const words = text.split(/(\s+)/);
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      const span = document.createElement("span");
      span.textContent = w;
      span.style.transitionDelay = `${(i % 6) * 20}ms`; // Reduced from 80ms to 20ms
      el.appendChild(span);
    }
    el.dataset.split = "1";
  }
}

