"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const routes = ["/", "/about", "/tech", "/projects", "/experience", "/blog", "/contact"];
    // Aggressive preloading for instant navigation
    routes.forEach((r) => {
      try { 
        router.prefetch(r);
        // Preload critical resources
        if (typeof window !== 'undefined') {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = r;
          document.head.appendChild(link);
        }
      } catch {}
    });
  }, [router]);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href !== pathname) {
      // Immediate navigation with instant state reset
      router.push(href);
      setIsNavigating(true);
      setIsNavigating(false);
    }
  }, [router, pathname]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${isNavigating ? "nav--navigating" : ""}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" onClick={handleLinkClick}>Fahim Siddiqui</Link>
        <nav aria-label="Primary">
          <ul className="nav__list">
            <li><Link href="/about" className={`nav__link ${pathname === '/about' ? 'nav__link--active' : ''}`} onClick={handleLinkClick}>About</Link></li>
            <li><Link href="/tech" className={`nav__link ${pathname === '/tech' ? 'nav__link--active' : ''}`} onClick={handleLinkClick}>Tech Stack</Link></li>
            <li><Link href="/projects" className={`nav__link ${pathname === '/projects' ? 'nav__link--active' : ''}`} onClick={handleLinkClick}>Projects</Link></li>
            <li><Link href="/experience" className={`nav__link ${pathname === '/experience' ? 'nav__link--active' : ''}`} onClick={handleLinkClick}>Experience</Link></li>
            <li><Link href="/blog" className={`nav__link ${pathname === '/blog' ? 'nav__link--active' : ''}`} onClick={handleLinkClick}>Blog</Link></li>
            <li><Link href="/contact" className={`nav__link ${pathname === '/contact' ? 'nav__link--active' : ''}`} onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

