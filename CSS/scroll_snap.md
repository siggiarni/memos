
H1.CSS Scroll snap

* https://www.w3.org/TR/css-scroll-snap-1/

H2.scroll-snap-type

* https://www.w3.org/TR/css-scroll-snap-1/#scroll-snap-type
* https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type

The scroll-snap-type property specifies whether a scroll container is a scroll snap container, how strictly it snaps, and which axes are considered. If no strictness value is specified, proximity is assumed.

H3.Example

Requires that the scroll position always be at a snap position when the scrolling operation completes.

`scroll-snap-type: x mandatory;`

H2.Scroll-padding

* https://www.w3.org/TR/css-scroll-snap-1/#scroll-padding

Values must be non-negative and represent inward offsets from the corresponding edge of the scrollport.

These offsets *define the optimal viewing region* of the scrollport: the region used as the target region for placing things in view of the user.

This allows the author to exclude regions of the scrollport that are obscured by other content _(such as fixed-positioned toolbars or sidebars)_ or simply to put more breathing room between a targetted element and the edges of the scrollport.

H3.Example

Specifies that each element’s snap area should align with a 100px offset from the top edge.

`scroll-padding: 100px 0 0;`

H2.scroll-snap-align

* https://www.w3.org/TR/css-scroll-snap-1/#scroll-snap-align

The scroll-snap-align property specifies the box’s snap position as an alignment of its snap area within its snap container’s snapport.

H3.Example

Specifies that the center of each photo should align with the center of the scroll container in the X axis when snapping.

`scroll-snap-align: center none;`
