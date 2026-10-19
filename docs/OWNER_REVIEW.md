# Owner Privacy Review

Status: pending. Prepared October 19, 2026. No private server or credentials accessed.

## Owner-confirmed facts

Confirmed by the owner in this conversation on October 19, 2026 (not a code audit):

- HomeCloud connects to OpenRouter for training plans using only the owner's running statistics.
- OAuth tokens are encrypted; encryption method/key management remain unreviewed.
- Application data is stored locally on the owner's personal computer with no backups.
- Synchronization runs manually and on a schedule; frequency/pause behavior remain unconfirmed.
- The owner has no plans to delete personal data; the policy describes indefinite retention.
- No user data is sold. The owner also confirms no Google data is used for advertising.
- Gmail data does not reach OpenRouter; only the owner's running data is sent there.
- Deletion functionality is being added; availability, scope, and behavior are not yet confirmed.

These facts are incorporated into the policy. Downstream AI providers, exact
payloads, Gmail handling, and deletion procedures still require review.

## Remaining review

For each item, document evidence and replace the corresponding confirmation text
with an accurate disclosure. Do not merely remove the warning label.

- [ ] Confirm operator name, personal-use audience, and contact address.
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
- [ ] Review informational terms and add an accurate privacy effective date.
- [ ] Resolve every `REQUIRES OWNER CONFIRMATION` in the policy.
- [ ] Approve the final text; record approval/date in `content/release.json`.

Never put credentials, personal email content, fitness records, or private network
addresses into this repository as review evidence. Record descriptions of controls instead.
