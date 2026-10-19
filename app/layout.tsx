import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, ArrowUpRight } from "lucide-react";
import release from "../content/release.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://homecloud.grantablehq.com"),
  title: { default: "HomeCloud Portal", template: "%s | HomeCloud Portal" },
  description:
    "A privately hosted personal productivity platform for files, email, running analytics, and automation.",
  robots: release.privacyApproved
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

const links = [
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
  ["/contact", "Contact"],
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/" aria-label="HomeCloud Portal home">
              <Cloud size={29} strokeWidth={1.8} />
              <span>
                HomeCloud<span className="brand-suffix"> Portal</span>
              </span>
            </Link>
            <nav aria-label="Main navigation">
              {links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-top">
            <div>
              <Link href="/" className="brand">
                <Cloud size={25} />
                <span>HomeCloud Portal</span>
              </Link>
              <p>Personal technology. Thoughtfully connected.</p>
            </div>
            <div className="footer-links">
              {links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label === "Privacy"
                    ? "Privacy Policy"
                    : label === "Terms"
                      ? "Terms of Service"
                      : label}
                </Link>
              ))}
            </div>
          </div>
          <div className="container footer-bottom">
            <span>Privately operated by Sean Collins.</span>
            <a href="mailto:sean.collins@gmail.com">
              Get in touch <ArrowUpRight size={14} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
