# SEO-Standortbestimmung — 27. Mai 2026

*4 Wochen nach Launch (29. April 2026)*

---

## Kritischer Vorbefund: Domain-Mismatch

Die im Repo konfigurierte Live-Domain laut `CNAME`-Datei ist **handpanpath.de**, nicht hand-mindful.de. Sitemap und robots.txt referenzieren ebenfalls handpanpath.de. Alle nachfolgenden Checks wurden für beide Domains durchgeführt — keine ist indexiert.

---

## 1. Indexierungs-Status

| | Soll | Ist |
|---|---|---|
| Indexierte URLs | 10 | **0** |
| Sitemap-URLs (Repo) | 10 aktive + 2 Stubs | 12 (alle handpanpath.de) |
| Sitemap erreichbar via hand-mindful.de | — | **403 Forbidden** |

**Diagnose:** Google hat nach 4 Wochen keine einzige Seite indexiert — weder handpanpath.de noch hand-mindful.de. Wahrscheinlichste Ursachen:

- Google Search Console wurde vermutlich nicht eingerichtet / keine manuelle Sitemap-Einreichung
- Die Domain-Unklarheit (hand-mindful.de vs. handpanpath.de) kann zu Crawl-Konfusion führen
- Neue Domains brauchen oft 6–12 Wochen organisch — ohne GSC-Einreichung aber deutlich länger

---

## 2. Ranking-Tabelle der 6 Quick-Win-Artikel

| Suchbegriff | Ziel-URL | Position | Top-3-Konkurrenten |
|---|---|---|---|
| Handpan ohne Noten lernen | /artikel/handpan-ohne-noten/ | **nicht in Top 30** | handpan-portal.de, gokonfetti.com, handpan-portal.de |
| Handpan eigenen Klang finden | /artikel/eigenen-klang-finden/ | **nicht in Top 30** | handpan-portal.de, orgapage.de, caisapan.com |
| Handpan Morgenpraxis | /artikel/handpan-morgenpraxis/ | **nicht in Top 30** | maltemartenmethod.com, handpan-portal.de — *kaum Konkurrenz* |
| Handpan Wirkung Nervensystem | /artikel/handpan-nervensystem/ | **nicht in Top 30** | valeacell.com, topblogs.de, lamaisonprovencale.de — *kein handpan-portal.de* |
| Handpan Hang Tongue Drum Unterschied | /artikel/handpan-vs-hang-tongue-drum/ | **nicht in Top 30** | steeltonguedrum.org, handpan-france.com, sonodrum.net |
| Wie lange dauert Handpan lernen | /artikel/wie-lange-handpan-lernen/ | **nicht in Top 30** | handpan-portal.de (dominant), handpan.online, sonodrum.net |

**Lesart:** Keine Rankings sind bei einer nicht-indexierten Domain erwartbar. Sobald Indexierung einsetzt, sind die beiden Nischen-Keywords ("Morgenpraxis", "Wirkung Nervensystem") die aussichtsreichsten — handpan-portal.de ist dort nicht oder kaum vertreten.

---

## 3. Backlink-Erkenntnisse

Keine externen Erwähnungen von hand-mindful.de oder handpanpath.de in den SERPs auffindbar. Keine Domains mit hoher Authority verlinken bisher.

**Erwartbar** bei einem 4 Wochen alten Hub ohne aktive Linkbuilding-Maßnahmen. Die Ausgangsposition ist neutral, nicht negativ.

---

## 4. Brand-Suche: Handpan Schule des Lebens

handpan.schule steht auf **Position #1**, nilscaspar.de auf **#2**. Die Brand ist in den SERPs verankert. Hand-mindful.de / handpanpath.de erscheint (noch) nicht im Brand-Umfeld — das ist die Lücke, die dieser Hub schließen soll.

---

## 5. Drei konkrete Empfehlungen für die nächsten 4 Wochen

**1. Domain klären und Google Search Console einrichten (sofort)**
Entscheide, ob die kanonische Domain hand-mindful.de oder handpanpath.de ist, und passe CNAME + Sitemap + robots.txt konsistent an. Dann: GSC-Property anlegen, Sitemap einreichen, URL-Inspektion für die Startseite anstoßen. Das ist der einzige Weg, Indexierung aktiv zu beschleunigen.

**2. Schwache Konkurrenz-Keywords als Hebel nutzen**
"Handpan Morgenpraxis" und "Handpan Wirkung Nervensystem" sind die beiden Keywords, bei denen handpan-portal.de nicht dominiert. Diese beiden Artikel mit internen Links vom Hub stärken, die Texte auf semantische Tiefe (konkrete Atemanker, Vagusnerv, Morgenritual-Struktur) ausbauen und als erste Inhalte über nilscaspar.de oder handpan.schule verlinken.

**3. Ersten externen Backlink über handpan.schule setzen**
Ein einzelner redaktioneller Link von handpan.schule auf einen der Artikel — am besten den Nervensystem- oder Morgenpraxis-Artikel — gibt dem Hub den ersten Authority-Impuls. Das ist die direkteste, glaubwürdigste Brücke und gehört noch vor jede externe Outreach-Kampagne.

---

*Tendenz: Die Grundlage ist solide — Inhalte, Struktur, Brand-Differenzierung stimmen. Was fehlt, ist die technische Sichtbarkeit. Sobald GSC greift und der erste interne Backlink gesetzt ist, kann die nächste Standortbestimmung in 4 Wochen echte Bewegung zeigen.*
