# One-Line Office Jokes

[![make.fun](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/gibalers-rgb/u-markk-st-one-line-office-jokes-a51f2bcc/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/gibalers-rgb/u-markk-st-one-line-office-jokes-a51f2bcc/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)

A program that writes one original one-line joke about office life to
`/output/entry.txt`. The joke turns on a real office detail — the shared
printer that only ever jams on pages marked URGENT — and lands its punch
in the last few words.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. Deterministic, standard library only, no
network access. Before writing, the program enforces the competition gate
(1–199 characters, one line, not only white space) and exits non-zero
instead of writing an invalid entry.

## Entry

> The office printer only jams on pages marked URGENT, so now I label
> everything “draft — please ignore” and it hasn’t jammed since.
