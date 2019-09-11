# SVG filters

SVG filter functions — known as primitives.

A <filter> element is never rendered directly; its only usage is as something that can be referenced using the filter attribute in SVG, or the url() function in CSS. 

a filter requires a source image to work on, and unless you explicitly define that source image by calling the filter on that source image, it won’t have anything to render, and so it doesn’t.

the filter element is a container to a series of filter operations that, combined, create a filter effect. These filter operations are called “Filter Primitives” in SVG.

Each filter primitive performs a single fundamental graphical operation on one or more inputs, producing a graphical result.

All primitives share the same prefix: fe, which is short for “filter effect”.

A filter primitive works by taking a source graphic as input and outputting another one.
And the output of one filter effect can be used as input to another.

Each filter primitive can take one or two inputs and output only one result. 

The input of a filter primitive is defined in an attribute called `in`.

The result of an operation is defined in the `result` attribute.

If the filter effect takes a second input, the second input is set in the `in2` attribute.

if the input of an operation is not specified in the in attribute, the result of the previous operation is automatically used as input.

If you don’t specify the result of a primitive, its result will automatically be used as input to the primitive that follows.

In addition to using the result(s) of other primitives as input, a filter primitive also accepts other types of inputs, the most important of which are:

- SourceGraphic: the element to which the entire filter is applied; for example, an image or a piece of text.
- SourceAlpha: this is the same as the `SourceGraphic`, except that this graphic contains only the alpha channel of the element. 

## Filter

The default filter region of an element is the element’s bounding box.

We can extend the region the filter is applied to by modifying the `x`, `y`, `width` and `height` attributes on the `<filter>` element.

By default, filters have regions extending 10% the width and height of the bounding box in all four directions.

the units used in the `x`, `y`, `width` and `height` attributes are dependent on which `filterUnits` value is in use.

The `filterUnits` attribute defines the coordinate system for the `x`, `y`, `width` and `height` attributes. It takes one of two values:

- `objectBoundingBox` this is the default value.  the values are percentages or fractions of the size of the element’s bounding box. 
- `userSpaceOnUse` attributes are set relative to the current user coordinate system in use which uses pixels as a unit.

The `<feMerge>` filter primitive is used to merge together layers of elements or effects.

The `<feMerge>` primitive does not have an in attribute. To merge layers, two or more `<feMergeNode>`s are used inside feMerge, each of which has its own in attribute that represents a layer that we want to add.

the first `<feMergeNode>` will be rendered “behind” or “below” the second. 

## feComposite

Compositing is the combining of a graphic element with its backdrop.

A backdrop is the content behind the element and is what the element is composited with.

The feComposite primitive requires two inputs to operate on, specified in the in and in2 attributes.


## feOffset

To offset a layer in SVG, we use the `feOffset` primitive.

this primitive takes two main attributes: `dx` and `dy`, which determine the distance by which you want to offset the layer along the x and y axes, respectively.



[https://tympanus.net/codrops/2019/01/15/svg-filters-101/](https://tympanus.net/codrops/2019/01/15/svg-filters-101/)

[https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/)