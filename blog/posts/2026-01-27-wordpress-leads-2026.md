---
title: "Why I Don't Use WordPress For Anyone Who Wants Leads"
slug: wordpress-leads
date: 2026-01-27
summary: "WordPress still runs 40% of the internet. It's also the wrong tool for 90% of local business lead sites. Here's the honest breakdown of why, and what I ship instead."
tags: [wordpress, plain-files, local-service, methodology]
reading_time: 4
---

# Why I Don't Use WordPress For Anyone Who Wants Leads

I'm going to upset people with this one. Fine.

WordPress is the wrong tool for local service business websites whose only job is to capture leads from Google. I build Shipside sites as plain-file builds instead. Here's the actual breakdown of why, without the shiny-build marketing nonsense.

## What WordPress is good for

Let me be fair up front. WordPress is great for:

- Blogs with lots of content and multiple authors
- Sites with heavy editorial workflows (a newsroom, a magazine)
- Sites that need a plugin ecosystem for niche use cases (membership sites, real estate IDX, forum communities)
- Sites where somebody in the office needs to add and edit content daily

For any of those, WordPress is a reasonable choice. This post is not about those.

## What WordPress is bad for

Lead-capture sites for small businesses. HVAC, law, med spas, dental, real estate, plumbing, contractors. The sites where the entire job is: show up in Google, load fast, get someone to call or fill out a form, stop. Maybe 5-10 pages total. Edited twice a year.

For those, WordPress is the wrong tool and the proof is in the numbers.

## The four real problems

**Problem 1: Mobile speed.**

Stock WordPress + a stock theme + 5-15 plugins loads at around 2-4 seconds to interactive on a mid-range phone. Google's mobile speed threshold for local pack ranking is around 2.5 seconds for "good" and 4 seconds for "poor." Most WordPress sites I audit are in the "poor" range, which is where Google actively penalizes local rankings.

A plain HTML export of the same content loads in 0.4-0.8 seconds. Not because plain HTML is magic - because it's already built and served as-is. Which is what WordPress used to do before plugins ate the world.

**Problem 2: The plugin hell tax.**

Every plugin is a third-party script, a database query, and a security surface. The average WordPress site I audit has 12 plugins. Four of them haven't been updated in 18 months. Two of them are doing things the site owner doesn't know about (tracking, ads, "upgrade to premium" upsells injected into the admin panel).

Every one of those is either a performance hit, a security hole, or a maintenance cost.

**Problem 3: Hosting reality.**

Small business WordPress sites run on $8/month shared hosting from GoDaddy or Bluehost, which is the right price for the customer and the wrong place for the site. Shared hosting means the site sits on a server with 200 other sites competing for CPU, and every time one of them gets a traffic spike, yours gets slower.

Plain hosted files on Vercel are free for small sites. Yes, free. The free tier covers roughly 100,000 visits a month. Most local service sites never touch the paid tier.

The customer who was paying $96/year for GoDaddy hosting is now paying zero and getting a 5x faster site. The only reason they're not already doing it is nobody told them.

**Problem 4: Maintenance cost.**

WordPress requires updates. Core updates, theme updates, plugin updates. If you don't do them, you get hacked (not a theory — check how many WordPress sites are running compromised versions; the number is terrifying). If you do do them, sometimes an update breaks the site and you have to pay someone to fix it.

A plain-file site has none of this. There's nothing to update. The HTML is just sitting there. It will still work in 2030.

## The one legitimate WordPress argument

"But the customer needs to be able to edit the site themselves without calling a developer."

Fair point. Except in practice, 90% of small business owners never edit their website. They call their web guy twice a year to update the phone number and add a testimonial. That's it.

For the 10% who genuinely want to edit themselves, I recommend a headless CMS (Sanity, Contentful, Decap) pointed at the plain-file site. The editor gets a clean interface, the site stays fast, the business owner doesn't need to touch WordPress admin. Best of both worlds. Costs $0-$10/month for most use cases.

## When a rebuild makes sense

Not every WordPress site needs to be rebuilt. Here's the rule I use:

- **Mobile pagespeed score under 50** → rebuild, it's an emergency
- **More than 8 active plugins** → rebuild
- **More than 12 contact form fields** → rebuild (it's a funnel problem, not a plumbing problem, but the rebuild is the cheapest time to fix both)
- **Everything else** → leave it alone, the WordPress site is fine

## What I ship instead

Plain HTML + Tailwind for styling + Vercel for hosting + Sanity for the CMS if the customer wants self-edit. Flat price, 7-day turnaround on rebuilds, full content migration included.

That build recipe isn't novel and I didn't invent it. It's the same recipe half of Silicon Valley ships marketing sites on. What's novel is offering it at a flat $499-$1,200 price point for local service businesses who've been quoted $5,000 for a "modern redesign" by someone trying to resell the same WordPress theme with a different header image.

---

*Shipside rebuilds slow WordPress lead sites as plain-file builds on Vercel. Flat price. 7 days. You own the code.*
