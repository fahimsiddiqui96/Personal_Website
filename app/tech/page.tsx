"use client";

import { useEffect } from "react";
import { mountRevealUp, splitTextWords } from "@/lib/interaction";

const groups = {
  "CI/CD": ["GitHub Actions", "Jenkins"],
  "IaC": ["Terraform"],
  "Cloud": ["AWS", "Azure", "GCP"],
  "Containers": ["Docker", "Kubernetes"],
  "Observability": ["Prometheus", "Grafana"],
  "Performance Testing": ["LoadRunner", "JMeter"],
};

export default function TechPage() {
  useEffect(() => { splitTextWords(); mountRevealUp(); }, []);
  return (
    <section className="container stack" style={{ paddingBlock: "96px" }}>
      <h1 className="split-words reveal-up text-gradient-anim">Tech Stack</h1>
      <div className="stack">
        {Object.entries(groups).map(([label, items], i) => (
          <div key={label} className="stack">
            <h2 className={`split-words reveal-up stagger-${(i % 5) + 1}`}>{label}</h2>
            <div className="cluster">
              {items.map((t, j) => (
                <span key={t} className={`badge reveal-up stagger-${(j % 5) + 1}`} style={{ padding: "8px 12px", border: "1px solid var(--line)", borderRadius: 10, fontFamily: "var(--font-jetbrains, monospace)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

