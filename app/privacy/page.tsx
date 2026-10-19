import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HomeCloud handles Google account information, running data, AI coaching, disconnection, and deletion.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <main id="main" className="document container">
      <p className="eyebrow">Data & privacy</p>
      <h1>Privacy Policy</h1>
      <p className="document-lead">
        HomeCloud Portal is a privately hosted personal productivity application
        operated by Sean Collins for personal use.
      </p>
      <p>Effective date: October 19, 2026.</p>
      <section>
        <h2>1. The private application and this website</h2>
        <p>
          HomeCloud brings together personal files, email synchronization and
          analysis, development automation, running analytics, race tracking,
          and Running Coach recommendations. Its application and locally stored
          information remain on a privately managed personal computer accessible
          through a private network.
        </p>
        <p>
          This public website provides information only. It does not provide
          application sign-in, access to personal accounts, or access to the
          private server. It has no contact form, application database, or
          analytics integration. The website hosting provider may process
          ordinary web request information to deliver and protect this site.
        </p>
      </section>
      <section>
        <h2>2. Information accessed and its purposes</h2>
        <p>
          HomeCloud accesses information from accounts authorized by its
          operator, within the permissions granted to the connected
          integrations:
        </p>
        <ul>
          <li>
            <strong>Gmail:</strong> email information used for synchronization
            and personal email analysis, including synchronized copies stored
            locally by HomeCloud.
          </li>
          <li>
            <strong>Google Drive:</strong> files and associated file information
            used for development automation and exchanging files.
          </li>
          <li>
            <strong>Google Health/Fitbit:</strong> workout and running
            information used for running analytics, training goals, race
            tracking, and coaching.
          </li>
          <li>
            <strong>Information entered in HomeCloud:</strong> race records,
            goals, coaching check-ins, journal notes, and related training
            context.
          </li>
        </ul>
        <p>
          The Google authorization screen describes the permissions requested by
          each integration. This website does not request Google permissions.
          HomeCloud uses connected information for the personal productivity and
          training features described here; it does not sell user data or use
          Google user data for advertising.
        </p>
      </section>
      <section>
        <h2>3. Local storage and credential protection</h2>
        <p>
          HomeCloud stores its application information locally on the
          operator&apos;s personal computer. Stored OAuth credentials and tokens
          are encrypted. This does not mean that all application records are
          encrypted or that information sent for external AI processing remains
          on that computer.
        </p>
        <p>
          Local application data is not routinely backed up. If server backups
          or other prior copies exist, deleting active HomeCloud records does
          not automatically remove those copies; they must be removed
          separately. This policy does not promise immediate deletion from
          backups.
        </p>
      </section>
      <section>
        <h2>4. Synchronization and authorization</h2>
        <p>
          Synchronization can be started manually and can run on a schedule
          using the permissions granted to HomeCloud.
        </p>
        <p>
          To revoke Google authorization, review HomeCloud under{" "}
          <a href="https://myaccount.google.com/connections">
            Google Account connections
          </a>{" "}
          and remove its access. A local disconnect does not necessarily revoke
          authorization at Google. Removing Google authorization also does not
          by itself delete information already copied to HomeCloud.
        </p>
        <p>
          For Google Health, the private application provides the disconnect
          control described below. For other integrations, including Gmail and
          Drive, contact the operator for local disconnection assistance or
          remove the authorization through Google Account connections. This
          policy does not claim that Gmail or Drive have the same in-app
          deletion controls as running data.
        </p>
      </section>
      <section>
        <h2>5. OpenRouter and AI-assisted coaching</h2>
        <p>
          Running Coach uses an external AI connection through OpenRouter.
          Creating coaching reports or training recommendations may send
          summarized running and training information, together with relevant
          user-entered training notes, to that service and the model provider
          processing the request. Gmail data is not sent to OpenRouter.
        </p>
        <p>
          This transfer supports the personal coaching feature; it is not
          advertising or a sale of data. AI processing is external to the local
          HomeCloud computer. Handling and retention by OpenRouter and the
          selected model provider depend on the services and settings used.
          HomeCloud does not promise that those providers retain no information
          or that a local deletion removes copies already received by them.
        </p>
        <p>
          For questions about the provider used for a particular report or the
          information sent, contact the operator before using the coaching
          feature.
        </p>
      </section>
      <section>
        <h2>6. Running Data & Privacy controls</h2>
        <p>
          The private HomeCloud application includes a Running Data & Privacy
          page at <code>/fitbit/privacy</code>. This is an internal application
          route, not a public link. It offers two separate actions, each
          requiring explicit confirmation:
        </p>
        <ul>
          <li>
            <strong>Disconnect Google Health:</strong> disconnects the
            integration while retaining locally stored running history.
          </li>
          <li>
            <strong>Delete all locally stored running data:</strong> removes
            local workouts, race records, coaching reports, check-ins, journal
            notes, goals, and synchronization checkpoints. This action also
            disconnects Google Health.
          </li>
        </ul>
        <p>
          These controls apply to HomeCloud&apos;s local running records. They
          do not delete data held by Google or Fitbit, do not necessarily revoke
          authorization at Google, and do not guarantee deletion of existing
          backups or information previously sent to an external AI service.
          Manage records held by Google or Fitbit through the respective
          service.
        </p>
      </section>
      <section>
        <h2>7. Retention and deletion requests</h2>
        <p>
          The operator retains local personal information for ongoing use unless
          it is deleted. There is no automatic routine deletion schedule. The
          running-data controls above allow the operator to delete the listed
          local records when desired.
        </p>
        <p>
          To request deletion of other HomeCloud information, ask about retained
          copies, or request assistance with disconnection, email{" "}
          <a href="mailto:sean.collins@gmail.com">sean.collins@gmail.com</a>.
          Identify the integration and categories of information involved. Do
          not include passwords, tokens, private email contents, or health
          records in the initial message.
        </p>
        <p>
          Requests concerning other local records, indexes, credentials,
          backups, or external services require separate review. No fixed
          deletion completion time or automatic deletion from third-party
          systems is promised.
        </p>
      </section>
      <section>
        <h2>8. Google API data and Limited Use</h2>
        <p>
          HomeCloud&apos;s use and transfer of information received from Google
          APIs is subject to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including applicable Limited Use requirements. These requirements
          restrict use to disclosed user-facing features and limit transfers and
          human access, including for information derived from Google API data.
        </p>
        <p>
          HomeCloud does not sell Google user data or use it for advertising.
          Gmail data is not sent to OpenRouter. The external processing
          described in this policy relates to the running and coaching feature.
        </p>
        <p>
          Publishing this policy does not mean that Google has verified or
          approved HomeCloud, its requested permissions, or its private OAuth
          callback.
        </p>
      </section>
      <section>
        <h2>9. Contact and policy changes</h2>
        <p>
          For privacy questions or requests, contact Sean Collins at{" "}
          <a href="mailto:sean.collins@gmail.com">sean.collins@gmail.com</a>.
          Updates to these practices will be reflected in this policy with a
          revised effective date.
        </p>
      </section>
    </main>
  );
}
