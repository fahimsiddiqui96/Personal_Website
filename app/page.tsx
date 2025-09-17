"use client";

import { useEffect } from "react";
import Link from "next/link";
import { mountParallax, mountRevealUp, splitTextWords } from "@/lib/interaction";

export default function Home() {
  useEffect(() => {
    splitTextWords();
    mountRevealUp();
    mountParallax();
  }, []);

  return (
    <div>
      <section className="hero container">
        <div className="blob blob--a parallax" data-speed="0.12" />
        <div className="blob blob--b parallax" data-speed="0.18" />
        <h1 className="hero__title reveal-up text-gradient-anim">Hi, I'm Fahim Siddiqui, DevOps Engineer & Former Full Stack QA</h1>
        <p className="hero__sub reveal-up stagger-2" style={{ lineHeight: 1.6, marginBottom: '16px' }}>I build reliable CI/CD pipelines, container platforms, and cloud infrastructure with AWS, Kubernetes, and Terraform.</p>
        <div className="hero__actions reveal-up stagger-3">
          <Link href="/projects" className="btn btn--primary">View My Projects</Link>
          <Link href="https://www.linkedin.com/in/fahim-siddiqui-189887232/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Connect on LinkedIn</Link>
        </div>
      </section>

      <section className="container" style={{ paddingBlock: "24px" }}>
        <div className="ticker">
          <div className="ticker__track">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="ticker__item">CI/CD · Jenkins · Docker · Kubernetes · Terraform · AWS · LoadRunner · Monitoring · Observability</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container stack" style={{ paddingBlock: "96px" }}>
        <h2 className="reveal-up">DevOps Flow</h2>
        <div className="cluster">
          {[
            "Code",
            "Build",
            "Test",
            "Deploy",
            "Observe",
          ].map((step, i) => (
            <div key={step} className={`card reveal-up stagger-${(i % 5) + 1}`}>
              <div style={{ padding: 16, border: "1px solid var(--line)", background: "var(--surface)", borderRadius: 12 }}>{step}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
