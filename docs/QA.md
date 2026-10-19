# QA Results

Checked October 19, 2026:

- Production compilation/static export: passed for `/`, `/privacy`, `/terms`, `/contact`.
- ESLint: passed after resolving initial JSX escaping warnings.
- Browser checks: all four pages returned HTTP 200 at 1440px, 390px, and 320px widths.
- Internal page links: passed at all three widths.
- Horizontal overflow: none at the tested widths.
- Hero photograph: loaded successfully from this site's own public assets.
- External resource requests on homepage: none during browser QA.
- Browser page errors: none during the tested navigation.
- Desktop and mobile homepage screenshots visually reviewed.
- Production release guard: correctly refused an unapproved privacy policy.
- `npm audit --omit=dev`: zero production dependency vulnerabilities.
- Full audit: five high-severity reports in the development-only Next ESLint
  dependency chain (`braces`/`micromatch`/`fast-glob`). The available automated
  suggestion downgrades the Next lint configuration across major versions;
  it was not applied. Recheck upstream tooling before future dependency upgrades.

## Production verification

Verified October 19, 2026 against https://homecloud.grantablehq.com without
cookies, authentication, or TLS bypass:

| Route | HTTP status | Title |
| --- | --- | --- |
| `/` | 200 | HomeCloud Portal |
| `/privacy` | 200 | Privacy Policy &#124; HomeCloud Portal |
| `/terms` | 200 | Terms of Service &#124; HomeCloud Portal |
| `/contact` | 200 | Contact &#124; HomeCloud Portal |

All four routes passed at 1440px, 390px, and 320px widths. Checks included unique
H1s, page descriptions, canonical URLs, internal links, footer privacy links,
no draft markers, no private network/application links, and no horizontal overflow.
The hero loaded from the site's own assets. No browser page errors or external
homepage resource requests were detected. Production desktop home and mobile
privacy screenshots were visually reviewed.

Vercel production deployment `dpl_F3uwhNjfQYrVWvFcbJAtPS7V6n9K` reported READY.
The custom domain has working DNS and HTTPS. `grantablehq.com` and
`www.grantablehq.com` remain assigned to the existing `grantablehq` project.
Only `homecloud.grantablehq.com` was added to `homecloud-public`.

The source release for this deployment is `953dad3`; the subsequent test-script
canonical URL normalization and QA documentation do not change website content.

Still unverified: Search Console ownership by the OAuth project's Google account,
private application implementation, exact scopes, AI provider settings, and
OAuth callback compatibility. These website checks do not establish Google approval.
