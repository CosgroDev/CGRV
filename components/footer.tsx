import Link from "next/link";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <Link className="wordmark" href="/">
          CGRV<span>↗</span>
        </Link>
        <p>
          A personal corner of the internet.
          <br />
          Built in Barnsley. Always a work in progress.
        </p>
        <div className="footer-links">
          <a href="mailto:dale@cgrv.co.uk">Email ↗</a>
          <a
            href="https://www.linkedin.com/in/dale-cosgrove-738a18a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <Link href="/cv">CV ↗</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} DALE COSGROVE</span>
        <span>END OF PAGE / BACK TO TINKERING</span>
      </div>
    </footer>
  );
}
