---
name: Urban Ostentation
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#e9be98'
  on-secondary: '#452b0f'
  secondary-container: '#614325'
  on-secondary-container: '#dab08b'
  tertiary: '#d4cdc8'
  on-tertiary: '#33302c'
  tertiary-container: '#b8b2ad'
  on-tertiary-container: '#484541'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdcbf'
  secondary-fixed-dim: '#e9be98'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#5e4123'
  tertiary-fixed: '#e8e1dc'
  tertiary-fixed-dim: '#ccc5c0'
  on-tertiary-fixed: '#1e1b18'
  on-tertiary-fixed-variant: '#4a4642'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1440px
---

## Brand & Style
This design system embodies the "Urban Ostentation" aesthetic—a fusion of high-end jewelry showroom vibes and premium streetwear culture. The brand personality is aggressive, exclusive, and unapologetically "hype." It targets an audience immersed in trap and funk culture, where luxury is a statement of power rather than tradition.

The visual style is a mix of **High-Contrast Bold** and **Minimalist Noir**. It prioritizes a "Dark Showroom" atmosphere using deep blacks and metallic accents. The UI should feel like a high-production music video: sharp edges, heavy shadows, and reflective surfaces. Imagery is central, utilizing harsh flash photography, high-grain textures, and lens flares to create a sense of immediate, raw luxury.

## Colors
The palette is rooted in the "Deep Dark" spectrum to allow gold and chrome-like reflections to pop. 

- **Preto Principal (#0D0D0D):** The absolute foundation. Use for main backgrounds to simulate a dark, infinite showroom.
- **Preto Elevado (#161616):** Used for cards and surfaces to create subtle separation from the background.
- **Dourado Forte (#D4AF37):** The "Gold" standard. Reserved for primary actions, critical highlights, and "VVIP" status indicators.
- **Marrom Quente (#8E6B4A):** A leather-inspired tone used for secondary accents and depth.
- **Cinza Cimento (#5F5B57):** Represents the urban street element; used for borders, inactive states, and structural lines.
- **Branco Quente (#F2EEE8):** Softens the high-contrast text to maintain a premium feel without being jarringly clinical.

## Typography
The typography is built on **Montserrat** for its geometric, urban weight. It is supported by **Space Grotesk** for technical labels to lean into the "modern streetwear" look.

- **Aggressive Weight:** Headlines must be Bold or Black (800-900 weight).
- **Wide Tracking:** Use wide letter spacing (0.05em to 0.2em) for subheaders and labels to evoke a luxury fashion house feel.
- **Tight Leading:** For large display text, keep line height tight (1.0 - 1.1) to create a "wall of text" impact common in streetwear posters.
- **Uppercase Usage:** Critical navigation and labels should be entirely uppercase to command attention.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the "framed" feel of a high-end magazine or Instagram feed. 

- **Grid:** 12-column layout for desktop, 4-column for mobile.
- **Rhythm:** An 8px/4px base unit system ensures mathematical precision. 
- **Negative Space:** Use "aggressive" white space (or black space, in this case). Content should feel like it has "room to breathe" to increase perceived value.
- **Breakpoints:** 
  - Mobile: 0 - 599px (Margins: 20px)
  - Tablet: 600px - 1023px (Margins: 40px)
  - Desktop: 1024px+ (Margins: 64px)

## Elevation & Depth
In a dark showroom aesthetic, elevation is defined by **Tonal Layers** and **Reflective Highlights** rather than traditional shadows.

- **Stacking:** Level 0 is `#0D0D0D`. Level 1 (Cards/Modals) is `#161616`.
- **Borders as Light:** Instead of shadows, use 1px solid borders in `#5F5B57` (Cement) or `#D4AF37` (Gold) to define the edges of objects.
- **Inner Glow:** Apply a subtle inner 1px stroke (opacity 10%) on the top edge of buttons to simulate overhead showroom lighting hitting the "edge" of a surface.
- **Reflections:** Large image containers should have a low-opacity gradient overlay (from transparent to #0D0D0D) to anchor them into the dark background.

## Shapes
This design system utilizes **Sharp (0px)** corners. Hard edges communicate aggression, precision, and technical streetwear vibes. 

Avoid rounded corners entirely. Whether it is a button, a card, an input field, or an image container, the geometry must be architectural and rigid. The only exception is the "Pill" shape for very specific status tags (like "Limited Drop"), but the default remains sharp.

## Components
- **Buttons:** Primary buttons are Solid Gold (`#D4AF37`) with Black text, sharp corners, and uppercase typography. Secondary buttons are "Ghost" style with a `#5F5B57` border and white text.
- **Cards:** Use the `#161616` surface. Images should take up the full width of the card. Text is always left-aligned with ample padding (24px+).
- **Input Fields:** Bottom-border only (1px solid `#5F5B57`). When focused, the border transitions to Gold (`#D4AF37`).
- **Chips/Tags:** Small, sharp rectangles with a black background and Gold border. Use for "New Drop," "Sold Out," or "Rare."
- **Navigation:** Ultra-minimal. Use large, thin icons or wide-spaced uppercase text. Hide secondary links in a full-screen "Overlay Menu" that uses large `display-lg` typography.
- **Interactive Elements:** On hover, gold elements should glow slightly (using an outer glow with a high spread but low opacity) to mimic the reflection of jewelry.