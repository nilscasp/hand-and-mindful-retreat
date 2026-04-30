# Automation State

Zentraler Speicher für die selbstlaufende Content-Pipeline. Nicht händisch editieren — die Routinen schreiben hier rein. Manuelle Anmerkungen sind willkommen, werden aber von den Routinen überschrieben, wenn sie im selben Section-Bereich landen.

## Files

| Datei | Wer schreibt | Wer liest |
|---|---|---|
| `state/current-context.md` | Routine 1.1 (Mo) | Routine 1.3 |
| `state/gap-candidates.md` | Routine 1.2 (Mi) | Routine 1.3 |
| `state/draft-queue.md` | Routine 1.3 (1.) | Routine 1.3 (nächster Lauf) |
| `state/performance-log.md` | Routine 1.4 (monatlich) | Routine 1.3 |

## Routinen-Übersicht

- **1.1 — Aktivitäts-Digest** (jeden Montag) — pulls handpan.schule Sitemap-Diff + YouTube RSS, pflegt current-context.md
- **1.2 — Content-Gap-Scan** (jeden Mittwoch) — WebSearch-basiert, prüft Rankings, pflegt gap-candidates.md
- **1.3 — Draft-Produktion** (1. jedes Monats) — kombiniert Context + Gaps, schreibt Artikel-Draft, öffnet GitHub PR
- **1.4 — SEO-Performance** (einmalig 27. Mai 2026, danach monatlich) — Rankings + Indexierung, pflegt performance-log.md

Voller Plan: `~/.claude/plans/automation-handpan-hub.md`
