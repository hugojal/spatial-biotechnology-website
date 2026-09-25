# Spatial Biotechnology — Brand Guidelines

**Rovira Clavé Lab — spatial multi-omics of cancer clones**

This file is the source of truth for any agent building or editing the
`spatial-biotechnology-website` project. Machine-readable values (hex codes,
font stacks, file paths) are duplicated in `tokens.json` in this same folder —
read that file for exact values, use this file for the reasoning and rules
behind them.

## The mark

The mark is a lattice of cells (a grid, echoing the group's own "vast number
of possible spatial patterns" figure). Out of that field, one small connected
cluster resolves into a stable pattern, drawn in two interleaved colors —
reading as a clone establishing territory in a tumor, or as a multiplexed
imaging channel resolving out of dozens of overlaid signals.

Logo files live in `brand/logo/`:

| File | Use |
|---|---|
| `mark-color.svg` | Full-color mark, for paper/light backgrounds |
| `mark-mono-ink.svg` | Single-color (ink) mark, for light backgrounds |
| `mark-mono-paper.svg` | Single-color (paper) mark, for dark/ink backgrounds |
| `wordmark-lockup.svg` | Horizontal icon + wordmark, for headers/nav |
| `favicon.svg` | Cluster-only stamp, for favicons and sizes under 24px |

Rules:
- Minimum clear space around the mark = one cell radius (14px at the 240px reference size).
- Never scale the full mark below 24px — use `favicon.svg` instead.
- Never recolor the cluster outside channel cyan/magenta.
- Never rotate, mirror, or skew the lattice.
- Never add drop shadows, gradients, or glows.
- Never pair the mark with unrelated science iconography (DNA helices, beakers, microscopes).

## Color

| Name | Hex | Role |
|---|---|---|
| Ink | `#0B0E14` | Primary dark background / primary text on paper |
| Paper | `#EEF0EA` | Primary light background |
| Paper Dim | `#E1E4DB` | Secondary light surface (cards, hairlines on paper) |
| Slate | `#4A5471` | Neutral UI, muted labels, unmarked/background elements |
| Channel Cyan | `#1FA9A0` | Accent — always paired with Channel Magenta, never alone |
| Channel Magenta | `#C23E77` | Accent — always paired with Channel Cyan, never alone |

Cyan and magenta are reserved for marking distinct things (e.g. two datasets,
two states, the logo cluster) — not for general buttons, links, or decoration.
Everyday UI accenting (links, active states, focus rings) should use ink or
slate; reach for the channel colors only when something is genuinely being
distinguished from something else.

## Typography

| Family | Role | Weight(s) |
|---|---|---|
| IBM Plex Sans | Wordmark, headings, UI chrome | 400–700, headings at 600 |
| Source Serif 4 | Running text — group description, paper abstracts, publication-style copy | 400–500 |
| IBM Plex Mono | Real data only — channel counts, coordinates, sample IDs, hex values | 400–500 |

Load via Google Fonts:
```
https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&display=swap
```

Do not substitute a generic system sans/serif for these three — the mono face
in particular should never be used for decorative labels or eyebrows, only
for content that is actually data.

## Voice

Write plainly and specifically, in the register of the group's own text: precise,
unhurried, comfortable with technical vocabulary (clonal heterogeneity, spatial
multi-omics, MIBI) without over-explaining it to a lay reader. Avoid marketing
language ("cutting-edge," "revolutionary," "game-changing"). Let the science
carry the weight.

## Reference files in this folder

- `BRAND.md` — this file
- `tokens.json` — machine-readable colors, fonts, and logo rules
- `brand-book.pdf` — the full visual brand book (palette, type specimens, logo system, applications)
- `logo/` — all logo SVGs listed above
