# Jonkler

A tiny, self-contained comedy website. Jonkler asks you one simple question — **"What do you want to hear today?"** — and delivers a random joke, pickup line, or short poem, complete with a sitcom-style laugh track.

## Features

- **Three categories to pick from:**
  - 😂 Jokes
  - 😉 Pickup lines
  - 📜 Poetry (short, silly, multi-line poems)
- **Random selection** from a 20-item list per category, with no repeats-avoidance logic — just pure chance.
- **"Give me another"** button to re-roll within the currently selected category.
- **Laugh track** — a 90s-sitcom-style audio clip plays every time a new joke/line/poem is revealed.
- No build step, no dependencies — just static HTML/CSS/JS.

## Project structure

```
index.html   Markup for the page
styles.css   All styling (dark theme, gradient accents, card reveal animation)
script.js    Content arrays (jokes, pickup lines, poems) + selection/playback logic
*.mp3        Laugh track audio played after each reveal
```

## Running it

No server or build tools required — just open [index.html](index.html) directly in a browser.

## How it works

1. Click a category button (Joke, Pickup Line, or Poetry).
2. A random entry from that category's array is revealed in the card, along with the laugh track.
3. Click **Give me another** to get a new random entry from the same category, or switch categories at any time.

## Adding content

Each category is a plain JavaScript array of strings in [script.js](script.js) (`jokes`, `pickupLines`, `poems`). Add or edit entries directly in the array — poems support multi-line text using `\n`.
