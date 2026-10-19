import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sean Collins about HomeCloud Portal, privacy, disconnection, or deletion requests.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <main id="main" className="contact-page container">
      <p className="eyebrow">A direct line</p>
      <h1>Contact</h1>
      <p className="document-lead">
        Questions about HomeCloud Portal,
        <br />
        privacy, or authorized use?
      </p>
      <div className="contact-details">
        <Mail size={28} strokeWidth={1.5} />
        <div>
          <p className="contact-label">Sean Collins · HomeCloud operator</p>
          <a className="contact-email" href="mailto:sean.collins@gmail.com">
            sean.collins@gmail.com <ArrowUpRight size={23} />
          </a>
        </div>
      </div>
      <p className="contact-note">
        For privacy or deletion requests, describe what you need in your email.
        Please do not send passwords, OAuth credentials, private email contents,
        or health records.
      </p>
    </main>
  );
}
