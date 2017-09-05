# SVG memo

## Shared with CSS

font, font-family, font-size, font-size-adjust, font-stretch, font-style, font-variant, font-weight, direction, letter-spacing, text-decoration, unincode-bidi, word-spacing, visibility, text-rendering, writing-mode, clip-path, mask-opacity, filter, pointer-events, image-rendering, clip, color, cursor, display, overflow

https://www.w3.org/TR/SVG2/styling.html#SVGStylingProperties

## SVG-Only

clip-rule, flood-color, flood-opacity, stop-opacity, kerning, tech-anchor, color-profile, color-rendering, fill, fill-opacity, fill-rule, marker, marker-end, marker-mid, marker-start, stroke, stroke-width, stop-color, lighting-color, enable-background, dominant-baseline, color-interpolation-filters, color-interpolation, glyph-orientation-horizontal, glyph-orientation-vertical, shape-rendering, baseline-shift, alignment-baseline, stroke-miterlimit, stroke-linejoin, stroke-linecap, stroke-dashoffset, stroke-dasharray, stroke-opacity

## Style hierarchy

User agent styles  
presentation attributes  
External styles  
Document styles  
Inline styles  
Animation  
Override styles  
Computed styles

Styles lower in the diagram override those above them

## transform-origin: SVG vs HTML

### HTML Elements (div, ::before, etc.)

transform-origin (default value)

**50% 50%** _(the center of the element itself, calculated relative to its box model)_

### SVG Elements (circle, rect, etc.)

transform-origin (default value)

**0 0** _(top left corner of the SVG canvas, not of the element itself)_

## Setting transform-origin in SVG using CSS

* **Using percentage values** The value is set relative to the element's bounding box, which includes the stroke used to draw its border.
* **Using absolute values** The origin is set relative to the SVG canvas.

The sizes specified in the media queries refer to the size of the SVG viewport, not to the size of the page viewport.
