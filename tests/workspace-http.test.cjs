const { test } = require("node:test");
const assert = require("node:assert/strict");

// Run against the local production server:
// node --env-file=.env.local --test tests/workspace-http.test.cjs
const base = process.env.WORKSPACE_TEST_URL || "http://127.0.0.1:3000";
for (const path of ["/workspace", "/workspace/projects", "/workspace/notes", "/workspace/boards", "/workspace/projects/00000000-0000-0000-0000-000000000000"]) {
  test(`${path} requires authentication and cannot be publicly cached`, async () => {
    const response = await fetch(`${base}${path}`, { redirect: "manual" });
    assert.equal(response.status, 307);
    assert.equal(new URL(response.headers.get("location"), base).pathname, "/workspace/login");
    assert.match(response.headers.get("cache-control"), /no-store/);
  });
}

test("sign-in renders without public analytics", async () => {
  const response = await fetch(`${base}/workspace/login`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Back to the workbench/);
  assert.match(html, /noindex/);
  assert.doesNotMatch(html, /googletagmanager\.com\/gtag\/js/);
});

test("a forged session cookie does not grant access", async () => {
  const ref = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname.split(".")[0];
  const fakeSession = Buffer.from(JSON.stringify({ access_token: "forged.invalid.token", refresh_token: "invalid", user: { id: "00000000-0000-0000-0000-000000000000" } })).toString("base64url");
  const response = await fetch(`${base}/workspace/projects`, { redirect: "manual", headers: { cookie: `sb-${ref}-auth-token=base64-${fakeSession}` } });
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location"), base).pathname, "/workspace/login");
});

test("missing callback code safely returns to sign-in", async () => {
  const response = await fetch(`${base}/auth/callback`, { redirect: "manual" });
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location"), base).pathname, "/workspace/login");
});

for (const table of ["workspace_projects", "workspace_notes", "workspace_tasks", "workspace_owners"]) {
  test(`direct anonymous REST access to ${table} is denied`, async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${table}?select=*`, {
      headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY },
    });
    assert.ok([401,403].includes(response.status), `Unexpected REST status ${response.status}`);
  });
}
