import { readFileSync } from "node:fs";
const release = JSON.parse(
  readFileSync(new URL("../content/release.json", import.meta.url), "utf8"),
);
const policy = readFileSync(
  new URL("../app/privacy/page.tsx", import.meta.url),
  "utf8",
);
if (
  process.env.VERCEL_ENV === "production" &&
  (!release.privacyApproved ||
    !release.approvedOn ||
    policy.includes("REQUIRES OWNER CONFIRMATION"))
) {
  console.error(
    "Production blocked: complete owner privacy review, replace confirmation markers, and record approval in content/release.json. Use a Preview deployment for review.",
  );
  process.exit(1);
}
