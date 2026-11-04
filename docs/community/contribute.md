---
title: How to contribute
sidebar_position: 4
id: contribute
---

This guide documents the best way to make various types of contribution to Apache Wayang, including what is required before submitting a code change.

Contributing to Wayang doesn’t just mean writing code. Helping new users on the mailing list, testing releases, improving documentation, giving talks, and spreading the word on social media are all valuable contributions. For larger code changes, it helps to first get to know the community and the codebase, for example through some of the contributions below, so that your proposal fits where the project is heading.

The guide starts with ways to contribute that don’t require code and ends with the process for code changes.

## Contributing by helping other users
A great way to contribute to Wayang is to help answer user questions on the dev@ mailing list or in [GitHub issues](https://github.com/apache/wayang/issues). There are always new Wayang users; taking a few minutes to help answer a question is a very valuable community service.

Contributors should subscribe to the dev@ list and follow it in order to keep up to date on what’s happening in Wayang. Answering questions is an excellent and visible way to help the community, which also demonstrates your expertise.

See the [Mailing Lists](/docs/community/mailinglist) guide for guidelines about how to effectively participate in discussions on the mailing list.

## Contributing by testing releases
Wayang’s release process is community-oriented, and members of the community can vote on new releases on the dev@ mailing list. Wayang users are invited to subscribe to this list to receive announcements, test their workloads on newer releases, and provide feedback on any performance or correctness issues found.

## Contributing by reviewing changes
Changes to Wayang source code are proposed, reviewed and committed via [GitHub pull requests](https://github.com/apache/wayang/pulls) (described later). Anyone can view and comment on active changes there. Reviewing others’ changes is a good way to learn how the change process works and gain exposure to activity in various parts of the code. You can help by reviewing the changes and asking questions or pointing out issues – as simple as typos or small issues of style.

## Contributing documentation changes
The documentation on this website, including the [Developer](/docs/guide/getting-started) guides, lives in the [wayang-website](https://github.com/apache/wayang-website) repository. To propose a change, fork that repository, edit the Markdown files under `docs/` (or `blog/` for blog posts), and open a pull request. The repository's README shows how to build the site locally to check your changes.

Javadoc and other documentation generated from the source code are changed in the [main Wayang repository](https://github.com/apache/wayang), following the same process as code changes below.

## Contributing by spreading the word
You don’t need to write code to make a real difference. Helping more people discover and understand Wayang is one of the most valuable contributions, and the PMC takes it into account when considering new committers. For example:

- **Give a talk** about Wayang at a meetup, conference, lecture, or company tech talk. Let us know on dev@ so we can help spread the word.
- **Write a blog post or tutorial** about how you use Wayang, a benchmark you ran, or a lesson learned. We are happy to publish posts on the [Wayang blog](/blog): open a pull request in the [wayang-website](https://github.com/apache/wayang-website) repository with your post under `blog/`, or link to it from your own site.
- **Share on social media**: post about releases, blog posts, and your own Wayang experiments, and follow the project on [LinkedIn](https://www.linkedin.com/company/apachewayang), [X](https://twitter.com/apachewayang), and [YouTube](https://www.youtube.com/@apachewayang).
- **Teach with Wayang**: use it in a course, supervise a student project or thesis, or mentor in programmes like Google Summer of Code.
- **Tell us about your use case**: knowing who uses Wayang and how helps the project set priorities and shows others what is possible. Share it on dev@.

## Contributing bug reports
Ideally, bug reports are accompanied by a proposed code change to fix the bug. This isn’t always possible, as those who discover a bug may not have the experience to fix it. A bug may be reported by opening a [GitHub issue](https://github.com/apache/wayang/issues/new) without creating a pull request (see below).

Bug reports are only useful, however, if they include enough information to understand, isolate and ideally reproduce the bug. Simply encountering an error does not mean a bug should be reported; as below, search the existing GitHub issues and the dev@ mailing list archives first. Unreproducible bugs, or simple error reports, may be closed.

If you know how the bug was introduced, for example by which commit, mention it so that reviewers can easily understand it. The pull request to fix the bug should narrow down the problem to the root cause.

Performance regression is also one kind of bug. The pull request to fix a performance regression must provide a benchmark to prove the problem is indeed fixed.

Note that data correctness and data loss bugs are very serious. Make this clear in the issue title and description. If the bug report doesn’t get enough attention, please send an email to dev@ to draw more attention to it.

It is possible to propose new features as well. These are generally not helpful unless accompanied by detail, such as a design document and/or code change. Large new contributions should be discussed on the mailing list first. Feature requests may be rejected, or closed after a long period of inactivity.

## Contributing to issue triage
Inevitably, some GitHub issues are duplicates, become obsolete, are fixed by another change, can’t be reproduced, or could benefit from more detail. It’s useful to help identify these issues, for example by adding a comment that links to a duplicate, asking for a reproduction, or confirming that a bug still exists on the latest `main`. Committers can then close or label the issue accordingly.

## Preparing a code change
Sometimes, a contributor will already have a particular new change or bug in mind. If seeking ideas, browse the [open issues](https://github.com/apache/wayang/issues) or ask on the dev@ mailing list.

Before proceeding, contributors should evaluate if the proposed change is likely to be relevant, new and actionable:

1. Is it clear that code must change? Opening an issue and pull request is appropriate only when a clear problem or change has been identified. If you are simply having trouble using Wayang, use the mailing list first rather than filing an issue or proposing a change. When in doubt, email dev@ first about the possible change.
2. Search the dev@ mailing list archives for related discussions. Often, the problem has been discussed before, with a resolution that doesn’t require a code change, or recording what kinds of changes will not be accepted as a resolution.
3. Search the [GitHub issues](https://github.com/apache/wayang/issues?q=is%3Aissue) (open and closed) and [pull requests](https://github.com/apache/wayang/pulls?q=is%3Apr) for existing work.
4. Is the scope of the change matched to the contributor’s level of experience? Anyone is qualified to suggest a typo fix, but refactoring the optimizer requires much more understanding of Wayang. Some changes require building up experience first (see above).
5. It’s worth reemphasizing that changes to the core of Wayang, or to highly complex and important modules like the optimizer and the platform integrations, are more difficult to make correctly. They will be subjected to more scrutiny, and held to a higher standard of review than changes to less critical code.

## Contributing new algorithms
This applies, for example, to machine learning algorithms in ML4ALL. While a rich set of algorithms is an important goal for Wayang, scaling the project requires that maintainability, consistency, and code quality come first. New algorithms should:

1. Be used and accepted (academic citations and concrete use cases can help justify this)
2. Be well documented
3. Have APIs consistent with other algorithms in Wayang
4. Come with a reasonable expectation of developer support

## Error message guidelines
Exceptions thrown in Wayang should be associated with standardized and actionable error messages.

### Error messages should answer the following questions

- What was the problem?
- Why did the problem happen?
- How can the problem be solved?

__When writing error messages, you should__:

1. Use active voice
2. Avoid time-based statements, such as promises of future support
3. Use the present tense to describe the error and provide suggestions
4. Provide concrete examples if the resolution is unclear
5. Avoid sounding accusatory, judgmental, or insulting
6. Be direct
7. Do not use programming jargon in user-facing errors

## Code review criteria
Before considering how to contribute code, it’s useful to understand how code is reviewed, and why changes may be rejected. See the [guide for code reviewers](https://google.github.io/eng-practices/review/) from Google’s Engineering Practices documentation. Simply put, changes that have many or large positives, and few negative effects or risks, are much more likely to be merged, and merged quickly. Risky and less valuable changes are very unlikely to be merged, and may be rejected outright rather than receive iterations of review.

### Positives
- Fixes the root cause of a bug in existing functionality
- Adds functionality or fixes a problem needed by a large number of users
- Simple, targeted
- Maintains or improves consistency across Python, Java, Scala
- Easily tested; has tests
- Reduces complexity and lines of code
- Change has already been discussed and is known to committers

### Negatives and risks
- Band-aids a symptom of a bug only
- Introduces complex new functionality, especially an API that needs to be supported
- Adds complexity that only helps a niche use case
- Adds user-space functionality that does not need to be maintained in Wayang, but could be hosted externally
- Changes a public API or semantics (rarely allowed)
- Adds large dependencies
- Changes versions of existing dependencies
- Adds a large amount of code
- Makes lots of modifications in one “big bang” change

## Contributing code changes
Please review the preceding section before proposing a code change. This section documents how to do so.

__When you contribute code, you affirm that the contribution is your original work and that you license the work to the project under the project’s open source license. Whether or not you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project’s open source license and warrant that you have the legal authority to do so.__

If you use AI tools while preparing a contribution, please follow our [guidelines for AI-assisted contributions](/docs/community/ai-tooling-policy).

### Cloning the Apache Wayang™ source code
If you are interested in working with the newest under-development code or contributing to Apache Wayang development, you can check out the `main` branch from Git:
```
git clone https://github.com/apache/wayang.git
```
Once you’ve downloaded Wayang, you can find instructions for installing and building it on the [Compiling Apache Wayang](/docs/guide/installation) page.

### GitHub issues
Wayang uses [GitHub issues](https://github.com/apache/wayang/issues) to track logical issues, including bugs and improvements, and GitHub pull requests to manage the review and merge of specific code changes. That is, issues describe what should be fixed or changed and high-level approaches, and pull requests describe how to implement that change in the project’s source code. Major design decisions are discussed in issues or on the dev@ mailing list.

- Find the existing issue that the change pertains to.
    - Do not create a new issue if your change addresses an existing one; add to the existing discussion and work instead.
    - Look for existing pull requests linked from the issue, to understand if someone is already working on it.
- If the change is new, it usually needs a new issue. However, trivial changes, where what should change is virtually the same as how it should change, do not require an issue. Example: `Fix typos in Foo docs`.
- If required, open a new issue:
    - Provide a descriptive title. “Update web UI” or “Problem in optimizer” is not sufficient. “Spark platform fails to handle empty input in JDBC source” is good.
    - Write a detailed description. For bug reports, this should ideally include a short reproduction of the problem, the Wayang version, and the platforms involved. For new features, it may include a design document.
    - Do not attach a patch file; pull requests are used to propose the actual change.
- If the change is a large change, consider inviting discussion on dev@ first before proceeding to implement it.

### Pull request
Before creating a pull request in Apache Wayang, check that the build and tests pass on your branch. GitHub Actions workflows automatically run the build and tests for every pull request, and every run burdens the project's shared CI resources. The steps below take you through the process.

1. Fork the GitHub repository at https://github.com/apache/wayang if you haven’t already.
2. Clone your fork and create a new branch from `main`.
3. Consider whether documentation or tests need to be added or updated as part of the change, and add them as needed.
    1. When you add tests, make sure they are self-descriptive.
    2. If your pull request fixes a specific issue, consider referencing the issue number in the test, for example:

    ```java
    @Test
    public void testEmptyInput() {
      // Regression test for #1234: a short description of the problem
      ...
    }
    ```

4. Consider whether benchmark results should be added or updated as part of the change, and add them as needed.
5. Run the build and all tests locally (for example `./mvnw clean install`) to verify that the code still compiles, passes tests, and passes style and license-header checks. If style checks fail, review the Code Style Guide below.
6. Push commits to your branch on your fork.
7. Open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) against the `main` branch of [apache/wayang](https://github.com/apache/wayang). This triggers the CI workflows on the pull request.
    1. Give the pull request a short, descriptive title. If it resolves an issue, write `Fixes #1234` (or `Closes #1234`) in the description so the issue is linked and closed automatically when the pull request is merged.
    2. If the pull request is still a work in progress and not ready to be merged, but needs to be pushed to GitHub to facilitate review, open it as a [draft pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests).
    3. Consider identifying committers or other contributors who have worked on the code being changed. Find the file(s) in GitHub and click “Blame” to see a line-by-line annotation of who changed the code last. You can add @username in the PR description to ping them.
8. Comment on the related issue, if any, to let others know you are working on it. There is no need to be assigned to the issue to work on it.

### The review process
- A pull request needs at least one approving review from a committer before it can be merged; for larger changes, such as new features, API changes, or changes to the core or optimizer, two committer reviews are recommended. Other reviewers, including non-committers, may also comment on the changes and suggest modifications. Changes can be added by simply pushing more commits to the same branch.
- Lively, polite, rapid technical debate is encouraged from everyone in the community. The outcome may be a rejection of the entire change.
- Keep in mind that changes to more critical parts of Wayang, like its core and optimizer, will be subjected to more review, and may require more testing and proof of correctness than other changes.
- Reviewers can indicate that a change looks suitable for merging by approving the pull request on GitHub or with a comment such as “LGTM”. This means: “I’ve looked at this thoroughly and take as much ownership as if I wrote the patch myself”. If you approve a change, you will be expected to help with bugs or follow-up issues on it. Consistent, judicious approvals are a great way to gain credibility as a reviewer with the broader community.
- Sometimes, other changes will be merged which conflict with your pull request’s changes. The PR can’t be merged until the conflict is resolved. You can resolve it by adding a remote to keep up with upstream changes (`git remote add upstream https://github.com/apache/wayang.git`), running `git fetch upstream` followed by `git rebase upstream/main`, resolving the conflicts by hand, and then pushing the result to your branch with `git push --force-with-lease`.
- Try to be responsive to the discussion rather than let days pass between replies.

### Closing your pull request / issue
- If a change is accepted, it will be merged and the pull request will be closed automatically, along with any issue linked with `Fixes #…`.
    - Note that in the rare case you are asked to open a pull request against a branch other than `main`, linked issues are not closed automatically, so close them manually.
- If your pull request is ultimately rejected, please close it promptly.
- If a pull request has gotten little or no attention, consider improving the description or the change itself, and ping likely reviewers again after a few days. Consider proposing a change that’s easier to include, like a smaller and/or less invasive change.
- If it has been reviewed but not taken up after weeks, after soliciting review from the most relevant reviewers, or has met with neutral reactions, the outcome may be considered a “soft no”. It is helpful to withdraw and close the PR in this case.
- If a pull request is closed because it is deemed not the right approach to resolve an issue, leave the issue open. However, if the review makes it clear that the issue is not going to be resolved by any pull request (not a problem, won’t fix), then close the issue too.

## Code style guide
Please follow the style of the existing codebase.

- For Java code, Apache Wayang follows the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html); the build runs Checkstyle with the matching rules.
- For Python code, Apache Wayang follows [PEP 8](https://peps.python.org/pep-0008/).
- For Scala code, Apache Wayang follows the official [Scala style guide](https://docs.scala-lang.org/style/).
- Every source file must start with the Apache License header; the build checks this automatically.

### If in doubt
If you’re not sure about the right style for something, try to follow the style of the existing codebase. Look at whether there are other examples in the code that use your feature. Feel free to ask on the dev@ list as well and/or ask committers.

## Code of conduct
The Apache Wayang project follows the [Apache Software Foundation Code of Conduct](https://www.apache.org/foundation/policies/conduct.html). The code of conduct applies to all spaces managed by the Apache Software Foundation, including all public and private mailing lists, Slack, issue trackers, wikis, blogs, social media, and any other communication channel used by our communities. A code of conduct which is specific to in-person events (i.e., conferences) is codified in the published ASF anti-harassment policy.

We expect this code of conduct to be honored by everyone who participates in the Apache community formally or informally, or claims any affiliation with the Foundation, in any Foundation-related activities and especially when representing the ASF, in any role.

This code is not exhaustive or complete. It serves to distill our common understanding of a collaborative, shared environment and goals. We expect it to be followed in spirit as much as in the letter, so that it can enrich all of us and the technical communities in which we participate.

This guide is adapted from the [Apache Spark contribution guide](https://spark.apache.org/contributing.html).
