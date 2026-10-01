# Moodboard — Tony Apple

Sites watched with `look_at` (load + scroll frames) before building.

1. **dbrand.com** — black-ground product retail done with confidence, no fear of
   negative space. Take: pure black surface, mustard/amber accent used sparingly
   as the only colour, large flat product photography on light cards punched
   into a dark page, blunt all-caps labels as structure ("Popular Devices",
   "Cases"), horizontal carousel rows of product cards. We take the ground/accent
   contrast and the carousel row pattern, not the humour copy.
2. **nativeunion.com** — tech-accessory DTC with an editorial hero: one huge
   product shot, a short line of copy, sticky nav that compresses on scroll.
   Take: hero treats the product like a hero shot (light falling on material),
   generous top/bottom padding between sections, sticky elements (2) that
   persist as you scroll instead of constant reveal animation.
3. **nomadgoods.com** — premium leather/titanium accessories, serif+sans pairing
   (Aleo for display, Gotham for body) over a warm, almost paper-toned ground
   rather than pure white or pure black. Take: the serif display face paired
   with a geometric sans body, warm neutral ground instead of cold white,
   heavy use of sticky sections (5) as you scroll through product families.
4. **Apple's own shop language** (apple.com/shop/buy-accessories, read as
   reference even though the exact URL 404'd) — SF Pro type, pure white/black,
   huge confident headlines, tight nav. Take: the restraint — one accent colour,
   huge type, nothing fights the product photography.

## Direction for Tony Apple

Tony Apple sells genuine Apple accessories on Duy Tân street in Hanoi — a
small, trusted neighbourhood shop, not a global flagship, so the design borrows
the confidence of dbrand/Nomad but keeps it warm and human rather than cold
flagship-store chrome. Ground: near-black charcoal (`#121212`) so the product
photography (cases, chargers, cables, earbuds, all shot in dramatic single-
source light) reads like jewellery on velvet. One accent only — a warm amber
(`#D98A2B`, close to the amber on an Apple charging LED and on dbrand's CTA)
used for CTAs, numerals, and the thin rule under the eyebrow — never for large
fills. Display face: **Fraunces** (a warm, slightly idiosyncratic serif) for
headlines, paired with **Inter** for body and UI, same pairing logic as
Nomad's serif/sans but swapped into a dark register. Motion language: Lenis
smooth scroll throughout; a load sequence where the hero headline splits by
line and rises with GSAP + SplitType while the hero product photo scales in
from a mask; a horizontal-scrolling product row (the dbrand "Popular Devices"
pattern) driven by ScrollTrigger; sections pin briefly as the accent rule
draws across; photo cards get a parallax drift and a hover tilt (Framer
Motion). No 3D/WebGL — the real product photography carries the page, a scene
would compete with it.
