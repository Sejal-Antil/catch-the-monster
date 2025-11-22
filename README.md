# catch-the-monster

# Catch the Monster!

A tiny browser game used for a DevOps assignment to demonstrate branching, merge conflicts, and GitHub Actions.

## How to run locally
1. Clone repo:
   `git clone https://github.com/<your-username>/catch-the-monster.git`
2. Open `index.html` in your browser.

## Branching model
- `main` — production
- `feature` — integration
- `speed/*` — feature branches

## Intentional conflict
Two feature branches modified `script.js` to change the `speed` variable. Merging both into `feature` created a conflict, which was resolved manually.

