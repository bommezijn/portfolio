---
title: "Fnd, a community hub for front-end developers"
summary: "My graduation project: a platform that helps front-end developers, especially those starting out, find the right tools and frameworks for their project."
type: case
order: 1
year: "2023"
role: "Research, concept and design"
image: "/projects/fnd/cover.jpg"
confidential: false
---

![The Fnd homepage, with the quiz and results shown as a collage](/projects/fnd/cover.jpg)

## Why

Keeping up with the latest tech, frameworks and tools means scouring the most niche corners of the internet or scrolling through social media. My go-to sites are Awwwards, recent.design and Mobbin, but the information is scattered everywhere.

The project started with a company that wanted to explore how micro-frontends could work for them. When that collaboration didn't continue, I took the project into my own hands and turned the question around: how do developers find the right frameworks and tools among dozens of options?

## The design challenge

How can front-end developers be guided by a digital interactive product to make better-informed choices about the technologies and tools in their stack? The goal was to let developers spend their time learning a technology instead of searching for the right one.

## Research

I benchmarked how Dev.to, Medium, Reddit and Stack Overflow share information with their readers. All four are informative and filterable, but none of them focuses on finding the right tools for a project. A few other things stood out:

- "Roadmap" is the most common way to show beginners a next step, but it rarely tells them what their own next step should be.
- Search results mix current information with articles that are ten years old.
- Topics are broad and rarely specific to front-end development.
- Articles are written by people with a preferred framework, and most platforms give readers no way to push back.

The Stack Overflow Developer Survey 2023 showed that both beginners and experienced developers learn mostly through online videos, blogs and forums. That is exactly where the information is most scattered.

I interviewed two developers who are starting out, a designer moving into front-end and a CMD student, and two experienced front-end developers. Beginners knew very few tools, while experts had discovered too many over their careers. Experts also said they research tools at their desk, not on their phone, so I designed for desktop first. And I learned that the no-code community has its own set of tools, which I had missed.

## Ideation

I used the Disney method to look at the idea as a dreamer, a realist and a critic. The critic kept me grounded: AI can't give good advice from a small dataset, and without users there is no community, only me.

At the Feedback Frenzy, where graduates present their research to peers and supervisors, I pitched three directions:

1. **An interactive virtual world** that guides you to tools in a playful way. The feedback: fun, but a one-timer for a serious audience.
2. **A game-show quiz** that could use AI to interpret open answers. The feedback: promising, but AI is a double-edged sword when the data behind it goes out of date.
3. **A decision-tree quiz** inspired by Duolingo, where every answer narrows the topic. The feedback: the most logical of the three.

Most people wanted the logic of the decision tree combined with the interaction of the quiz, so that became the concept.

## The concept

Fnd has three parts: a quiz, a database and a community.

The quiz asks about your experience and your current or next project. I explored it as a Typeform-like flow of questions and as a Duolingo-style decision tree, where every answer narrows the options.

![A quiz question asking whether you know the difference between frameworks and libraries](/projects/fnd/quiz-question.jpg)

The result explains why a tool matches you, lists its pros and cons, and points to tutorials and videos that the community recommends. If you're not happy with the pick, it suggests alternatives, and flags the ones that are out of date.

![The quiz result recommending React, with the reasons for the match, pros, cons and tutorials](/projects/fnd/quiz-results.jpg)

If you would rather search yourself, the database lists every tool with filters for category, language, GitHub stars, community rating and license. Tools whose information hasn't been updated in a while get a warning.

![The database of tools, with filters on the left and a warning next to an outdated tool](/projects/fnd/database.jpg)

![A tool page for React, with its links, stars, license, pros, cons and recommended videos](/projects/fnd/tool-page.jpg)

Advice is only as good as the information behind it, so I drafted a method to assess every tool. It looks at how old a tool is, how easy its documentation is to find and when it was last updated, how much is written about it, whether it has a community and tutorials, its dependencies and integrations, and whether it's open source.

That information can't stay current if one person maintains it. So anyone can add a tool by pasting its GitHub link, and a crawler fills in what it can. Suggested edits are posted to the community, where members vote on them and discuss them, and moderators check the data. The goal is to limit opinions, keep the data factual, and give less popular tools a fair chance next to the popular ones.

![The form to add a new tool, starting from a GitHub link](/projects/fnd/add-tool.jpg)

![The community page with posts, votes, tags and an edit suggestion](/projects/fnd/community.jpg)

Building all of that in code wasn't feasible in 16 weeks, because the research and the assessment method came first. So I scoped the result to an interactive prototype that works out the key flows.

## Where it ended

The next steps were at least one more tested iteration of the concept, a system to assess tools that could eventually run automatically, and a final prototype with a product quality review.

Ideally I would have built a working prototype in code. Beyond that, the concept could grow into a browser product with a stronger social side, and use crawlers or AI to gather information about tools without depending on what people submit.

## Looking back

I should have anticipated the situation with the company sooner, and explored alternatives before the graduation period started. I lost time I could have used to reframe the problem and the design challenge earlier.

Still, I'm happy with the research, and with discovering a real gap between sharing information and giving developers advice.
