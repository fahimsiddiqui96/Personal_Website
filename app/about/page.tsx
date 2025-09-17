"use client";

import { useEffect } from "react";
import { mountRevealUp, splitTextWords } from "@/lib/interaction";

export default function AboutPage() {
  useEffect(() => {
    splitTextWords();
    mountRevealUp();
  }, []);

  const careerStages = [
    {
      title: "QA Automation",
      period: "2019-2021",
      description: "I started out in QA Automation, building test frameworks with Selenium, Cypress, Rest Assured, and TestNG to help ship better software with fewer surprises. In my first year, I focused on frontend automation—stabilizing flaky UI tests, making suites faster, and wiring everything into CI so quality checks ran early and often.",
      image: "images/file.svg",
      tools: ["Selenium", "Cypress", "Rest Assured", "TestNG", "CI/CD"]
    },
    {
      title: "Performance Engineering", 
      period: "2021-2022",
      description: "As I grew, I leaned into Performance Engineering with LoadRunner to see how systems behave under real-world pressure—not just if they work, but how well they hold up when traffic spikes. That shift taught me to think in terms of latency, capacity, and resilience, not just pass/fail.",
      image: "/images/performance.png",
      tools: ["LoadRunner", "JMeter", "Performance Testing", "Load Testing"]
    },
    {
      title: "DevOps Engineering",
      period: "2022-Present", 
      description: "Today, I'm a DevOps Engineer. I build and maintain CI/CD pipelines, containerize apps with Docker, run workloads on Kubernetes, manage infrastructure with Terraform, and ship on AWS. My performance background still shows up in the way I work—I care about observability, guardrails, and baking performance checks into delivery so releases are both fast and reliable.",
      image: "/images/devops.png",
      tools: ["Docker", "Kubernetes", "Terraform", "AWS", "CI/CD"]
    },
    {
      title: "MLOps (Future)",
      period: "2024+",
      description: "Looking ahead, I'm moving toward MLOps. With AI becoming a core part of products, I'm applying the same DevOps mindset—automation, monitoring, and scale—to model deployment and lifecycle management in production.",
      image: "/images/mlops.png", 
      tools: ["MLOps", "Model Deployment", "AI Infrastructure", "Monitoring"]
    }
  ];

  return (
    <section className="container" style={{ paddingBlock: "96px" }}>
      <h1 className="reveal-up text-gradient-anim" style={{ textAlign: "center", marginBottom: "64px" }}>
        My Journey: From QA to DevOps
      </h1>

      <div className="career-timeline">
        {careerStages.map((stage, index) => (
          <div key={stage.title} className={`career-stage reveal-up stagger-${(index % 4) + 1}`}>
            <div className="career-content">
              <div className="career-text">
                <div className="career-header">
                  <h2 className="career-title">{stage.title}</h2>
                  <span className="career-period">{stage.period}</span>
                </div>
                <p className="career-description">{stage.description}</p>
                <div className="career-tools">
                  {stage.tools.map((tool, toolIndex) => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="career-image">
                <div className="image-placeholder">
                  <img 
                    src={stage.image} 
                    alt={`${stage.title} illustration`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                  <div className="placeholder-content hidden">
                    <div className="placeholder-icon">📊</div>
                    <span className="placeholder-text">{stage.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
