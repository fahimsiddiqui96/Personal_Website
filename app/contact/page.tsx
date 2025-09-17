"use client";

import { useEffect } from "react";
import { mountRevealUp, splitTextWords } from "@/lib/interaction";

export default function ContactPage() {
  useEffect(() => { splitTextWords(); mountRevealUp(); }, []);
  return (
    <section className="container stack" style={{ paddingBlock: "96px" }}>
      <h1 className="split-words reveal-up text-gradient-anim">Contact</h1>
      <form className="stack" style={{ gap: 16, maxWidth: 640 }}>
        <label className="reveal-up">
          <span>Name</span>
          <input type="text" name="name" required style={{ width: "100%", background: "var(--surface)", border: "1px solid var(--line)", padding: 12, borderRadius: 10 }} />
        </label>
        <label className="reveal-up stagger-2">
          <span>Email</span>
          <input type="email" name="email" required style={{ width: "100%", background: "var(--surface)", border: "1px solid var(--line)", padding: 12, borderRadius: 10 }} />
        </label>
        <label className="reveal-up stagger-3">
          <span>Message</span>
          <textarea name="message" rows={6} required style={{ width: "100%", background: "var(--surface)", border: "1px solid var(--line)", padding: 12, borderRadius: 10 }} />
        </label>
        <button className="btn btn--primary reveal-up stagger-4" type="submit">Send Message</button>
      </form>
    </section>
  );
}

