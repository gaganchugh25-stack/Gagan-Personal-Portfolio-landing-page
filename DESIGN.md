---
name: Gagan Chugh Portfolio
description: Charcoal, lime and reflective silver; a confident professional portfolio.
colors:
  lime: "#b4ff3c"
  charcoal: "#191b18"
  paper: "#fff"
  pale: "#f5f6f2"
  ink: "#20231d"
  muted: "#555c51"
  line: "#e1e5dc"
  focus: "#466d10"
  chip: "#e8eddf"
  chip-text: "#35432b"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(40px,4vw,56px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(36px,3.6vw,54px)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  button:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "15px"
    fontWeight: 650
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "14px"
  signature:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "34px"
rounded:
  field: "8px"
  portrait: "16px"
  panel: "18px"
  form: "20px"
  capsule: "999px"
spacing:
  compact: "12px"
  gap: "24px"
  panel: "32px"
  section-desktop: "100px"
  section-tablet: "80px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.charcoal}"
    typography: "{typography.button}"
    rounded: "{rounded.capsule}"
    padding: "0 25px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "#caff72"
  navigation:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    height: "96px"
  tool-chip:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.chip-text}"
    rounded: "{rounded.capsule}"
    padding: "10px 17px"
    size: "14px"
  impact-panel:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "36px"
  contact-field:
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
---

# Design System: Gagan Chugh Portfolio

## Overview

**Creative North Star: “Precision in motion.”**

Charcoal framing, vivid lime, generous light content planes and reflective silver establish a confident professional introduction. This is the user-confirmed reference translation, replacing the earlier light-only pearl/blue direction. Career content remains factual; the portrait stays compact.

**Key Characteristics:** centred large type, capsule actions, rounded panels, fine separators and one continuous dimensional sculpture.

UI/UX Pro Max refinement: preserve the approved composition; strengthen small-text readability, sticky section navigation, keyboard focus, touch targets and restrained borders on the transparent panels.

Source of truth: `src/app/globals.css`, followed by `src/app/reference-refresh.css` overrides. The latter wins where declarations overlap; do not restore superseded base styles. Current composition is recorded in `.impeccable/surfaces/home.md` and `.impeccable/component-map.md`.

Frontend-design refinement: use specific supply-chain headings, an open capability layout and restrained motion. The approved hero wording “Supply Chain & Logistics”, compact title size, palette, photo and icons stay unchanged. Rationale: `.impeccable/frontend-refinement.md`.

## Colors

### Primary

**Lime** carries primary actions and selected accents. The user removed lime fills from the OTIF and cost/commercial panels. **Focus** is the inherited dark-green outline on light grounds; contact fields use a lime outline.

### Neutral

**Charcoal** frames the hero, navigation and footer. The user removed the savings-panel fill. **Paper** and **pale** alternate through content. **Ink** carries headings, **muted** carries supporting text, and **line** supplies restrained separation. **Chip** and **chip-text** belong to static tool labels.

**The Contrast Rule.** Use light text on charcoal and dark text on lime; keep the dimensional silver object legible against both.

## Typography

Manrope Variable is self-hosted through Fontsource for headings, body, labels and figures. The supplied Newsreader Variable italic font is loaded for the personal signature; Manrope handles the rest of the interface. Newsreader appears selectively in the italic personal signature, not in section-heading emphasis. Headings use balanced wrapping; paragraphs use pretty wrapping.

The frontmatter defines desktop display and section-heading roles. Hero type becomes (44px) below (1100px), then `clamp(30px,7.2vw,40px)` below (700px), with (28px) below (360px). The designation uses 0.88em to keep it subordinate to the introduction. Section headings share `--type-section: clamp(36px,3.6vw,54px)`, including biography and recognition, with (36px) on mobile. The contact call-to-action keeps its distinct display role. Main reading text and form fields are at least (16px); the biography uses (17px) on larger screens. Reading line-height is generally 1.75. Supporting labels use (12–15px), with no visible text below (12px). Expertise titles use (24px) with 1.35 line-height, award titles (22px) and result labels (20px). Profile lead copy uses (20px), then (19px) on mobile. Section/card headings vary by role rather than sharing one size.

## Layout

The centred container caps at (1240px), with desktop width `calc(100% - 112px)`. Total horizontal subtraction becomes (80px), (64px) and (40px) at the (1100px), (899px) and (700px) breakpoints. Section padding is defined in the normative spacing scale.

