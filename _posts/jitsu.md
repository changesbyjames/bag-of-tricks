---
title: 'Jitsu: Data ingest & transform'
excerpt: 'Jitsu is in the business of moving, ingesting & storing data while handles errors, retrying, different schedules, different sources, different databases, multi-tenancy.'
link: 'jitsu.com'
date: '2021-11-18T05:35:07.322Z'
---

I _hate_ writing things from scratch but I even look at the problem of “putting simple events into a database” with that twinge of “I can probably do that in a couple days”.

Jitsu, like [Segment][1] before it, is in the business of moving, ingesting & storing the reality of data, not the ideal version I have in my head when I quote a couple days. It handles errors, retrying, different schedules, different sources, different databases, multi-tenancy. It’s written in go, open source, free and extendable to build out new sources when the \~200 odd pre-built sources don’t include what we need.

Pre-built docker image is the best way to host it and it can be deployed  in usefully different ways:
* The core data movement server with the pipeline defined in a .yml file that can be kept in source control. `@jistucom/jistu`.
* A configuration UI & service for setting up pipelines visually. `@jistucom/configurator`.
* A kitchen sink image  `@jistucom/jitsu` that does it all.

### Notes about implementation
_I spoke to one of the developers on their Slack about multi-tenancy. Here is their advice._

The best way to approach this will be assigning a separate key to each tenant, and then attach the key to a destination. Config file is a way to go if you want to manage keys from some external system.

Take a look at `api_keys` configuration section. You either list all keys directly, or configure Jitsu to pull keys from external URL (which could be your app). Then you should take a look at `only_keys` section.

You’d just list keys connected to a particular destination there. I suggest you to set up an UI locally and there’s a button to download config file.

[1]:	segment.com