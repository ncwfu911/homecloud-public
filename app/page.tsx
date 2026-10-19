import Link from "next/link";
import {
  ArrowRight,
  FolderOpen,
  Mail,
  Activity,
  Flag,
  Workflow,
  LockKeyhole,
} from "lucide-react";

const features = [
  {
    icon: FolderOpen,
    number: "01",
    title: "A place for your files",
    text: "Personal cloud storage and file management for the information you use every day.",
  },
  {
    icon: Mail,
    number: "02",
    title: "A clearer view of email",
    text: "Gmail productivity and email analysis to make a personal inbox easier to understand.",
  },
  {
    icon: Activity,
    number: "03",
    title: "Your running, in context",
    text: "Fitbit and Google Health workout information brought together for personal running analytics.",
  },
  {
    icon: Flag,
    number: "04",
    title: "Room for the next goal",
    text: "Running goals, race tracking, and AI-assisted coaching for a more connected training picture.",
  },
  {
    icon: Workflow,
    number: "05",
    title: "Tools that fit your day",
    text: "Personal automation and custom applications for the way you organize and use information.",
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div
          className="hero-photo"
          role="img"
          aria-label="A bright, open workspace with natural light"
        />
        <div className="hero-scrim" />
        <div className="container hero-content">
          <p className="eyebrow">A personal digital workspace</p>
          <h1>HomeCloud Portal</h1>
          <p className="hero-subtitle">
            Your personal technology,
            <br />
            your data, your control.
          </p>
          <p className="hero-description">
            A privately hosted platform that brings personal information,
            analytics, and automation together.
          </p>
          <Link href="/privacy" className="button">
            Our approach to privacy <ArrowRight size={18} />
          </Link>
          <div className="hero-caption">
            <span className="small-line" />
            Privately hosted. Personally operated.
          </div>
        </div>
      </section>
      <section className="intro-band">
        <div className="container intro-layout">
          <p className="eyebrow">Connected around you</p>
          <div>
            <h2>
              A little more order.
              <br />A little more possibility.
            </h2>
            <p>
              HomeCloud brings everyday digital tools into a personal workspace,
              from finding a file to understanding a run. It is built for
              private, personal use.
            </p>
          </div>
        </div>
      </section>
      <section className="capabilities">
        <div className="container">
          <div className="section-heading">
            <h2>One workspace. Many interests.</h2>
            <span>What HomeCloud brings together</span>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, number, title, text }) => (
              <article className="feature" key={number}>
                <div className="feature-top">
                  <Icon size={26} strokeWidth={1.5} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="privacy-band">
        <div className="container privacy-layout">
          <LockKeyhole size={38} strokeWidth={1.4} />
          <div>
            <p className="eyebrow">
              A public introduction to a private platform
            </p>
            <h2>Your private workspace stays private.</h2>
            <p>
              <strong>
                HomeCloud is a privately hosted application. This public website
                provides information about the platform but does not provide
                access to personal accounts or private data.
              </strong>
            </p>
            <p>
              For details about authorization, data handling, and the
              information still under owner review, read the privacy policy.
            </p>
            <Link className="text-link" href="/privacy">
              Read the Privacy Policy <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
