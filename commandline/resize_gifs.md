# Resize GIF's

## Scaling of an image - 50%

	gifsicle --scale 0.5 -i animation.gif > animation-smaller.gif

## Scale to a given width with unspecified height

	gifsicle --resize-fit-width 300 -i animation.gif > animation-300px.gif

## Scale to a given height with unspecified width

	gifsicle --resize-fit-height 100 -i animation.gif > animation-100px.gif

## Clip to size

	gifsicle --resize 300x200  -i animation.gif > animation-clipped.gif

---

[https://davidwalsh.name/resize-animated-gif](https://davidwalsh.name/resize-animated-gif)