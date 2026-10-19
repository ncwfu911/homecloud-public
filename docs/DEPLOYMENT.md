# Production Deployment

Published October 19, 2026.

- Public homepage: https://homecloud.grantablehq.com/
- Privacy: https://homecloud.grantablehq.com/privacy
- Terms: https://homecloud.grantablehq.com/terms
- Contact: https://homecloud.grantablehq.com/contact
- Repository: https://github.com/ncwfu911/homecloud-public
- Published website source: https://github.com/ncwfu911/homecloud-public/commit/953dad3
- Vercel project: `hoa-test-site-s-projects/homecloud-public`
- Deployment: `dpl_F3uwhNjfQYrVWvFcbJAtPS7V6n9K` (READY, production)
- Deployment details: https://vercel.com/hoa-test-site-s-projects/homecloud-public/F3uwhNjfQYrVWvFcbJAtPS7V6n9K

The site is a Next.js static export, served from `out/` using Vercel's Other
framework preset. `vercel.json` selects the build command, output, and clean URLs.
The custom domain was added to this separate project using the existing Vercel
DNS authority. No root/`www`, email, or private server configuration was changed.
No outstanding DNS or TLS issue was observed.

All four URLs returned HTTP 200 without authentication. Production build, lint,
TypeScript, navigation, metadata, and browser/mobile checks passed; see `QA.md`.

## Remaining work outside website publishing

- Confirm Search Console ownership using `SEARCH_CONSOLE.md`.
- Review exact Gmail/Drive/fitness scopes and applicable Google verification requirements.
- Review the private Tailscale callback separately; it was not accessed or changed.
- Confirm detailed AI routing/model retention, payloads, and encryption/key-management
  implementation before making additional assurances or submitting evidence to Google.
- The public policy is based on owner-provided facts; the private implementation
  and deletion controls have not been independently tested by this website project.

Exact Google Branding URLs are the homepage, privacy, and terms URLs above.
Google Cloud OAuth settings were not changed. Publishing the website does not
constitute Google OAuth verification or approval.
