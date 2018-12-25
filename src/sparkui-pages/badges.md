---
path: "/docs/badges"
date: "2017-11-07"
title: "Badges"
---
# Badges

## Usage
* `c-badge` is the main component class, it has 4 variations `c-badge--dark`, `c-badge--outline-dark`
, `c-badge--light` and `c-badge--outline--light`, you can use any color using color background utilities
classes `u-bg-****`

```html
  <span class="c-badge c-badge--dark">Dark Badge</span>
  <span class="c-badge c-badge--light">light Badge</span>
  <span class="c-badge c-badge--outline-light">light Badge</span>
  <span class="c-badge c-badge--dark u-bg-red">Dark Badge (Red BG)</span>
```
## Demo

<span class="c-badge c-badge--dark">Dark Badge</span>
<span class="c-badge c-badge--light">light Badge</span>
<span class="c-badge c-badge--outline-light">light Badge</span>
<span class="c-badge c-badge--dark u-bg-red">Dark Badge (Red BG)</span>

<span class="c-badge c-badge--dark">Dark Badge</span>

<span class="c-badge c-badge--dark u-font--semibold">Dark Badge (Semibold)</span>

<span class="c-badge c-badge--dark u-bg-red">Dark Badge (Red BG)</span>

<span class="c-badge c-badge--outline-light">Outline Light Badge</span>


##### Using dark background to illustrate the light colors
<div class="u-window-padding--2x u-bg-blue-dense-2 u-color-ink-opacity-4">
  <span class="c-badge c-badge--light">Light Badge</span>
  <span class="c-badge c-badge--light u-font--semibold">Light Badge (Semibold)</span>
  <span class="c-badge c-badge--outline-dark">Outline Dark Badge</span>
  <span class="c-badge c-badge--outline-dark u-bg-red">Outline Dark Badge (Red BG)</span>
</div>
