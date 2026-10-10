# Design System
Theme: White (light mode) - Clean editorial gallery — bright paper-white space with ink-dark type and a single navy accent.
## Colors
- bg: #FFFFFF   (var(--color-bg))
- surface: #FAF9F6   (var(--color-surface))
- surface-2: #F4F2ED   (var(--color-surface-2))
- text: #14161A   (var(--color-text))
- muted: #5B616B   (var(--color-muted))
- primary: #FFFFFF   (var(--color-primary))
- accent: #1D2F4E   (var(--color-accent))
- border: #E3DFD7   (var(--color-border))
- primary-contrast: #111111   (var(--color-primary-contrast))
- success: #1F8A4C   (var(--color-success))
- warning: #B7791F   (var(--color-warning))
- danger: #C53030   (var(--color-danger))
- focus: #1D2F4E   (var(--color-focus))
## Typography
- Display font: Fraunces
- Text font: Inter
- Heading (h1): clamp(2rem, 5vw + 1rem, 3.75rem)
- Heading (h2): clamp(1.5rem, 3vw + 1rem, 2.5rem)
- Body: 16 px, line-height 1.5
## Buttons
- Primary: bg primary, text primary-contrast
- Secondary: border primary, text primary
- Ghost: text only, underline on hover
- Every button: hover, active, focus-visible (2 px focus colour), disabled
## Logo + icons
- Sprite: icons/icons.svg (logo mark + 16 icons)
- user-circle (section id: #hero), info-circle (section id: #about), bar-chart (section id: #stats), play-rectangle (section id: #content), handshake (section id: #collaborations), briefcase (section id: #services), quote-bubble (section id: #testimonials), mail-open (section id: #contact), instagram (header button: Follow on Instagram + contact social), paper-plane (header button: Collaborate), menu (UI: mobile nav toggle), close (UI: close mobile nav), arrow-right (UI: CTA buttons and link buttons), youtube (contact social icon), tiktok (contact social icon), phone (contact section card)

## Usage
- header: #FFFFFF bg with #E3DFD7 bottom border, text #14161A, sticky and flat
- hero: white #FFFFFF canvas with subtle #FFFFFF-to-#F4F2ED gradient, #14161A display heading, #5B616B subcopy
- headings: #16161A in Fraunces, generous weight for editorial contrast on white
- body text: #14161A on #FFFFFF (contrast ~16:1), #5B616B for secondary/meta text
- buttons primary: #16161A fill with #FFFFFF label; hover darken to #1D2F4E; focus 2px #1D2F4E outline with 2px offset
- buttons secondary: #FFFFFF fill, #E3DFD7 border, #14161A label; hover #FAF9F6 fill; focus #1D2F4E outline
- links: #1D2F4E default, underline on hover, focus ring #1D2F4E
- cards: #FAF9F6 surface, #E3DFD7 border, 1px, soft shadow; nested panels use #F4F2ED
- forms: #FFFFFF inputs with #E3DFD7 border, #14161A text, #5B616B placeholder, focus border+ring #1D2F4E, error border #C53030
- badges: #F4F2ED bg with #44423F text; status badges use #1F8A4C / #B7791F / #C53030 on tinted surfaces
- footer: #16161A bg with #FAF9F6 text and #5B616B muted links for a grounded close

## Rules
- Only the colours above, only these fonts, only these 3 button styles.
- An icon in every section heading and every button.
