import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy" };
function Confirm({ children }: { children: React.ReactNode }) {
  return (
    <p className="confirmation">
      <strong>REQUIRES OWNER CONFIRMATION</strong> {children}
    </p>
  );
}
export default function Privacy() {
  return (
    <main id="main" className="document container">
      <p className="eyebrow">Data & privacy</p>
      <h1>Privacy Policy</h1>
      <p className="document-lead">
        HomeCloud Portal is a privately hosted personal productivity application
        operated by Sean Collins. This public website describes the platform and
        does not provide access to its private application.
      </p>
      <aside className="review-notice">
        <strong>Draft for owner review</strong>
        <p>
          This policy contains unverified implementation details. It is not a
          final privacy disclosure and must not be used for an OAuth production
          submission until the owner has reviewed and resolved every
          confirmation below.
        </p>
      </aside>
      <section>
        <h2>1. Scope and personal use</h2>
        <p>
          HomeCloud combines personal file management, email productivity,
          fitness analytics, running goals, and custom automation. The private
          application and this informational website are separate. Visiting this
          website does not authorize access to a Google or Fitbit account.
        </p>
        <p>
          This website has no account sign-in, contact form, application
          database, or analytics integration. Hosting providers may process
          ordinary request information to deliver the website; this is separate
          from HomeCloud application data.
        </p>
      </section>
      <section>
        <h2>2. Account authorization and permissions</h2>
        <p>
          Google authorization occurs through the private application, not this
          website. Review the permissions displayed by Google before authorizing
          access. You can review and revoke account access through{" "}
          <a href="https://myaccount.google.com/connections">
            your Google Account connections
          </a>
          . Revoking access does not itself delete previously synchronized
          copies.
        </p>
        <Confirm>
          Verify the exact Google APIs, OAuth scopes, account identifiers,
          read/write capabilities, and whether permissions are requested
          incrementally. Confirm the application behavior after revocation.
        </Confirm>
      </section>
      <section>
        <h2>3. Gmail data and local indexing</h2>
        <p>
          Gmail productivity and email analysis are part of the platform
          described capabilities.
        </p>
        <Confirm>
          Document which message bodies, attachments, headers, labels,
          sender/recipient details, and timestamps are accessed or stored;
          describe local search indexes, derived summaries, and any actions
          taken on behalf of the user. Confirm the purpose of each data category.
        </Confirm>
      </section>
      <section>
        <h2>4. Fitness and workout information</h2>
        <p>
          HomeCloud is intended to bring together Fitbit and Google Health
          information for personal running analytics and goals.
        </p>
        <Confirm>
          Identify the actual APIs and permissions in use, including whether
          Health Connect or another service is involved. Verify workout types,
          heart rate, location/routes, distances, and other information
          collected, plus the purpose of each field.
        </Confirm>
      </section>
      <section>
        <h2>5. Storage and credential protection</h2>
        <p>
          The HomeCloud application operates on a privately managed server. This
          public site has no connection to that server.
        </p>
        <Confirm>
          Verify storage locations, database and backup protections, authorized
          administrators, encryption in transit and at rest, and OAuth
          token/credential encryption and key management. No
          credential-encryption claim is made until those controls have been
          verified.
        </Confirm>
      </section>
      <section>
        <h2>6. Synchronization and purpose limitations</h2>
        <Confirm>
          Confirm which synchronization is user-initiated or scheduled, its
          frequency, how to pause it, and what continues in the background.
          Document how Google information is limited to the authorized,
          disclosed personal productivity features.
        </Confirm>
      </section>
      <section>
        <h2>7. External services and AI</h2>
        <p>
          AI-assisted coaching is among the described HomeCloud capabilities. This
          policy does not claim that all processing stays on the private server.
        </p>
        <Confirm>
          List every external AI or other processor, the exact data sent
          (including Google-derived data), consent controls, retention and
          training policies, and opt-out behavior. Review whether Gmail content,
          fitness records, summaries, or embeddings leave the server.
        </Confirm>
      </section>
      <section>
        <h2>8. Retention, deletion, and access requests</h2>
        <p>
          Contact{" "}
          <a href="mailto:sean.collins@gmail.com">sean.collins@gmail.com</a> to
          ask about stored information or request deletion. Do not include
          passwords, tokens, message contents, or health records in an initial
          email.
        </p>
        <Confirm>
          Set accurate retention periods and deletion steps for primary records,
          local indexes, embeddings, logs, backups, OAuth tokens, and external
          processors. Confirm request verification and response times. No fixed
          deletion deadline is promised here.
        </Confirm>
      </section>
      <section>
        <h2>9. Google API data and Limited Use</h2>
        <p>
          The{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including applicable Limited Use requirements, governs relevant use
          of Google API information. Publishing this website does not
          demonstrate compliance.
        </p>
        <Confirm>
          Verify and approve the HomeCloud Limited Use disclosure after
          reviewing actual use, transfers, human access, and derived data.
          Confirm that HomeCloud does not sell Google user data or use it for
          advertising before publishing those statements as facts.
        </Confirm>
      </section>
      <section>
        <h2>10. Questions and changes</h2>
        <p>
          For privacy questions, contact Sean Collins at{" "}
          <a href="mailto:sean.collins@gmail.com">sean.collins@gmail.com</a>.
          The final policy must identify its effective date and accurately
          describe the application before production use.
        </p>
      </section>
    </main>
  );
}
