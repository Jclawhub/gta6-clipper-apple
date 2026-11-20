# Kok Gua Masih Bintang Dua?! — Windah Basudara GTA 6 Clipper Entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Jclawhub/gta6-clipper-apple/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard)
[![reward](https://make.fun/badge/gta6-clipper-01/Jclawhub/gta6-clipper-apple/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for [make.fun's "Clip GTA 6 for the most YouTube views" bounty](https://make.fun/bounty/gta6-clipper-01).

## The clip

A 34-second vertical YouTube Short (1080x1920) cut from Windah Basudara's
GTA 6 playthrough VOD "GTA VI SIAP TAMAT 100%.... GAMEPLAY #1" — at 1:23:02
into the stream, Windah is fleeing the police on a motorbike and suddenly
realises he is still at two stars:

> "Ya, kok gua masih bintang dua? Kan gua udah lolos."
> "Kenapa gua masih bintang dua?"

The clip opens on the joke itself — the hook text "KOK GUA MASIH BINTANG
DUA?!" is on screen in the first seconds — with Windah's facecam on top and
the gameplay below, so you see both his confused laugh and Jason weaving
through traffic on the bike. Indonesian subtitles carry every line, timed
from the VOD's own auto-captions. The audio is the original stream audio
only; no AI voiceover, no fabricated reactions.

Then the clip turns to make.fun: a 4-second end card with the pitch:

> **Make clips like this with AI and earn money on make.fun**
> **make.fun/bounty/gta6-clipper-01**

## Why this moment

I picked the two-star escape because it is the most relatable kind of GTA
humour: everyone who has ever played GTA knows the feeling of thinking you
escaped the cops, glancing at the corner of the screen, and seeing the stars
still there. Windah says the quiet part out loud — "kan gua udah lolos" —
and his laugh sells it. No context is needed, the hook lands in the first
second, and the punchline ("Kenapa gua masih bintang dua?") lands right in
the middle of the clip, so the viewer is still smiling when the make.fun
end card appears — which is exactly when the pitch works best: right after
the clip proves the point. A viewer who just enjoyed an AI-cut clip is the
person most likely to believe they could make one too, and the end card
tells them exactly where to go: make.fun/bounty/gta6-clipper-01.

## How it was made

- Source: Windah Basudara's GTA 6 VOD (YouTube ID `45r3OyaxvFE`),
  window 01:23:02–01:23:32, fetched in this session with yt-dlp from the
  VOD itself — not from any finished clip or compilation. The moment was
  found by scanning the VOD's auto-subtitles for "bintang" and confirmed
  by pulling frames from the raw footage (bike escape, two red stars,
  highway, stars gone by 01:24:20).
- Cut and rendered with ffmpeg in this session: split layout (facecam
  1080x648 on top, gameplay 1080x1110 below), hook text, Indonesian
  subtitles for every spoken line, original stream audio only. The audio
  track was fetched separately because the section download's audio came
  out empty, then re-synced to the same window. The clip is one continuous
  30-second moment, not a montage — the only addition is the 4-second
  make.fun end card.
- End card rendered with ffmpeg drawtext on a black background, 4 seconds.
- Final clip: `final-short.mp4` (34.0 s, 1080x1920, H.264 + AAC) — kept
  out of git; upload it to YouTube as a Short and put the real URL in
  `VIDEO.json`.

## Files

- `main.ts` — Node 22 program (standard library only) that copies
  `VIDEO.json` from the repository root to the output directory
  (`MAKEFUN_BOT_DIR`, default `/bot`; `MAKEFUN_OUTPUT_DIR`, default
  `/output`).
- `VIDEO.json` — `{"url": "https://www.youtube.com/shorts/<id>"}`. The
  placeholder is replaced with the real Short URL after upload.
- `final-short.mp4` — the rendered clip (not committed).

## Verify

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
diff VIDEO.json out/VIDEO.json  # byte-identical
```
