# Architecture
## Layers
Pages (HTML, same header + footer) -> styles (CSS with the DESIGN.md tokens) -> script (JS handlers) -> localStorage
## Folders and files
- rupendra/rupendra.html  Rupendra - Instagram Creator & Brand Collaborations: #hero, #about, #stats, #content, #collaborations, #services, #testimonials, #contact
- rupendra/docs/MEMORY.md  existing file
- rupendra/docs/TASKS.md  existing file
- rupendra/icons/arrow-right.svg  existing file
- rupendra/icons/briefcase.svg  existing file
- rupendra/icons/camera.svg  existing file
- rupendra/icons/chart-line.svg  existing file
- rupendra/icons/close.svg  existing file
- rupendra/icons/favicon.svg  existing file
- rupendra/icons/grid-gallery.svg  existing file
- rupendra/icons/handshake.svg  existing file
- rupendra/icons/icons.svg  existing file
- rupendra/icons/instagram.svg  existing file
- rupendra/icons/logo-mark.svg  existing file
- rupendra/icons/logo.svg  existing file
- rupendra/icons/mail.svg  existing file
- rupendra/icons/megaphone.svg  existing file
- rupendra/icons/menu.svg  existing file
- rupendra/icons/play-circle.svg  existing file
- rupendra/icons/quote.svg  existing file
- rupendra/icons/sparkle.svg  existing file
- rupendra/icons/star.svg  existing file
- rupendra/icons/tiktok.svg  existing file
- rupendra/icons/user-circle.svg  existing file
- rupendra/icons/users-group.svg  existing file
- rupendra/icons/video.svg  existing file
- rupendra/icons/youtube.svg  existing file
- rupendra/images/about.jpg  existing file
- rupendra/images/collaborations.webp  existing file
- rupendra/images/contact.png  existing file
- rupendra/images/content.webp  existing file
- rupendra/icons/icons.svg  logo mark + icon sprite
- rupendra/images/  photos (only when planned)
- rupendra/docs/  these 6 docs
## Rules of flow
- Every page links the same stylesheet and script; no inline <style> or onclick.
- Header and footer are identical on every page; nav links point to real pages or section ids.
- Forms validate in JS; without a backend the data goes to localStorage with a visible confirmation.
- Edit: change only what the edit plan lists; keep every other file, id and class.
