# Rupendra
Goal: Fix the collaborations image so the face is no longer cut off.
Users: visitors of the site
Type: existing project (edit) · 1 page(s)
## Features (v1)
- change rupendra/rupendra.css: Adjust the .collabs__media img / .media--wide img rules to use object-fit: cover with object-position shifted to show the full face (e.g. object-position: center top), or set object-fit: contain if cropping mus
## Done when (acceptance)
- Face in the collaborations image is fully visible and not cut off
- Image still fits its container without distortion
- No change to the image file or its alt text
- Rest of the #collaborations section remains unchanged
- Other page sections remain visually unaffected
## Out of scope (abhi nahi)
- changing: All text, layout, and other sections of #collaborations
- changing: The image source images/collaborations.webp and its alt text
- changing: All other sections and styles on the page
Request: isme image ka face cut ho rha hai use fix karo [Selected in the preview - change THESE elements, keep the rest of the page] Element 1: <section> selector `#collaborations` Source: rupendra/rupendra.html:262 DOM path: html > body#top > main#main > section#collaborations Text: "BRAND COLLABORATIONS Brands I've partnered with. From launch campaigns to always-on partnerships - here's a snapshot. Swap the names and notes marked [R] with your real collaborations. AX Axion Tec" Size on screen: 303x1267 px at y=6098 Computed styles: color: rgb(23, 20, 39); background-color: rgb(255, 255, 255); font-fa
