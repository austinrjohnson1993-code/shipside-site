// Static contract test: public Shipside offer safety (2026-05-15).
//
// Public pages must not sell stale page-count/payment promises or unsupported
// package mechanics. Historical code tokens like "catch (_)" are ignored by
// scanning only public content extensions.

import fs from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url);
const ROOT_PATH = root.pathname;

const FILE_EXTENSIONS = new Set(['.html', '.md']);
const EXCLUDED_DIRS = new Set(['.git', '.vercel']);

const BANNED = [
  ['fixed page-count package promise', /\b(?:5|five)[-\s]?page\s+(?:site|package|build|promise)\b|\b(?:3|three)[-\s]?page\s+(?:site|package|build|promise)\b|Home,\s*About,\s*Services,\s*(?:Work|Gallery)/i],
  ['old $750 flat / one-time framing', /\$750\s+(?:flat|one[-\s]?time|only|build only)|\$750\s*\/\s*7|\$750\/7/i],
  ['optional retainer / website-only framing', /optional (?:hosting|monthly|retainer)|retainer optional|website-only|one-time website/i],
  ['domain setup sold as old add-on', /Domain Setup\s*[—-]\s*\$75|Domain setup \$75|The Paperwork|\$75 flat[^.\n]{0,80}domain/i],
  ['obsolete add-on menu names', /The Oil Change|Pocket Pager|Photo Drop|Site Care Starter/i],
  ['unsupported Call Catcher mechanics', /Call Catcher[^.\n]{0,160}(?:automatic text-back|auto text-back|fires? a text-back|follow-up cadence|lead row creation|booked job)/i],
  ['unsupported Owner Inbox mechanics', /Owner Inbox[^.\n]{0,180}(?:every lead|lead statuses|notes|reminders|monthly lead summary|one place for everything)/i],
  ['current Control as full CRM promise', /Control[^.\n]{0,120}full CRM|full CRM setup(?![^.\n]{0,80}scoped separately)/i]
];

function listFiles(dir) {
  const abs = path.join(ROOT_PATH, dir);
  const out = [];
  for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
    if (EXCLUDED_DIRS.has(entry.name)) continue;
    const entryPath = path.join(abs, entry.name);
    if (entry.isDirectory()) {
      out.push(...listFiles(path.relative(ROOT_PATH, entryPath)));
    } else if (FILE_EXTENSIONS.has(path.extname(entry.name))) {
      out.push(path.relative(ROOT_PATH, entryPath));
    }
  }
  return out;
}

const files = listFiles('.').sort();
let failures = 0;

for (const rel of files) {
  const text = fs.readFileSync(path.join(ROOT_PATH, rel), 'utf8');
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const [name, rx] of BANNED) {
      if (!rx.test(line)) continue;
      failures += 1;
      console.error(`FAIL ${rel}:${index + 1} :: ${name} :: ${line.trim().slice(0, 220)}`);
    }
  });
}

console.log(`SCAN ${files.length} files`);

if (failures) {
  console.error(`FAIL ${failures} public offer issues found`);
  process.exit(1);
}

console.log('PASS Shipside public offer scope lock');
