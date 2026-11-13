---
title: Becoming a committer
sidebar_position: 5
id: committer
---


Being a committer is about **commitment to the project**, not only about committing code. Committers are people who care about Wayang, are engaged with its community, and stay active over time. Write access to the repositories comes with that role, but it is not what defines it.

Anyone can contribute: see [How to contribute](/docs/community/contribute) for the many ways to get started. The PMC regularly invites new committers from the active contributors.

## What we look for

__Commitment and engagement__: The most important quality is sustained, active involvement. Committers follow the dev@ mailing list, take part in discussions and votes, respond to questions and pull requests, and keep showing up over months, not just for a single contribution. Steady engagement counts for more than one large contribution followed by silence.

__Contributions of any kind__: Contributions do not have to be code. Following the [ASF’s view of merit](https://community.apache.org/contributors/), the PMC considers everything that helps the project, for example:

- code, tests, and reviews of other people’s pull requests
- documentation, tutorials, examples, and the website
- testing release candidates and reporting bugs
- answering questions on the mailing list and in issues
- giving talks, writing blog posts, and promoting Wayang on social media
- mentoring students and newcomers, and organizing events

An ideal committer has taken an “ownership” role in some area, whether that is a component of the codebase, the documentation, the release process, or community outreach, so that others naturally turn to them for that area.

__Quality and care__: Whatever you contribute, do it carefully. For code, this means simple, well-tested, and well-designed changes that fit Wayang’s engineering practices (testability, documentation, API stability, code style). Committers who work on code should also be able to review others’ changes; contributions to critical parts of Wayang, like its core and optimizer, are held to a higher standard.

__Community involvement__: Committers have a constructive and friendly attitude in all community interactions. They help and mentor newer contributors and users, and in design discussions they maintain a professional and diplomatic approach, even in the face of disagreement.

## What is expected of a committer

Becoming a committer is a recognition of what you have already done, and an invitation to keep doing it. Committers are expected to:

- stay engaged with the project and the dev@ mailing list
- help review pull requests and answer questions in their areas
- welcome and guide new contributors
- take part in project discussions and decisions, and use their write access responsibly (see below)

If your circumstances change and you can no longer be active, that is fine: let the PMC know at [private@wayang.apache.org](mailto:private@wayang.apache.org). You remain a committer, and you are always welcome back.

## Becoming a PMC member

The PMC also adds new PMC members. PMC members are expected to carry out PMC responsibilities as described in [Apache Guidance](https://www.apache.org/dev/pmc.html#policy), including helping vote on releases, enforce Apache project trademarks, take responsibility for legal and license issues, and ensure the project follows Apache project mechanics. The PMC periodically adds committers to the PMC who have shown they understand and can help with these activities.

## Review process
All contributions should be reviewed before merging as described in [How to contribute](/docs/community/contribute). In particular, if you are working on an area of the codebase you are unfamiliar with, look at the Git history for that code to see who reviewed patches before. You can do this using `git log --format=full <filename>`, by examining the “Commit” field to see who committed each patch.

## When to commit/merge a pull request
PRs shall not be merged during active, on-topic discussion unless they address issues such as critical security fixes of a public vulnerability. Under extenuating circumstances, PRs may be merged during active, off-topic discussion and the discussion directed to a more appropriate venue. Time should be given prior to merging for those involved with the conversation to explain if they believe they are on-topic.

Lazy consensus requires giving time for discussion to settle while understanding that people may not be working on Wayang as their full-time job and may take holidays. It is believed that by doing this, we can limit how often people feel the need to exercise their veto.

All -1s with justification merit discussion. A -1 from a non-committer can be overridden only with input from multiple committers, and suitable time must be offered for any committer to raise concerns. A -1 from a committer who cannot be reached requires a consensus vote of the PMC under ASF voting rules to determine the next steps within the ASF guidelines for code vetoes. The Wayang project typically uses a 72h time window to conclude votes.

These policies serve to reiterate the core principle that code must not be merged with a pending veto or before a consensus has been reached (lazy or otherwise).

It is the PMC’s hope that vetoes continue to be infrequent, and when they occur, that all parties will take the time to build consensus prior to additional feature work.

Being a committer means exercising your judgement while working in a community of people with diverse views. There is nothing wrong in getting a second (or third or fourth) opinion when you are uncertain. Thank you for your dedication to the Wayang project; it is appreciated by the developers and users of Wayang.

It is hoped that these guidelines do not slow down development; rather, by removing some of the uncertainty, the goal is to make it easier for us to reach consensus. If you have ideas on how to improve these guidelines or other Wayang project operating procedures, you should reach out on the dev@ list to start the discussion.

## How we merge a pull request
Changes pushed to the `main` branch on Apache cannot be removed; that is, we can’t force-push to it. So please don’t add any test commits or anything like that, only real patches. Every pull request needs at least one approving review from a committer before it can be merged. For small changes, such as bug fixes, typos, or documentation updates, one approval is enough. For larger changes, such as new features, API changes, or changes to the optimizer or core, we recommend reviews from two committers, ideally including the owner of the affected module, like ML4ALL or JDBC. They investigate the PR, add remarks and request changes. Please don't take this personally; the team needs to make sure that all code committed to `main` is of high quality and does not break current functionality. Ask dev@ if you have trouble with these steps, or want help doing your first merge. Once a PR is merged please leave a comment on the PR stating which branch(es) it has been merged with.

### Policy on backporting bug fixes
We go in line with pwendell (Apache Spark PMC):

The trade off when backporting is you get to deliver the fix to people running older versions (great!), but you risk introducing new or even worse bugs in maintenance releases (bad!). The decision point is when you have a bug fix and it’s not clear whether it is worth backporting.

I think the following facets are important to consider:

- Backports are an extremely valuable service to the community and should be considered for any bug fix.
- Introducing a new bug in a maintenance release must be avoided at all costs. It over time would erode confidence in our release process.
- Distributions or advanced users can always backport risky patches on their own, if they see fit.
- For me, the consequence of these is that we should backport in the following situations:

1. Both the bug and the fix are well understood and isolated. Code being modified is well tested.
2. The bug being addressed is high priority to the community.
3. The backported fix does not vary widely from the `main` branch fix.

We tend to avoid backports in the converse situations:

- The bug or fix are not well understood. For instance, it relates to interactions between complex components or third party libraries (e.g. Hadoop libraries). The code is not well tested outside of the immediate bug being fixed.
- The bug is not clearly a high priority for the community.
- The backported fix is widely different from the `main` branch fix.


