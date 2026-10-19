# HomeCloud Public

Public information website for HomeCloud Portal. Separate from GrantableHQ and
the private HomeCloud application. Next.js, TypeScript, Tailwind CSS; static export.
No database, authentication, API routes, analytics, OAuth credentials, or private-server connection.

## Local development

Use Node 22+ and npm:

```sh
npm ci
npm run dev -- --port 3001
```

Open http://localhost:3001. Production checks:

```sh
npm run lint
npm run build
npm run typecheck
```

Browser QA (with the local site running): `npx playwright install chromium`, then
`npm run qa`. Checks all pages and internal links at desktop and two mobile widths;
screenshots are saved locally to ignored `qa-results/`.

The static output is `out/`. All four routes are accessible without authentication.

## Review status

The owner authorized publication in the Complete and Publish brief on October 19,
2026, including the newly implemented running-data deletion controls. The policy
uses owner-supplied facts; it is not an independent audit or Google approval.
See [owner review record](docs/OWNER_REVIEW.md) for remaining implementation checks.
`scripts/check-release.mjs` continues to block production if approval is withdrawn
or confirmation markers are reintroduced. The private app was not accessed or changed.

## Vercel deployment

1. Authenticate with `vercel login` using the intended personal account.
2. Import `ncwfu911/homecloud-public` as a new project named `homecloud-public`.
3. Choose Next.js, build command `npm run build`, output `out/` (static export).
4. Review Deployment Protection: the production public pages must allow anonymous access.
5. Run checks and commit changes to `main`, the production branch.
6. Deploy with `vercel deploy --prod --yes` if a manual deployment is required.
7. Verify HTTPS and all four routes. Publication authorization is recorded in
   `content/release.json`; update it if policy approval changes.

No environment variables or paid integrations are required. Static hosting fits
the site's technical requirements on the free tier; account eligibility/usage
remain subject to Vercel's plan terms. Do not upgrade plans for this site.

Production builds use `npm run build` via `vercel.json`, ensuring the release guard
also runs on Vercel. No OAuth credentials are required for this public site.

## Connect the custom domain

After approval and production deployment:

1. In this new Vercel project's Settings > Domains, add `homecloud.grantablehq.com`.
2. Copy the exact DNS target Vercel displays for this project.
3. At the DNS host for `grantablehq.com`, add/update only the `homecloud` subdomain
   record, typically a CNAME. Do not change apex, `www`, email, or GrantableHQ records.
4. Wait for Vercel to confirm DNS and issue TLS. Verify all URLs below over HTTPS.

Do not guess a DNS target or create a wildcard record. Domain/DNS access may
require manual authorization. No changes to GrantableHQ are needed.

## Intended public URLs

- https://homecloud.grantablehq.com/
- https://homecloud.grantablehq.com/privacy
- https://homecloud.grantablehq.com/terms
- https://homecloud.grantablehq.com/contact

## Google setup

See [Search Console checklist](docs/SEARCH_CONSOLE.md) and
[unresolved OAuth issues](docs/OAUTH_READINESS.md). This website alone does not
establish Google OAuth compliance or approval. Do not alter existing redirect URIs
or OAuth settings as part of this project.

## Visual asset

`public/workspace.jpg` is an illustrative workspace photograph, not the HomeCloud
server or a screenshot of the application. Source:
https://images.unsplash.com/photo-1497366754035-f200968a6e72
Downloaded for local serving; the website makes no image requests to Unsplash.
No external fonts or scripts are embedded; Next.js serves its own framework assets.
