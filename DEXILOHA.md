# Rupendra: project context (Dexiloha)

Dexiloha loads this file automatically for every task in this folder. Every agent reads the docs below first.

@docs/PRD.md
@docs/ARCHITECTURE.md
@docs/RULES.md
@docs/DESIGN.md
@docs/TASKS.md
@docs/MEMORY.md

## Session start
Read all 6 docs. Take the next open task from MEMORY.md / TASKS.md and do only that task.

## Session end
Update MEMORY.md (progress, done, next) and tick the finished task in TASKS.md.

## Order of authority
The user's latest words > PRD.md > RULES.md > DESIGN.md > ARCHITECTURE.md.
