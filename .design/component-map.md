# Component Map (Implementation Layer)

## Purpose
Translate visual blueprint into real frontend architecture (Next.js + React + GSAP).

This is NOT design. This is build structure.

---

# PAGE ARCHITECTURE

## 1. Page Layout
- App Router (Next.js)
- Single homepage as main conversion entry
- Section-based scroll page

Structure:
- Hero
- TrustBar
- Services
- Process
- Projects
- WhyUs
- CTA
- Footer

---

# COMPONENT BREAKDOWN

## HERO

Component: HeroSection.tsx

Sub-components:
- HeroHeadline
- HeroSubtext
- HeroCTA
- HeroBackgroundImage

Interactions:
- fade-in on load
- stagger text reveal
- subtle parallax background (GSAP)

GSAP usage:
- timeline on mount
- scroll not required here

---

## TRUST BAR

Component: TrustBar.tsx

Elements:
- stats counter
- icons row

Interactions:
- number count-up on scroll
- fade + slide-up reveal

GSAP:
- ScrollTrigger for counters

---

## SERVICES

Component: ServicesSection.tsx

Sub-components:
- ServiceCard
- ServiceImage
- ServiceText

Layout:
- alternating left/right cards

Interactions:
- hover scale (1.02)
- image reveal on scroll
- stagger animation per card

GSAP:
- ScrollTrigger batch reveal

---

## PROCESS

Component: ProcessSection.tsx

Sub-components:
- StepItem
- ProgressLine

Interactions:
- active step highlight on scroll
- line fill animation

GSAP:
- scroll-driven timeline (scrub)

---

## PROJECTS

Component: ProjectsSection.tsx

Sub-components:
- ProjectCard
- BeforeAfterSlider

Interactions:
- image reveal
- hover zoom
- before/after drag interaction

GSAP:
- scroll reveal stagger

---

## WHY US

Component: WhyUsSection.tsx

Layout:
- split layout (text + image)

Interactions:
- text stagger reveal
- background parallax

GSAP:
- ScrollTrigger fade + shift

---

## CTA SECTION

Component: CTASection.tsx

Interactions:
- subtle button hover animation
- background fade-in on scroll

Goal:
- maximum conversion focus

---

## FOOTER

Component: Footer.tsx

Minimal:
- contact info
- navigation
- legal

No heavy animation

---

# GLOBAL ANIMATION SYSTEM

## Rules
- max 3 animations per viewport
- no constant motion
- scroll-based animation preferred

## GSAP usage model
- ScrollTrigger = main system
- Timeline = hero storytelling only
- Micro interactions = CSS only if possible

---

# NEXT.JS STRUCTURE

/app
  /page.tsx
  /components
    HeroSection
    TrustBar
    ServicesSection
    ProcessSection
    ProjectsSection
    WhyUsSection
    CTASection
    Footer

---

# PERFORMANCE RULES

- images must be optimized (next/image)
- animations must not block render
- avoid heavy WebGL / 3D
- lazy load sections if needed

---

# CORE PRINCIPLE

Design creates trust.
Motion guides attention.
Structure drives conversion.
Code must never interfere with clarity.