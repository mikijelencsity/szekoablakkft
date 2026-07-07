# MASTER BUILD PROMPT – Szekő Ablakos Website

## ROLE
You are a senior frontend architect and motion designer.

Build a production-ready, premium conversion-focused website using:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GSAP (ScrollTrigger)
- Lenis (smooth scroll)

Follow strictly the provided design system and architecture rules.

---

## INPUT CONTEXT
You must use these internal documents as source of truth:

- design-philosophy.md
- design-principles.md
- typography.md
- motion.md
- conversion.md
- homepage-wireframe.md
- homepage-visual-blueprint.md
- component-map.md

If any conflict exists:
Philosophy > Conversion > Principles > Visual Blueprint > Component Map

---

## CORE GOAL
Create a homepage that:
- builds instant trust in under 5 seconds
- feels premium and Apple-inspired
- guides user attention via motion
- maximizes quote requests

---

## DESIGN REQUIREMENTS

- 90% light theme, blue accents
- minimal dark sections only for CTA breaks
- Satoshi font system
- large imagery, real-world photos only
- no neon, no cyberpunk, no heavy 3D

---

## MOTION SYSTEM

Use GSAP + ScrollTrigger:

Allowed:
- fade + translate reveals
- stagger animations
- sticky scroll storytelling sections
- subtle parallax

Forbidden:
- chaotic motion
- continuous animations
- excessive overlapping effects

Timing:
- 200ms micro interactions
- 300–600ms standard transitions
- 600–1200ms storytelling moments

---

## PAGE STRUCTURE

Build in this order:

1. HeroSection
2. TrustBar
3. ServicesSection
4. ProcessSection
5. ProjectsSection
6. WhyUsSection
7. CTASection
8. Footer

Each section must be a separate React component.

---

## HERO SECTION RULES

- emotional headline only (no service listing)
- one CTA only
- full-width image background
- subtle parallax on scroll
- stagger text reveal animation

---

## SERVICES SECTION RULES

- card-based layout
- alternating visual rhythm
- hover micro-interactions (scale max 1.02)
- scroll reveal animations

---

## PROJECTS SECTION RULES

- real photos only
- mixed grid sizes (non-uniform layout)
- before/after slider included
- scroll-based reveal stagger

---

## PROCESS SECTION RULES

- step-based storytelling
- optional sticky scroll timeline effect
- visual progress indicator allowed

---

## CTA SECTION RULES

- high contrast background
- single focused action
- remove all distractions

---

## IMPLEMENTATION RULES

- Use Next.js App Router structure
- All sections in /components
- Use next/image for optimization
- Mobile-first responsive design
- No unnecessary dependencies

---

## PERFORMANCE RULES

- animations must not block rendering
- lazy load images where possible
- avoid heavy libraries except GSAP
- keep bundle minimal

---

## FINAL OUTPUT EXPECTATION

Generate:
- full Next.js project structure
- all components implemented
- GSAP animations integrated
- responsive layout
- clean, production-ready code

---

## NON-NEGOTIABLE PRINCIPLE

Clarity > Complexity
Trust > Decoration
Conversion > Visual noise