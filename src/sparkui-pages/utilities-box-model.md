---
path: "/docs/utilities-box-model"
date: "2017-11-07"
title: "Utilities - Box model"
---
# Spacing Utilities Classes

## Padding and Margin

Spacing in SparkUI is use the 8-point grid concept, we start from the space of 8px, we increase by
8 if we need bigger spacing

* `SPACING_TYPE`: for the box model are `padding`, `margin` and `border`

* `DIRECTION`: we have the default 4 directions `top`, `bottom`, `left`and `right`, we also
have combination of `top and bottom` and we called them `letter`, and `left and right` and we called them
`pillar`, and if you need to apply a padding or margin for the 4 directions we called this case `window`

* `SIZE`: in sparkUI you the typical following numbers `2, 4, 8, 16, 24, 32, 40, 48, 56, 64 and 72`
`8px` is the base multiplier, we refer to it by `--1x` if you to need step, increase this multiplier,
for example if you need a padding of margin of `40px` divide 40 by 8 and your modifier class should
end by `--5x`, here we have two special cases which are `2px` and `4px` refere to them by `--quarter-x` and `--half-x`

The formula we use to construct our utility class for a box model is `u-[DIRECTION]-[SPACING_TYPE]--[SIZE]`

So for example if you need to apply *padding* of *16px* for a container in *top and bottom*,
* spacing type is *padding*
* direction of *top and bottom* is `letter`
* spacing size is 16px if we divide it by 8 the multiplier will be `--2x`

So the utility class should be `u-letter-padding--2x`

Another example if we need to set a margin of 24px for the container in left and right directions,
and a padding of 8px in all directions the html should looks like
```html
<div class="u-pillar-margin--3x u-window-padding--1x">
  ...
</div>
```

## Borders
Borders in sparkUI have the same color, width and type, all supported utilities used to select the
border direction, if it top, right, bottom or left, for the direction combination we have the same rule
we used in padding and margin utilities

So if you need to add a border to container in left and right directions the utility class should
be `u-pillar-border`

You can also remove a border from a container that already have a border in its base class, all you need
to do is to suffix the class with `--0`, so for the previous example the class sholud look
`u-pillar-border--0`

### Border Radius
In sparkUI we have 3 variation

Variation | Size  | utility class suffix
----------|-------|---------------
small     |  2px  | `--small`
default   |  4px  | default
rounded   |  50%  | -

for the border radius directions - top or bottom
you can use the `ceil` for the top left and right, and `floor` for the bottom top and right

so for example if you need to set a border to a container in all direction, and set a border radius of
4px for the top side, the utilities classes should be `u-window-border u-ceil-border-radius`

### List of all Border utilities Classes
Class           | Usage
----------------|-------------
`.u-top-border` | set a border for the top side
`.u-bottom-border` |set a border for the bottom side
`.u-left-border` |set a border for the left side
`.u-right-border` |set a border for the right side
`.u-letter-border` |set a border for the top and bottom sides
`.u-pillar-border` |set a border for the left and right sides
`.u-window-border` |set a border for the all sides
`.u-top-border--0` | remove top border
`.u-bottom-border--0` | remove bottom border
`.u-left-border--0` | remove left border
`.u-right-border--0` | remove right border
`.u-letter-border--0` | remove top and bottom borders
`.u-pillar-border--0` | remove left and right borders
`.u-window-border--0` | remove all borders
`.u-window-border-radius` | set a border radius in all directions of 4px
`.u-window-border-radius--small` | set a border radius in all directions of 2px
`.u-window-border-radius--0` | remove border radius in all directions
`.u-ceil-border-radius` | set a border radius in top left and right directions of 4px
`.u-ceil-border-radius--small` | set a border radius in top left and right directions of 2px
`.u-floor-border-radius` | set a border radius in bottom left and right directions of 4px
`.u-floor-border-radius--small` | set a border radius in bottom left and right directions of 2px
`.u-ceil-border-radius--0` | remove border radius of top left and right
`.u-floor-border-radius--0` | remove border radius of bottom left and right