The hero centres the introduction, sculpture and actions, with four floating expertise labels and corner metadata. Its height is (780px), becoming (790px) on mobile. The compact portrait is (240px × 300px), (210px) wide on tablet and (180px × 225px) on mobile. Biography and portrait stack below (700px). Impact stacks below (899px); paired result panels stack below (700px). Expertise uses four open rows with title/purpose on the left and skills on the right, stacking below (700px). Career dates move above each role on mobile. Career headings, location, role, progression and prose share a left alignment; prose is capped at 68ch. Employer names use a uniform Manrope 650 uppercase treatment with 0.055em tracking, 0.045em on mobile.

Navigation stays sticky with an active-section underline and anchor scroll clearance. Navigation height is (96px), (88px) below (899px) and (80px) below (700px). Contact is a full-width charcoal section with a two-column interior, stacking on mobile. It is no longer an inset pale panel.

## Elevation & Depth

Content relies on tonal planes and fine borders. The reflective WebGL sculpture provides real dimensional depth. Soft lime edge lighting in hero/contact follows the supplied reference. The portrait has no caption or symbol overlay and uses an identity-preserving ImageGen studio retouch with neutral background, natural colour and centred framing. The original source remains available. A diffuse shadow (`0 4px 18px #16250512`) lifts the fixed motion control; content panels remain flat.

## Shapes

Buttons, expertise labels and tool chips are capsules. Portrait and FAQ corners use (16px), content panels (18px), contact form (20px) and fields (8px). Icons use the retained authored SVG system. Static content panels are not presented as links.

## Components

**Buttons:** lime primary capsule, dark lettering, (54px) minimum height and (25px) horizontal padding. Hover becomes lighter lime and lifts (2px); mobile uses (50px), (14px) type and (18px) padding. LinkedIn uses a white secondary capsule. Keyboard focus remains visible.

**Navigation:** charcoal ground, uppercase GC initials with lime punctuation, centred desktop links and a lime contact capsule. Below (700px), a two-line button opens the anchored link panel. Escape and selecting a link close it; the button exposes its expanded state.

**Panels and chips:** the OTIF, annual-savings and cost/commercial panels have transparent backgrounds, as requested; neighbouring white panels retain their existing treatment. Expertise uses open, transparent rows separated by rules, with (36px) vertical padding on desktop and (28px) on mobile. It has no tile backgrounds or shadows. Tool chips are static (14px) labels, not filters.

**FAQs:** native `details`/`summary` preserves keyboard behaviour. Closed panels are white with a fine border. Open panels become charcoal with a lime indicator and light answer text.

**Contact form:** visible labels, (16px) fields, fine light-green strokes, lime focus and native required/email validation. “Open email draft” composes a `mailto:` draft; no website submission or storage occurs. Status text explains the fallback email link.

**Sculpture and motion:** one fixed, lazily loaded WebGL sculpture rotates on all viewport widths. GSAP/ScrollTrigger shrinks it towards the outer right edge over the first 12% of page progress, then moves it between upper and lower viewport positions throughout the page. Scroll scrubbing is (0.65s), with responsive scale (0.18 desktop / 0.16 mobile), positioned at the outer edge to preserve the reading area. On mobile, four expertise labels form a two-column group above the 240px sculpture to prevent overlap at narrow widths. The compact pause/play control stops autonomous rotation; hidden documents also stop it. Canvas measurement uses `resize={{ offsetSize: true }}` so transformed layout dimensions do not compound the canvas scale.

Hero lines enter over (1.2s), staggered (0.14s), with `expo.out`. Supporting content stays still and fully visible for reading. Timeline growth and the OTIF track respond to scrolling; repeated entrances and heading drift are removed. Reduced motion bypasses GSAP motion, uses the supplied static sculpture image and native anchors; WebGL failure also retains the raster fallback.

## Do's and Don'ts

- **Do** preserve the confirmed charcoal/lime reference, readable (16px) main copy and compact supplied portrait.
- **Do** retain visible content before animation, keyboard access, pause control and reduced-motion fallback.
- **Do** apply the refresh stylesheet after the base stylesheet.
- **Don't** restore the superseded blue/pale-only palette or mobile-only static sculpture rule.
- **Don't** invent projects, commercial prices, clients, achievements or testimonials.
- **Don't** label the email draft action as a sent enquiry.
