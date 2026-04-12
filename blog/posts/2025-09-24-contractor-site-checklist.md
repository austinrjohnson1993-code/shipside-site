---
title: "Seven Things Your Old Web Guy Forgot To Set Up On Your Contractor Site"
slug: contractor-site-checklist
date: 2025-09-24
summary: "Plumbers, electricians, roofers — the seven things that were almost certainly skipped when your site went live, and that are costing you leads every week."
tags: [plumbing, electrical, roofing, contractors, local-service]
reading_time: 4
---

# Seven Things Your Old Web Guy Forgot To Set Up On Your Contractor Site

Not accusing anyone. The guy who built your site in 2019 did a fine job for 2019. These things just weren't standard back then, or they weren't a priority, or the budget ran out and this is where the project stopped.

Here's the checklist. Go open your site and check each one honestly. If you're missing more than three, your site is leaking money every week.

## 1. The phone number isn't a `tel:` link

On your phone, go to your homepage. Tap the phone number in the header. Did it dial?

If not, it's a static piece of text. Every mobile visitor who wants to call you has to copy the number, switch to the phone app, paste it, and dial. Most don't. They close the tab.

Fix: one line of HTML. `<a href="tel:5125551234">(512) 555-1234</a>`. Costs nothing. Takes 30 seconds. Nobody does it.

## 2. No click-to-text

Same deal for SMS. On mobile, a click-to-text link opens the phone's messaging app pre-filled with your number. For emergency trades (plumbing at 11pm, electrical outage at dinnertime), this often converts *better* than a call because the customer doesn't have to talk out loud in their house full of problems.

`<a href="sms:5125551234">Text us</a>`. Same 30 seconds.

## 3. Service area pages

Google's local pack ranks service area pages separately from your homepage. If you serve Georgetown, Round Rock, Hutto, Leander, and Cedar Park, you should have a page for each one — `/georgetown-plumber`, `/round-rock-plumber`, etc. Each page has the exact same services, just with the city name in the H1, the meta description, and a sentence or two about the area.

This is not spammy. This is how Google expects local service content to be structured. Without it, you're invisible for 4 out of your 5 service areas.

## 4. Google Business Profile linked to the site

Open your Google Business Profile (formerly Google My Business). Is there a URL to your website set? Is that URL using the same protocol (https://) and the same domain (with or without www) as everything else you do?

If there's a mismatch — `www.yoursite.com` on GBP but your actual site redirects to `yoursite.com` — Google counts it as two different sites and splits your ranking signal in half.

Fix: log in, fix the URL, wait 2 weeks.

## 5. Schema markup (`LocalBusiness` and `Service`)

This is JSON that tells Google specifically: "I am a plumber. My service area is this zip code list. I am open these hours. My phone is this. My services are these."

Without it, Google has to guess. With it, you get rich results in the local pack: hours, service list, ratings, phone number — all directly in the search result without the user even clicking your site.

This takes an hour to set up. Most sites don't have it because nobody thinks about it unless they're an SEO person.

## 6. Form with exactly three fields

Name, phone, "what's the problem." That's it. Everything else you ask on the call.

Twelve-field forms convert at 10% of three-field forms. This is not a preference, it's a measurement.

## 7. A thank-you page that actually does something

After someone submits the form, do they see a thank-you page that (a) confirms you got it, (b) tells them when to expect a call, (c) gives them the phone number as a backup, and (d) fires a Google Analytics / Meta Pixel conversion event?

If it just says "Thanks" and redirects to the homepage, you can't measure your own funnel. You're flying blind.

---

## The pattern

Each of the seven is free, except the schema markup which takes an hour. None of them require redesigning the site. All of them are things the web guy in 2019 wasn't expected to know.

Together, they'll do more for your lead volume this quarter than anything an ad agency could sell you for $2,000/month.

---

*Shipside audits contractor sites for these seven and more. $149 gets the Loom walkthrough and a 1-page fix plan ranked by dollar impact.*
