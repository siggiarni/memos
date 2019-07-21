# SVG memo

## Shared with CSS

`font, font-family, font-size, font-size-adjust, font-stretch, font-style, font-variant, font-weight, direction, letter-spacing, text-decoration, unincode-bidi, word-spacing, visibility, text-rendering, writing-mode, clip-path, mask-opacity, filter, pointer-events, image-rendering, clip, color, cursor, display, overflow`

<https://www.w3.org/TR/SVG2/styling.html#SVGStylingProperties>

## SVG-Only

`clip-rule, flood-color, flood-opacity, stop-opacity, kerning, tech-anchor, color-profile, color-rendering, fill, fill-opacity, fill-rule, marker, marker-end, marker-mid, marker-start, stroke, stroke-width, stop-color, lighting-color, enable-background, dominant-baseline, color-interpolation-filters, color-interpolation, glyph-orientation-horizontal, glyph-orientation-vertical, shape-rendering, baseline-shift, alignment-baseline, stroke-miterlimit, stroke-linejoin, stroke-linecap, stroke-dashoffset, stroke-dasharray, stroke-opacity`

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

## viewBox

The viewBox attribute takes four parameters as a value: <min-x>, <min-y>, width and height.

`viewBox = <min-x> <min-y> <width> <height>`

The `<min-x>` and `<min-y>` values determine the upper left corner of the viewbox, and the width and height determine the width and height of that viewBox.

Note here that the width and height of the viewBox need *not* be the same as the width and height set on the parent <svg> element. A negative value for <width> or <height> is invalid. A value of zero disables rendering of the element.

<https://www.sarasoueidan.com/blog/svg-coordinate-systems/>

## preserveAspectRatio

### xMinYMid

* Force uniform scaling.
* Align the <min-x> of the element's viewBox with the smallest X value of the viewport.
* Align the midpoint Y value of the element's viewBox with the midpoint Y value of the viewport.

**Think of this as being similar to background-position: 0% 50%;**

### The meet Attribute

meet (the default) - Scale the graphic such that:

* Aspect ratio is preserved.
* The entire viewBox is visible within the viewport.
* The viewBox is scaled up as much as possible, while still meeting the other criteria.

<https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio>
