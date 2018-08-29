# VMIN VMAX

vmin works the minimum viewport size. it takes the one that is smaller

* on a tall viewport, portrait mobile, it would take the width value.
* on a wide viewport, laptop, it would take the height value.

## vmin: equal to the smaller of vh or vw

A value of 10vmin would be equal to 10vh if the viewport was shorter than it is wide, and 10vw if the viewport is taller than it is wide.

## vmax: equal to the larger of vh or vw

A value of 10vmax would be equal to 10vh if the viewport was **taller** than it is wide, and 10vw if it is **shorter** than it is wide.

| Unit | Description |
| --- | --- |
| `vw` | viewport width |
| `vh` | viewport height |
| `vmin` | viewport height or width, whichever is smaller |
| `vmax` | viewport height or width, whichever is larger |
