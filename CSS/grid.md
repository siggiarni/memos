# CSS Grids

## Explicit and Implicit Grid

When we use `grid-template-columns` and `grid-template-rows` we create an Explicit Grid. However if we try and place an item outside of that grid the browser will create an Implicit Grid line or lines in order to hold that item.

> The three properties grid-template-rows, grid-template-columns, and grid-template-areas together define the explicit grid. 


The implicit grid, on the other hand, is essentially defined as "everything else" -

> When grid items are positioned outside of [the explicit grid], the grid container generates implicit grid tracks by adding implicit grid lines to the grid. These lines together with the explicit grid form the implicit grid. 

While the `grid-template-` properties are used to define both the *position and size* of grid cells, the `grid-auto-` properties are used only to define the *size* of grid cells.

The `grid-template-` properties are used to create an explicit grid, whereas th `grid-auto-` properties are used to size an implicit grid (which is automatically created).

* <https://bitsofco.de/understanding-the-difference-between-grid-template-and-grid-auto/>
* <https://gridbyexample.com/examples/example10/>
* <https://www.youtube.com/watch?v=FEnRpy9Xfes&t=12m14s>
* <https://www.youtube.com/watch?v=tFKrK4eAiUQ&t=22s>
* <https://www.w3.org/TR/css-grid-1/#explicit-grids>

## Grid auto flow

The `grid-auto-flow` CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

* https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow

## Auto-fill vs. Auto-fit

**auto-fill** FILLS the row with as many columns as it can fit.

> auto-fill behavior: _Fill that row up! Add as many columns as you can. I don't care if they're empty -- they should all still show up. If you have enough space to add a column, add it._

**auto-fit** FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space.

> auto-fit behavior: _Make whatever columns you have fit into the available space. Expand them as much as you need to fit the row size. Empty columns must not occupy any space._

If you're using auto-fit, the content will stretch to fill the entire row width. Whereas with auto-fill, the browser will allow empty columns to occupy space in the row like their non-empty neighbors.

* <https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/>
* <https://www.youtube.com/watch?v=2zxWEeBkjk0>


## Misc notes

width block vs width track

* shop talk show 262 18:50
* minmax 28:16
* autofill 36:14

<http://shoptalkshow.com/episodes/262-css-grid-rachel-andrew-jen-simmons/>
