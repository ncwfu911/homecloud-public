# Unresolved Google OAuth Issues

This site is supporting documentation, not OAuth verification or a consent-screen change.

- Privacy implementation details and final owner approval are pending.
- The exact APIs/scopes and sensitive/restricted scope classification are unverified.
- Review whether any verification exception applies to the actual personal-use audience;
  do not assume changing app publishing status completes verification.
- The private Tailscale redirect URI needs separate review for the actual client type,
  redirect rules, domain ownership, and reviewer access. No redirect was inspected or changed.
- AI transfers of Google-derived data need a specific Limited Use review.
- Restricted scopes may entail additional verification/security assessment requirements;
  applicability depends on scopes, audience, and actual architecture.
- Search Console/domain ownership and final domain HTTPS remain to be verified.
- After content approval, the owner must configure the intended homepage/privacy/terms
  URLs in Google Cloud and review branding, scopes, and supporting demonstration needs.
- Do not add an OAuth client or generate/store OAuth credentials in this website.

Sources checked October 19, 2026:

- https://developers.google.com/identity/protocols/oauth2/production-readiness/policy-compliance
- https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification
- https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification
- https://developers.google.com/terms/api-services-user-data-policy

Google requires accurate, publicly accessible disclosures describing actual data
use. Applicable Limited Use restrictions also cover derived information. Resolve
implementation facts before publishing an affirmative compliance disclosure.
