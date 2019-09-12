# The stacking context

A stacking context is an element that contains a set of layers. This can be a root stacking context, as created by the html element. Or it can be a local stacking context, as created by specific properties and values.

The stacking context is a three-dimensional conceptualization of HTML elements along imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage. HTML elements occupy this space in priority order based on element attributes.

Stacking contexts — whether local or root — follow a set of rules that determine the stacking and painting order of elements. Children of a stacking context are painted from bottom to top in the following order.

1. Elements with a negative stack level, typically elements with `z-index: -1`
2. Elements with a `position` value of static.
3. Elements with a stack level of 0, typically positioned elements with a `z-index` value of `auto`.
4. Elements with positive stack levels, e.g. a positioned element with a `z-index` value of `1` or higher.

Two elements with the same stack level are layered based on their source order. Successive elements stack on top of their predecessors.

<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context>

<https://tiffanybbrown.com/2015/09/css-stacking-contexts-wtf/index.html>

<https://drafts.csswg.org/css2/zindex.html>

<https://philipwalton.com/articles/what-no-one-told-you-about-z-index/>

For CSS, setting `isolation` to `isolate` will turn the element into a stacking context.

The `isolation` CSS property determines whether an element must create a new stacking context.

<https://developer.mozilla.org/en-US/docs/Web/CSS/isolation>
