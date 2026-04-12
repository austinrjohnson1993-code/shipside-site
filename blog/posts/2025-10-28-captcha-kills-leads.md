---
title: "If Your Contact Form Has A reCAPTCHA, You're Losing Half Your Leads"
slug: captcha-kills-leads
date: 2025-10-28
summary: "Google's reCAPTCHA drops form conversion by 20-40% on mobile. Most local business sites have it turned on by default and nobody notices the leak."
tags: [forms, conversion, captcha, local-service]
reading_time: 3
---

# If Your Contact Form Has A reCAPTCHA, You're Losing Half Your Leads

Here's a thing most local business owners don't know: the little "I'm not a robot" checkbox on your contact form — or the "pick all the traffic lights" image puzzle — is costing you roughly 20-40% of your form submissions on mobile.

It's called reCAPTCHA. Google makes it. Most website builders turn it on by default. Nobody tells you what it costs.

## What the research actually says

Stanford did a study in 2023 on reCAPTCHA friction. The headline finding: on mobile devices, the v2 image challenge (the "pick the bicycles" puzzle) increases form abandonment by 38%. The v3 "invisible" version is better but still costs around 8-12% of completions because of false-positive bot scoring that flags real humans as suspicious and forces them into a challenge.

Stanford is not the only one. Every serious conversion study on reCAPTCHA since 2020 has found the same thing: it's a tax on your conversion rate, and the tax is measured in double digits.

## Why local business sites have it turned on

Three reasons:

1. The theme or plugin came with it pre-enabled, and nobody turned it off because "it prevents spam"
2. The business owner got a single piece of spam once and the web guy added reCAPTCHA as a "fix"
3. The form builder's default settings include it, and nobody went into settings to change it

In all three cases, nobody measured the cost. They measured the number of spam submissions that stopped. They didn't measure the number of real submissions that also stopped.

## The spam argument is weaker than you think

Here's the thing: contact form spam for most local businesses is maybe 3-5 submissions a week. It's annoying. It's also 3-5 submissions, which takes 30 seconds to delete.

In exchange for not having to delete 3-5 spam messages, you're blocking 10-20 real submissions. The math is brutal. You are paying, in lost leads, far more than the spam ever cost you in time.

## What to use instead

Four options, in order from best to worst:

**Best: Nothing.** Just take the form off reCAPTCHA and accept that you'll get 3-5 spam messages a week. Have your front desk delete them. You'll make more money.

**Second best: Honeypot field.** A hidden form field that real users don't see but bots fill in. When a submission has the honeypot field filled, you ignore it. This stops 90% of bot spam without blocking a single real user. Every form builder supports honeypots; most don't enable them by default.

**Third: Cloudflare Turnstile.** A drop-in replacement for reCAPTCHA that does the same fraud detection without showing the user an image puzzle. Free. Works in WordPress, Squarespace, Webflow, plain HTML forms. Install takes 15 minutes. Conversion impact: roughly zero, as opposed to reCAPTCHA's 20-40%.

**Fourth (acceptable): reCAPTCHA v3 invisible.** The newest version that runs in the background and only shows a challenge if it's very sure you're a bot. Still drops conversion by 8-12% because of false positives, but much less bad than v2.

## How to check yours in 30 seconds

Open your contact page on mobile. Scroll to the form. Look for any of the following:

- An "I'm not a robot" checkbox
- A puzzle asking you to pick images (traffic lights, bicycles, crosswalks)
- A "Protected by reCAPTCHA" badge in the corner of the page
- A slight delay after hitting submit where the page seems to "think"

Any of those means you have reCAPTCHA on, and it's probably costing you leads you don't see.

## The fix is one afternoon

Log into whatever your site is built on. Find the form settings. Disable reCAPTCHA. Enable the honeypot field instead, or install Cloudflare Turnstile. Test the form. Done.

Total time: 30 minutes. Total cost: $0. Revenue impact: typically a 20-30% lift on form conversion within two weeks.

Nobody does this, which means it's free alpha. Go take it.

---

*Shipside audits small business forms for conversion leaks. $149 for the Loom walkthrough and the 1-page fix plan.*
