# Rules

Every rule is checked by an agent. Broken rule = fix it by its number ("Rule 5").

1. Colours only from DESIGN.md (var(--color-...)); no new colour.
2. Every page: <html lang>, viewport meta, a specific <title> + meta description, exactly one <h1>.
3. Icons only from icons/icons.svg (<svg><use href>); decorative icons aria-hidden, icon-only buttons have aria-label. No emoji.
4. No inline style="" or onclick; JS with addEventListener in the project script.
5. No dead links: no href="#", "" or javascript:; every button does something real.
6. No horizontal scroll at 360 px; every tap target at least 44 x 44 px.
7. Text contrast at least 4.5:1 (large text 3:1).
8. A JS function stays under 40 lines; one job per function.
9. Zero console errors in the browser.
10. New library or framework = ask the user first.
11. Never change sections, files or text the edit plan does not list.
