import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Terms of Service" };
export default function Terms() {
  return (
    <main id="main" className="document container">
      <p className="eyebrow">Using HomeCloud</p>
      <h1>Terms of Service</h1>
      <p className="document-lead">
        HomeCloud is a privately operated, experimental personal application. It
        is not a publicly available commercial SaaS offering.
      </p>
      <section>
        <h2>Purpose of this website</h2>
        <p>
          This site provides information about HomeCloud Portal. It does not
          create an account, grant access to the private application, or offer a
          paid subscription. HomeCloud is operated by Sean Collins.
        </p>
      </section>
      <section>
        <h2>Intended use</h2>
        <p>
          The private application is intended for authorized personal
          productivity, file management, analytics, and automation. Use of
          connected services remains subject to their terms and the
          permissions granted by the account owner.
        </p>
      </section>
      <section>
        <h2>Availability and limitations</h2>
        <p>
          HomeCloud is experimental. Features may change, become unavailable, or
          be discontinued. No uptime or support response time is promised.
          Maintain independent backups of information you rely on and review
          automated results before acting on them.
        </p>
      </section>
      <section>
        <h2>Analytics and coaching</h2>
        <p>
          Running analytics and AI-assisted coaching are informational. They do
          not replace professional medical advice or individualized guidance
          from a qualified professional. Automated analyses may contain errors.
        </p>
      </section>
      <section>
        <h2>Privacy and third-party services</h2>
        <p>
          Read the <Link href="/privacy">Privacy Policy</Link> for the current
          data-handling disclosures and any details awaiting owner confirmation.
          This website does not authorize Google access or change permissions on
          connected accounts.
        </p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          Contact the operator at{" "}
          <a href="mailto:sean.collins@gmail.com">sean.collins@gmail.com</a>{" "}
          with questions about these terms or the platform.
        </p>
      </section>
    </main>
  );
}
