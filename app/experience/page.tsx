"use client";

import { useEffect } from "react";
import { mountRevealUp, splitTextWords } from "@/lib/interaction";

export default function ExperiencePage() {
  useEffect(() => { splitTextWords(); mountRevealUp(); }, []);
  const items = [
    { role: "DevOps Engineer", org: "IKS Health Limited", meta: "2022–Present", bullets: ["Cut deploy time 60%", "Cluster autoscaling"] },
    { role: "Test Automation & Performance Engineer", org: "Intent Technologies", meta: "2018–2022", bullets: ["Test automation at scale", "Shift-left quality"] },
  ];
  return (
    <section className="container stack" style={{ paddingBlock: "96px" }}>
      <h1 className="split-words reveal-up text-gradient-anim">Experience</h1>
      <ol className="stack" style={{ gap: 24 }}>
        {items.map((it, i) => (
          <li key={it.role} className={`reveal-up stagger-${(i % 5) + 1}`} style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 16 }}>
            <h3>{it.role} — {it.org}</h3>
            <p style={{ color: "var(--muted)" }}>{it.meta}</p>
            <ul>
              {it.bullets.map((b) => <li key={b} style={{ listStyle: "disc", marginLeft: 16 }}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

