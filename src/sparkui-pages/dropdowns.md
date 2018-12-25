---
path: "/docs/dropdowns"
date: "2017-11-07"
title: "Dropdowns"
---
# Dropdowns Demo

## Usage
```html
<div class="c-dropdown u-bottom-margin--1x">
  <div class="c-dropdown-toggle c-dropdown-toggle--large">
    large height dropdown
  </div>
  <div class="c-dropdown-pane">
    <ul class="c-dropdownlist">
      <li class="c-dropdownlist__item"><a href="#"><span>item 1</span></a></li>
      <li class="c-dropdownlist__item"><a href="#"><span>item 2</span></a></li>
      <li class="c-dropdownlist__item"><a href="#"><span>item 3</span></a></li>
      <li class="c-dropdownlist__item"><a href="#"><span>item 4</span></a></li>
    </ul>
  </div>
</div>
```

## Sizes
We have 3 sizes `c-dropdown-toggle--large`, `c-dropdown-toggle--medium` and `c-dropdown-toggle--small`

<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large">
      large height dropdown
    </div>
    <div class="c-dropdown-pane">
      <ul class="c-dropdownlist">
        <li class="c-dropdownlist__item"><a href="#"><span>item 1</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 2</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 3</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>


  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--medium" disabled>
      medium height dropdown
    </div>
    <div class="c-dropdown-pane">
      <ul>
        <li><a href="#"><span>item 1</span></a></li>
        <li><a href="#"><span>item 2</span></a></li>
        <li><a href="#"><span>item 3</span></a></li>
        <li><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--small">
      small height dropdown
    </div>
    <div class="c-dropdown-pane">
      <ul>
        <li><a href="#"><span>item 1</span></a></li>
        <li><a href="#"><span>item 2</span></a></li>
        <li><a href="#"><span>item 3</span></a></li>
        <li><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="c-dropdown u-bottom-margin--1x">
  <div class="c-dropdown-toggle c-dropdown-toggle--large">
    large height dropdown
  </div>
  ...
</div>
```

## Ghost

<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large c-dropdown-toggle--ghost">
      large height dropdown
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--medium c-dropdown-toggle--ghost">
      medium height dropdown
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--small c-dropdown-toggle--ghost">
      small height dropdown
    </div>
  </div>
</div>

```html
<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large c-dropdown-toggle--ghost">
      large height dropdown
    </div>
  </div>
  ...
</div>
```

### Ghost Disabled

<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large c-dropdown-toggle--ghost" disabled>
      large height dropdown
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--medium c-dropdown-toggle--ghost" disabled>
      medium height dropdown
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--small c-dropdown-toggle--ghost" disabled>
      small height dropdown
    </div>
  </div>
</div>

```html
<div class="c-dropdown u-bottom-margin--1x">
  <div class="c-dropdown-toggle c-dropdown-toggle--small c-dropdown-toggle--ghost" disabled>
    small height dropdown
  </div>
  ...
</div>
```

## Open State

<div class="u-display-flex u-justify-content--around">
  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--large">
      large height dropdown
    </div>
    <div class="c-dropdown-pane is-open">
      <ul class="c-dropdownlist">
        <li class="c-dropdownlist__item"><a href="#"><span>item 1</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 2</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 3</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--medium" disabled>
      medium height dropdown
    </div>
    <div class="c-dropdown-pane is-open">
      <ul class="c-dropdownlist">
        <li class="c-dropdownlist__item"><a href="#"><span>item 1</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 2</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 3</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>

  <div class="c-dropdown u-bottom-margin--1x">
    <div class="c-dropdown-toggle c-dropdown-toggle--small">
      small height dropdown
    </div>
    <div class="c-dropdown-pane is-open">
      <ul class="c-dropdownlist">
        <li class="c-dropdownlist__item"><a href="#"><span>item 1</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 2</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 3</span></a></li>
        <li class="c-dropdownlist__item"><a href="#"><span>item 4</span></a></li>
      </ul>
    </div>
  </div>
</div>
