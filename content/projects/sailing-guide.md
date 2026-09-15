---
title: "From sailing book to app, with AI-assisted development"
summary: "Turning a book with thousands of photos into a structured app, and finding out how a team works with Claude Code."
type: case
order: 3
role: "Concept, UX and front-end"
stack:
  - Claude Code
  - Axure
  - Angular
  - Tailwind
  - PWA inside a native shell
confidential: true
---

## The brief

This project was out of the box compared to the usual clients of the company I worked for. It was based on a book with thousands of photos, and my task was to discover what we could do with the information written in it.

That was a challenge in its own right. Some chapters follow a template, but many diverge from it, and the information is layered and intertwined.

## Concept and design

I approached the concept the traditional UI/UX way, with ideas wireframed in Axure. I started with the main pages, checked them with the team, consolidated their feedback and did a new iteration. Then I repeated that until we had an interactive prototype.

With the prototype in hand, we discussed where we could win time. We hired a freelancer to create multiple designs while I worked on the front-end of other projects. We reviewed those designs the same way we had reviewed the concept, and then started building.

## The build

In the same effort to win time, the team decided to build this project AI-assisted. We set up the foundation by hand with Angular, PrimeNG, Tailwind and TypeScript. While I prepared the design, the full-stack engineer built the routing and the API, which connects to a custom PHP CMS.

Each element on a page is an encapsulated component that can be used elsewhere, as long as it receives the correct data. Eventually the project had its basics in place: data, skeleton and design, ready to run inside a native app.

## Working with Claude Code

It was our first project with Claude, and each developer had their own way of working with it. We quickly noticed we needed a single source of truth, so we created a CLAUDE.md. It describes how the project works, which commands to use, where the data lives and how to access it, the design tokens, and what Claude is and isn't allowed to do.

For my part, it was important that Claude understood how users would use a page or component. Based on the concept, I wrote lengthy prompts explaining the use cases, gotchas, limitations in the data and the preferred flow. That usually got me 80% of the concept, and I tweaked the rest by hand or in a back-and-forth with Claude.

Around this time I also started experimenting with Google Stitch and Claude Design. I fed them the component concepts, explained how I thought each component should work and look, and discussed the results.

## What was hard

The biggest gripe was the misunderstanding between Claude and the design. At one point the interface felt too much like AI design.

So we switched approach. We let Claude do the heavy lifting and the thinking, iterated until we believed users would understand and use it, and then finished the design the way the concept intended.

## Looking back

I think we should have implemented Claude in the concept and design phase, where we used external parties to elevate the design. We could have held AI sessions: the team gives form to an idea in the meeting, puts it into words, and Claude realises it on the spot as a super fast developer.
