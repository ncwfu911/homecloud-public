# Search Console Ownership Checklist

The custom domain is live over HTTPS. A Google site-verification TXT record was
already present at the apex during DNS inspection; it was not modified. Its
presence does not establish that the intended Google account owns the property.
Confirm ownership in Search Console before proceeding with the separate OAuth review.

- [ ] Sign in using the Google identity that manages the OAuth project.
- [ ] Check for an existing verified Domain property for `grantablehq.com`.
- [ ] If needed, add a Domain property and copy Google's exact DNS TXT verification record.
- [ ] Add that TXT record at the authoritative DNS provider; preserve existing DNS records.
- [ ] Return to Search Console and verify after propagation.
- [ ] Retain the TXT record; document the verified owner and date without secrets.
- [ ] Confirm the identity submitting OAuth verification has the necessary ownership access.
- [ ] Verify HTTPS and anonymous access to all four intended HomeCloud URLs.
- [ ] Confirm OAuth authorized domains/branding separately; do not change them in this task.

Domain-property verification uses DNS and can cover subdomains. Do not invent a
verification token. A URL-prefix property is a different verification scope.

Primary reference, checked October 19, 2026:
https://support.google.com/webmasters/answer/9008080
