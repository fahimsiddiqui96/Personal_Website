import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} Fahim Siddiqui</p>
        <div className="social">
          <Link href="https://www.linkedin.com/in/fahim-siddiqui-189887232/" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="https://github.com/fahimsiddiqui96" className="link" target="_blank" rel="noopener noreferrer">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}

