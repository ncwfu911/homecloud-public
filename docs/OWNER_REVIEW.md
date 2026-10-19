# Owner Privacy Review

Status: publication authorized by the owner's Complete and Publish brief on
October 19, 2026. No private server or OAuth credentials accessed. The public
policy uses confirmed facts and does not claim an independent audit or Google approval.

## Owner-confirmed facts

Confirmed by the owner in this conversation on October 19, 2026 (not a code audit):

- HomeCloud connects to OpenRouter for training plans using summarized training information and relevant user-entered training notes.
- OAuth tokens are encrypted; encryption method/key management remain unreviewed.
- Application data is stored locally on the owner's personal computer with no backups.
- Synchronization runs manually and on a schedule; frequency/pause behavior remain unconfirmed.
- The owner has no plans to delete personal data; the policy describes indefinite retention.
- No user data is sold. The owner also confirms no Google data is used for advertising.
- Gmail data does not reach OpenRouter; only the owner's running data is sent there.
- The latest brief confirms `/fitbit/privacy` is implemented in the private application.
- Disconnect Google Health retains local running history and requires confirmation.
- Delete all local running data removes workouts, races, coaching reports, check-ins,
  journal notes, goals, and sync checkpoints, and also disconnects Google Health.
- Deletion requires confirmation and does not delete Google/Fitbit records or
  automatically remove backups or external AI copies.
- Google Drive supports development automation and file exchange.

These facts are incorporated into the policy. Downstream AI providers, exact
payloads, detailed Gmail/Drive scopes, and deletion beyond the confirmed running
controls still require review. The policy avoids promising unverified controls.

## Remaining review

These checks support the separate OAuth review. They do not imply the public
policy contains placeholders; the published text discloses actual known behavior
and makes no promises about unknown encryption, provider retention, or deletion timing.

- [x] Owner supplied operator/contact and personal-use context.
- [ ] List actual Google APIs and OAuth scopes, including all read/write operations.
- [ ] Specify Gmail content, attachments, metadata, local indexes, and derived data stored.
- [ ] Identify the actual Fitbit/Google Health APIs and fitness fields accessed.
- [ ] Verify storage/backup locations and who can access records.
- [ ] Verify OAuth credential encryption, key management, and transit protections.
- [ ] Describe manual/scheduled synchronization, pause controls, and revocation behavior.
- [ ] Map each data category to its disclosed user-facing purpose.
- [ ] Identify external AI/other providers, payloads, consent, training, retention, and opt-out.
- [x] Owner confirmed no data sales and no use of Google data for advertising.
- [ ] Verify Limited Use compliance for raw and derived Google API data and human access.
- [ ] Specify retention/deletion for records, indexes, embeddings, logs, backups, and processors.
- [ ] Confirm deletion request verification and realistic response periods.
- [x] Privacy effective date added; informational terms retained.
- [x] Draft markers replaced with factual disclosures and explicit limits.
- [x] Publication authorization recorded in `content/release.json` from the owner's brief.

Never put credentials, personal email content, fitness records, or private network
addresses into this repository as review evidence. Record descriptions of controls instead.
