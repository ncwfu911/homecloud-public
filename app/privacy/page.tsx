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
          HomeCloud uses the personal running statistics of its operator for
          running analytics, goals, and training plans. It is a personal-use
          application, not a service that collects running records from the public.
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
          HomeCloud stores its application data locally on the personal computer
          of its operator. OAuth tokens are encrypted. The operator does not
          currently back up this local data. This public site has no connection
          to that computer. External AI processing is described separately below.
        </p>
        <Confirm>
          Confirm who can access the local records, token encryption key
          management, and protections for data in transit. Token encryption does
          not establish that all other stored data is encrypted.
        </Confirm>
      </section>
      <section>
        <h2>6. Synchronization and purpose limitations</h2>
        <p>
          HomeCloud synchronizes information both when the operator starts a
          synchronization manually and through scheduled synchronization.
        </p>
        <Confirm>
          Confirm the schedule, how to pause synchronization, and what continues
          in the background after access is revoked.
          Document how Google information is limited to the authorized,
          disclosed personal productivity features.
        </Confirm>
      </section>
      <section>
        <h2>7. External services and AI</h2>
        <p>
          HomeCloud connects to OpenRouter to create personal training plans
          using only the running statistics of its operator. Running information
          used for that feature is sent to an external AI service; this processing
          does not all stay on the local computer.
        </p>
        <Confirm>
          Identify the models and downstream providers used through OpenRouter,
          the exact running fields sent, and the applicable retention and
          training settings. Confirm consent and opt-out controls and whether
          any other integration can transmit Gmail content, summaries, or other
          Google-derived information. No provider retention or training promise
          is made here.
        </Confirm>
      </section>
      <section>
        <h2>8. Retention, deletion, and access requests</h2>
        <p>
          The operator currently intends to retain personal data indefinitely;
          there is no planned routine deletion schedule. Local application data
          is not currently backed up.
        </p>
        <p>
          Contact{" "}
          <a href="mailto:sean.collins@gmail.com">sean.collins@gmail.com</a> to
          ask about stored information or request deletion. Do not include
          passwords, tokens, message contents, or health records in an initial
          email.
        </p>
        <Confirm>
          Document how data could be deleted if needed, including primary
          records, local indexes, embeddings, logs, OAuth tokens, and information
          processed externally. Indefinite local retention does not describe
          OpenRouter or downstream provider retention. Confirm request
          verification and response times. No fixed deletion deadline is promised.
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
        <p>HomeCloud does not sell user data.</p>
        <Confirm>
          Verify and approve the HomeCloud Limited Use disclosure after
          reviewing actual use, transfers, human access, and derived data.
          Confirm whether any Google user data is used for advertising; the
          absence of data sales does not establish the absence of advertising use.
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
