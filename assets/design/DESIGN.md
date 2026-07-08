---
name: Lumina Nexus
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
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#fbabff'
  on-tertiary: '#580065'
  tertiary-container: '#e14ef6'
  on-tertiary-container: '#4d0059'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffd6fd'
  tertiary-fixed-dim: '#fbabff'
  on-tertiary-fixed: '#36003e'
  on-tertiary-fixed-variant: '#7c008e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  space-navy: '#0A0E1A'
  deep-indigo: '#1E1B4B'
  electric-cyan: '#22D3EE'
  nebula-purple: '#7C3AED'
  glass-border: rgba(255, 255, 255, 0.12)
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-page: 5vw
  gutter-grid: 2rem
  stack-section: 10rem
  stack-card: 1.5rem
---

## Brand & Style

This design system is engineered for a high-performance Software Engineering portfolio that bridges the gap between digital utility and cinematic 3D immersion. The brand personality is **sophisticated, futuristic, and innovative**, aimed at high-tier tech recruiters and fellow visionaries. 

The aesthetic leverages **Glassmorphism** and **Volumetric Depth**, creating a UI that feels like a physical light-projection floating in a void. It avoids the heaviness of traditional "dark mode" by using deep indigo-tinted blacks and vibrant, glowing accents that simulate a 3D environment even in 2D layouts. The emotional response should be one of "effortless power"—a workspace that is both highly technical and artistically refined.

## Colors

The palette is anchored in a multi-layered dark theme. **Midnight Black** serves as the infinite canvas, while **Deep Navy** and **Indigo** provide structural depth for containers and sections. 

**Electric Blue** and **Violet** are the primary interaction colors, representing energy and logic. **Magenta** is reserved for high-impact accents (like GitHub links or critical "Hire Me" calls-to-action), and **Cyan** is utilized for "highlights"—simulating thin, glowing edges or active status indicators. All colors should be applied with high saturation to pop against the dark backgrounds, often utilizing "bloom" effects (blurred drop shadows of the same hue) to reinforce the 3D, emissive nature of the interface.

## Typography

This design system uses a high-contrast typographic hierarchy. **Montserrat** provides an aggressive, geometric foundation for headlines, utilizing tight tracking to feel dense and technical. **Geist** handles body copy with generous line-height to ensure readability amidst the visual complexity of 3D backgrounds and glass effects. **JetBrains Mono** is integrated for metadata and technical labels, reinforcing the engineer's craft.

For large display text, use a subtle gradient transition from Primary Blue to Secondary Violet to enhance the "futuristic" aesthetic.

## Layout & Spacing

The layout follows a **fluid grid** model that emphasizes breathing room. On desktop, a 12-column grid is used with wide 5vw margins to allow the 3D environment to be visible on the edges of the screen.

Vertical rhythm is expansive; sections are separated by large `10rem` gaps to signify clear thematic shifts (e.g., from "Experience" to "Projects"). Elements should feel "ungrounded"—use dynamic padding within glass containers to ensure content never feels cramped. On mobile, the system collapses to a 4-column grid with a `margin-page` of `1rem`, and `stack-section` reduces to `5rem`.

## Elevation & Depth

Visual hierarchy is achieved through **Glassmorphism** and **Volumetric Lighting**.
- **Surface Level 0:** The infinite void (Midnight Black).
- **Surface Level 1:** Deep Navy floating panels with `backdrop-filter: blur(12px)` and a subtle `0.5px` white border at 10% opacity.
- **Surface Level 2:** Active states or tooltips, using **Ambient Shadows**. These are extra-diffused shadows (`blur: 40px`) tinted with the primary or secondary color to simulate light glowing from beneath the card.
- **Interactive Depth:** Elements should use a Z-axis transform on hover, physically moving "closer" to the user while increasing the shadow diffusion. Use "Bloom" filters on buttons and highlights to give the impression of light emission.

## Shapes

The shape language is **Rounded**, striking a balance between technical precision and organic modernism. Containers use a `0.5rem` radius to feel approachable, while interactive chips and code tags use "Pill-shaped" profiles to differentiate them from structural panels. Large hero components may use asymmetrical radii or clipped corners to lean into a more "cyberpunk-lite" geometry.

## Components

### Buttons
- **Primary:** Gradient background (Electric Blue to Violet), high-saturation bloom shadow on hover, white text.
- **Ghost:** Thin `1px` border using Cyan, no background, transitions to a low-opacity Cyan fill on hover.

### Glass Cards
- All cards feature a `12px` backdrop-blur.
- **Project Cards:** Feature a background image with a 40% black overlay that clears on hover to reveal the full visual.

### Input Fields
- Dark, inset backgrounds with a thin bottom border. The border glows Electric Blue when focused.
- Labels use `label-caps` typography style.

### Chips & Tags
- Used for tech-stack indicators. Transparent background with a subtle border of the associated language color (e.g., Yellow for JS, Blue for React) and a low-opacity "glow" fill.

### Interactive Depth
- All cards and buttons should respond to mouse position using a subtle 3D tilt effect, reinforcing the system's "Volumetric" narrative.