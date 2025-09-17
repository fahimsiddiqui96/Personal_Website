"use client";

import { useEffect } from "react";
import { mountRevealUp, splitTextWords } from "@/lib/interaction";

export default function BlogPage() {
  useEffect(() => { splitTextWords(); mountRevealUp(); }, []);
  const posts = [
    { title: "Composable CI/CD with GitHub Actions", date: "2025-08-01" },
    { title: "Terraform module patterns for AWS", date: "2025-07-12" },
  ];
  return (
    <section className="container stack" style={{ paddingBlock: "96px" }}>
      <h1 className="split-words reveal-up text-gradient-anim">Blog</h1>
      <div className="stack">
        {posts.map((p, i) => (
          <article key={p.title} className={`reveal-up stagger-${(i % 5) + 1}`} style={{ borderBottom: "1px solid var(--line)", paddingBottom: 16 }}>
            <h3 className="link" style={{ display: "inline-block" }}>{p.title}</h3>
            <p style={{ color: "var(--muted)" }}>{new Date(p.date).toDateString()}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

