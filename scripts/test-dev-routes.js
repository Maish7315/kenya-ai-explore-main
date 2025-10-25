#!/usr/bin/env node
// Simple dev-server route tester
// Usage: DEV_URL=http://localhost:5173 node scripts/test-dev-routes.js

const routes = [
  '/',
  '/maasai-mara-gallery',
  '/diani-beach-gallery',
  '/amboseli-gallery',
  '/tsavo-gallery',
  '/lamu-gallery',
  '/fort-jesus-gallery',
  '/hells-gate-gallery',
  '/samburu-gallery',
  '/lake-nakuru-gallery'
];

const defaults = [process.env.DEV_URL, 'http://localhost:5173', 'http://localhost:8080'].filter(Boolean);

const timeoutMs = 5000;

async function checkUrl(base, path) {
  const url = new URL(path, base).href;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return { url, ok: res.ok, status: res.status, length: (await res.text()).length };
  } catch (err) {
    clearTimeout(id);
    return { url, ok: false, status: err.name === 'AbortError' ? 'timeout' : String(err) };
  }
}

async function run() {
  console.log('Testing dev server routes...');

  let base;
  // detect a reachable base URL from defaults
  for (const candidate of defaults) {
    try {
      const res = await fetch(candidate, { method: 'HEAD', redirect: 'manual' });
      if (res && (res.ok || res.status === 200 || res.status === 204 || res.status === 301 || res.status === 302 || res.status === 404)) {
        base = candidate;
        break;
      }
    } catch (e) {
      // try next
    }
  }

  if (!base) {
    console.error('No reachable dev server found. Tried:', defaults.join(', '));
    process.exitCode = 2;
    return;
  }

  console.log('Using base URL:', base);
  let failed = false;
  for (const route of routes) {
    const r = await checkUrl(base, route);
    if (r.ok) {
      console.log(`OK  ${r.status}  ${r.url}  (body ${r.length} chars)`);
    } else {
      failed = true;
      console.error(`FAIL ${r.status}  ${r.url}`);
    }
  }

  if (failed) {
    console.error('\nOne or more routes failed. Make sure the dev server is running and client-side routing is configured.');
    process.exitCode = 1;
  } else {
    console.log('\nAll routes returned OK (or a non-error status).');
    process.exitCode = 0;
  }
}

run();
