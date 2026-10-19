# Unresolved Google OAuth Issues

This site is supporting documentation, not OAuth verification or a consent-screen change.

- Website publication authorized from the owner-supplied facts on October 19, 2026.
  Detailed implementation checks remain in `OWNER_REVIEW.md`; publication is not an audit.
- The exact APIs/scopes and sensitive/restricted scope classification are unverified.
- Review whether any verification exception applies to the actual personal-use audience;
  do not assume changing app publishing status completes verification.
- The private Tailscale redirect URI needs separate review for the actual client type,
  redirect rules, domain ownership, and reviewer access. No redirect was inspected or changed.
- AI transfers of Google-derived data need a specific Limited Use review.
- Restricted scopes may entail additional verification/security assessment requirements;
  applicability depends on scopes, audience, and actual architecture.
- Search Console/domain ownership and final domain HTTPS remain to be verified.
- When separately authorized, configure the following exact branding URLs in Google Cloud:
  - Homepage: https://homecloud.grantablehq.com/
  - Privacy: https://homecloud.grantablehq.com/privacy
  - Terms: https://homecloud.grantablehq.com/terms
  No Google Cloud settings were changed by this website task.
- Do not add an OAuth client or generate/store OAuth credentials in this website.

Sources checked October 19, 2026:

- https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance
- https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification
- https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification
- https://developers.google.com/terms/api-services-user-data-policy

Google requires accurate, publicly accessible disclosures describing actual data
use. Applicable Limited Use restrictions also cover derived information. Resolve
implementation facts before publishing an affirmative compliance disclosure.
