---
title: "The Seven-Day First Build: What Fits, What Doesn't, And Why Scope Matters"
slug: seven-day-first-build
date: 2025-12-19
summary: "A 7-day first build is not a 7-day negotiation. Here is what fits in the build window, what does not, and why tight scope is the whole reason it works."
tags: [first-build, saas, founders, shipside]
reading_time: 4
---

# The Seven-Day First Build: What Fits, What Doesn't, And Why Scope Matters

A founder messaged me last summer asking for a seven-day first build for a fitness app. Onboarding flow, workout library, progress tracking, social feed, in-app purchases, push notifications, email onboarding sequence, admin dashboard, and analytics.

I said no.

Not because any one of those is hard, but because all of them together is not a seven-day build. It's a three-month build. Calling something a first build only matters if the scope is actually tight. What founders usually mean is "my full product, just cheaper." What they really need is the smallest thing a real user can try.

## What actually fits in seven days

Here's what a real seven-day first build looks like:

- **One user flow, end-to-end.** Sign up, do the one core action, see the result. That's it.
- **Auth via Clerk or Supabase Auth.** Not custom. Not OAuth integrations. Email + password or magic link.
- **Database via Supabase or Postgres on Neon.** One or two tables. Not a schema that has to survive production traffic on day one.
- **One landing page.** Hero, three benefit blocks, pricing, footer. The landing page is part of the seven days.
- **Deployed with a real domain.** Custom domain, SSL, analytics. Done.
- **One payment flow if needed.** Stripe checkout link. Not a custom subscription dashboard.

What's not in the seven days:

- No mobile app (that's a separate 14-day project minimum)
- No admin dashboard (use the Supabase UI until you have 100 users)
- No complex search (ship text-based, add semantic later)
- No AI features unless it's literally the product (a ChatGPT wrapper is fine, a "smart" feature on top of something else is scope creep)
- No social graph, feed, DMs, notifications, or any feature that assumes more than one user is using it simultaneously
- No onboarding emails, drip campaigns, or lifecycle marketing (that's post-launch work)

## Why the scope rules are the whole product

The founder who messaged me about the fitness app didn't want a first build. He wanted validation that his full product was worth building. Those are different things.

A first build answers one question: *does anyone care enough about this specific thing to sign up, use it once, and come back?*

If the answer is yes, you build the rest. If the answer is no, you didn't waste three months building a social feed nobody uses.

The seven-day constraint is what makes the question answerable. A three-month build gives you a hundred ways to explain away the result: "we didn't market it well," "the onboarding wasn't polished," "the design could've been tighter." A seven-day build with one user flow either gets used or it doesn't. There's nothing to blame.

## What week two looks like

If the first build works - meaning people sign up, use it, and some small percentage come back - week two is not "add all the other features." It's this:

1. Talk to the first 10 users. Find out which feature they wished existed when they hit a wall.
2. Build that feature. Just that one.
3. Ship it by the end of the week.

Repeat until you have a product.

Most founders skip step 1 and go straight to step 2, except they build five features instead of one. That's how a seven-day build becomes a six-month project that nobody uses.

## The founder I said no to

I'm not going to name him. He went to another shop that said yes, spent $18,000, got a half-finished app, and shut it down six months later because he couldn't afford to finish it.

The irony is that his original idea was good. A seven-day first build of just the workout-logging flow would have validated it. He could've known by July whether it worked. Instead he spent until February and learned nothing.

Saying no to scope is the kindest thing a builder can do for a founder. Most builders don't, because saying no costs them the revenue.

Shipside does, because the whole model depends on it.

---

*Shipside ships seven-day first builds with one real user flow, on Supabase + Stripe. $1,500 flat, scope locked on day one.*
