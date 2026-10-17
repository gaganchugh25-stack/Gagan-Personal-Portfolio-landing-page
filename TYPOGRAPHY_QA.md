# Typography QA — 17 October 2026

Scope: typography across the complete landing page in the in-app browser. Desktop, tablet and mobile computed styles were inspected, with visual checks of the biography, smallest-screen hero, expanded FAQs and contact section. This is not a Safari/Firefox compatibility certification.

## Corrections

- Loaded the existing Newsreader italic font file for the signature instead of relying on simulated italic. Kept Manrope for all other interface text.
- Unified biography, results, career, expertise, recognition and FAQ headings on the existing responsive section-heading scale: 36–54px. Removed conflicting tablet sizes. Preserved the approved compact hero scale and the distinct contact display heading.
- Increased 10–11px location and scroll-cue labels to 12px.
- Standardised expertise titles to 24px, award titles to 22px and result subheadings to 20px; corrected heading line spacing.
- Set main reading text and lists to at least 16px, retaining 17px biography text on larger screens. Normalised paragraph/list line-height to 1.75 where it was inconsistent. Supporting metadata remains 12–15px by role.
- Restored the missing word space in “A career shaped by industry leaders.” when the responsive line break is hidden.

## Final breakpoint checks

Counts cover rendered text elements, excluding the icon-only motion control whose accessible label is intentionally not displayed. Inline elements with no layout box are not reported as overflow failures.

| Viewport width | Text elements inspected | Below 12px | Elements with horizontal text overflow | Page horizontal overflow |
|---|---:|---:|---:|---|
| 1440px | 181 | 0 | 0 | None |
| 1024px | 181 | 0 | 0 | None |
| 805px | 180 | 0 | 0 | None |
| 700px | 174 | 0 | 0 | None |
| 375px | 174 | 0 | 0 | None |
| 320px | 174 | 0 | 0 | None |

## Interaction and build checks

- All four FAQs open and close. Answer text: 16px / 28px line-height; no horizontal clipping detected at 320px.
- All three contact fields use Manrope at 16px.
- All internal anchor targets exist; mobile navigation links work.
- Sculpture pause/play toggles work.
- No browser console errors observed on the final build.
- `npm run build`: passed, including compilation and TypeScript validation.

## Scope of source changes

- `src/app/reference-refresh.css`: typography declarations only.
- `src/app/layout.tsx`: Newsreader italic stylesheet import only.
- `src/app/page.tsx`: one whitespace correction only.
- `DESIGN.md`: updated typography guidance.

Career facts, wording (apart from the space), colours, layout declarations, images, icons and animation code were not changed.

Evidence: `.impeccable/review/typography-before.json`, `typography-after.json`, `typography-smoke.json`, `typography-desktop.png`, `typography-mobile-hero.png`, `typography-mobile-contact.png`, and `typography-full-page.png`.
