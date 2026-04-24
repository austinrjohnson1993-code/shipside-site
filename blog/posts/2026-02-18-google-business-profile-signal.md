---
title: "The Google Business Profile Setting That's Splitting Your Ranking In Half"
slug: google-business-profile-signal
date: 2026-02-18
summary: "If your Google Business Profile URL doesn't exactly match your website's live URL, Google treats them as two different businesses. Most small businesses have this misconfigured and lose half their local ranking."
tags: [google-business-profile, local-search, gbp, ranking]
reading_time: 3
---

# The Google Business Profile Setting That's Splitting Your Ranking In Half

Here's a ranking signal that almost nobody talks about, and that I find misconfigured on about 60% of the small business sites I audit.

Your Google Business Profile (GBP, formerly Google My Business) has a field for your website URL. The URL you put there has to *exactly* match the URL your actual site lives at. If they don't match, Google's local ranking algorithm treats them as two separate entities and splits your citation signal in half.

## What "exactly match" means

Let's say your GBP lists your website as:

`http://yoursite.com`

But when you visit `yoursite.com`, your site does this:

`http://yoursite.com` → redirects to → `https://www.yoursite.com`

You now have two URLs pointing at the same business. Google sees:

- `http://yoursite.com` — one "entity" with the GBP profile
- `https://www.yoursite.com` — another "entity" with all your actual content, reviews, backlinks, and citations

The ranking signal that should go to one unified entity gets divided between them. Your local pack position drops. You don't know why, because nothing changed on your end.

## The four variations that cause this

Any of these mismatches trigger the split:

1. `http://` vs `https://`
2. `www.` vs no `www.`
3. Trailing slash vs no trailing slash
4. Uppercase vs lowercase in the domain (rare but I've seen it)

The most common one is #1 and #2 combined. Businesses signed up for Google My Business in 2012 before SSL certificates were standard, put `http://` in the URL, then switched to HTTPS in 2018 and never went back to update the GBP listing.

## How to check yours in 60 seconds

1. Open your GBP admin at business.google.com
2. Click "Info" or "Edit profile"
3. Note the exact URL listed for your website
4. Open a new browser tab, type your domain name
5. Watch what URL ends up in the address bar after all the redirects settle

Does the GBP URL match the final address bar URL, character for character? Including the protocol, the www, and the trailing slash?

If yes, you're fine. If no, you've been losing ranking signal, possibly for years.

## The fix is 2 minutes

1. Back in GBP admin, edit the website URL
2. Paste in the exact URL from your address bar
3. Save

Google will re-crawl within a few days. Rankings usually improve in 2-4 weeks. I've seen businesses recover two or three positions in the local pack just from this fix alone.

## Why this almost never gets fixed

Because almost nobody in the search-visibility business knows about it except people who actually audit websites. The shops selling you "local search work" are running citation building and writing blog posts. They're not looking at your GBP URL field. The person who set up your GBP originally isn't checking it anymore. Your web developer isn't thinking about it because it's not on the website - it's on Google's side.

The field sits there, wrong, for years. Nothing breaks. The site works. The only symptom is that your competitor ranks above you in the local pack, and nobody can explain why.

## The other GBP things worth checking while you're in there

While you have the admin open:

1. Are your hours correct?
2. Is your primary category the right one? (A plumber should be "Plumber," not "Contractor.")
3. Do you have secondary categories that match the services you actually offer?
4. Is your service area set to the full list of cities you serve?
5. Are there photos uploaded in the last 90 days?
6. Has anyone posted a "Google Post" in the last 30 days? (GBP rewards recency in posts.)

None of those are as high-leverage as the URL fix, but all of them are worth 5 minutes while you're logged in.

## The meta point

Most local businesses are losing ranking not because of missing search work, but because of small configuration errors nobody notices. The URL mismatch on GBP is the most common one I find. The form field count on the website is second. The tap-to-call link is third.

None of them require a monthly retainer to fix. All of them are things a single audit surfaces in ten minutes and a small business can fix themselves in an afternoon.

That's the whole Shipside model in one paragraph.

---

*Shipside builds flat-price websites for local service businesses. Launch is $750 flat, five pages, seven-day delivery.*
