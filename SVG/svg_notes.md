# SVG Notes

    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid meet"

The globally valid rule for SVG files is, that later elements are rendered atop previous elements. The further down an element is the more it will be visible.

In SVG, elements have _“regions”_ whose boundaries are defined by the borders of the element’s Bounding Box. The Bounding Box _(also abbreviated “bbox“)_ is the smallest fitting rectangle around an element.

## viewBox

The `viewBox` is an attribute of the `<svg>` element.

Its **value** is a list of four numbers, separated by whitespace or commas: `min-x`, `min-y`, `width` and `height`.

The **width** is the width in user coordinates/px units, within the SVG code, that should be scaled to fill the width of the area into which you're drawing your SVG _(the viewport in SVG lingo)_.

The **height** is the number of px/coordinates that should be scaled to fill the available height.

The `x` and `y` numbers specify the coordinate, in the scaled viewBox coordinate system, to use for the **top** **left** corner of the SVG viewport.

The viewBox does many things:

-   It defines the aspect ratio of the image.
-   It defines how all the lengths and coordinates used inside the SVG should be scaled to fit the total space available.
-   It defines the origin of the SVG coordinate system, the point where x=0 and y=0.

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox

## preserveAspectRatio

-   https://css-tricks.com/scale-svg/
-   https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
-   http://www.codeblocq.com/2016/05/Understand-the-SVG-viewBox/

    preserveAspectRatio="xMinYMid meet"

The meet property is another possible value for preserveAspectRatio. It indicates that the aspect ration should be preserved and that all edges should remain contained within the viewBox.

```
Property	Place
xMinYMin	Top Left
xMidYMin	Center Left
xMaxYMin	Bottom Left
xMinYMid	Top Center
xMidYMid	Middle
xMaxYMid	Bottom Center
xMinYMax	Top Right
xMidYMax	Center Right
xMaxYMax	Bottom Right
```

## Links

https://stackoverflow.com/questions/18467982/are-svg-parameters-such-as-xmlns-and-version-needed
