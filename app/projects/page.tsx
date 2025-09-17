"use client";

import { useEffect } from "react";
import { mountRevealUp, splitTextWords } from "@/lib/interaction";

export default function ProjectsPage() {
  useEffect(() => { splitTextWords(); mountRevealUp(); }, []);
  const projects = [
    { title: "Kubernetes Platform", desc: "Multi-tenant EKS with GitOps and autoscaling.", tech: ["AWS", "EKS", "ArgoCD"] },
    { title: "CI/CD Modernization", desc: "GitHub Actions monorepo pipelines with caches.", tech: ["GHA", "Nx", "Docker"] },
    { title: "Terraform Modules", desc: "Reusable AWS modules with tests and docs.", tech: ["Terraform", "tflint"] },
  ];
  return (
    <section className="container stack" style={{ paddingBlock: "96px" }}>
      <h1 className="split-words reveal-up text-gradient-anim">Projects</h1>
      <div className="stack" style={{ gap: 24 }}>
        {projects.map((p, i) => (
          <article key={p.title} className={`reveal-up stagger-${(i % 5) + 1}`} style={{ border: "1px solid var(--line)", background: "var(--surface)", borderRadius: 12, padding: 20 }}>
            <h3 style={{ marginBottom: 8 }}>{p.title}</h3>
            <p style={{ color: "var(--muted)", marginBottom: 8 }}>{p.desc}</p>
            <div className="cluster">
              {p.tech.map((t) => (
                <span key={t} className="badge" style={{ padding: "6px 10px", border: "1px solid var(--line)", borderRadius: 10, fontFamily: "var(--font-jetbrains, monospace)" }}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

