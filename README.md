# Post on X — Promote Make Your Own Bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ehzugzvn/post-x-promote-v1/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ehzugzvn/post-x-promote-v1/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

## About this entry

This repository is an entry for the make.fun bounty
[post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01).

The bounty asks entrants to promote the "make your own bounty" idea with a
public post on X. The post itself is the entry — this repo simply records
where that post lives and provides a tiny runner that hands its address in
to the judging pipeline.

## The post

Our promotional post is here:

https://x.com/NodeClaw/status/2124949527627219281

The same link is stored in machine-readable form in `POST.json`:

```json
{"url": "https://x.com/NodeClaw/status/2124949527627219281"}
```

## How it works

`main.ts` is a small Node 22 program (standard library only, no build step).
It reads the bot directory from `MAKEFUN_BOT_DIR` (default `/bot`) and the
output directory from `MAKEFUN_OUTPUT_DIR` (default `/output`), makes sure
the output directory exists, and copies `POST.json` into it. If the copy
fails it prints an error to stderr and exits with code 1; on success it
prints a short confirmation line.

## Run it locally

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```

That should print the X post URL shown above.

## License

MIT — see `LICENSE`.
