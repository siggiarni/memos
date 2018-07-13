# CSS Grids

## Explicit and Implicit Grid

When we use `grid-template-columns` and `grid-template-rows` we create an Explicit Grid. However if we try and place an item outside of that grid the browser will create an Implicit Grid line or lines in order to hold that item.

* https://gridbyexample.com/examples/example10/

## Grid auto flow

The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

* https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow

## Auto-fill vs. Auto-fit

*auto-fill* FILLS the row with as many columns as it can fit.

auto-fill behavior: _Fill that row up! Add as many columns as you can. I don't care if they're empty -- they should all still show up. If you have enough space to add a column, add it._

*auto-fit* FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space.

auto-fit behavior: _Make whatever columns you have fit into the available space. Expand them as much as you need to fit the row size. Empty columns must not occupy any space._

If you're using auto-fit, the content will stretch to fill the entire row width. Whereas with auto-fill, the browser will allow empty columns to occupy space in the row like their non-empty neighbors.

*https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/
