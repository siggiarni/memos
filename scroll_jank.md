# Scroll jank

* https://calendar.perfplanet.com/2013/the-runtime-performance-checklist/
* https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
* https://www.html5rocks.com/en/tutorials/speed/layers/
* https://www.html5rocks.com/en/tutorials/speed/scrolling/
* https://developers.google.com/web/fundamentals/performance/rendering/

when elements repaint, the dirty rectangle calculation is done per layer. So if an element is on its own layer then it won’t affect anything else. If you promote a fixed header – say – then when content appears at the bottom of the page there is only the new content that needs to be painted. Without the promotion the header needs to be repainted at the top of the page. You might wonder why we don’t automatically promote fixed position elements. The answer is: we do for high DPI screens, but we don’t for low DPI because we lose sub-pixel antialiasing on text, and that’s not something we want to by default. On high DPI screens you can’t tell, so it’s safe there.


backface-visibility
only hidden value will promote to a layer not visible.

There are few other CSS properties that do the same thing like translateZ(0) or translate3d(0,0,0). These are all hacks, and will be repalaced with new CSS property will-change.

——

As Paul explains in his short video, using background-attachment: fixed causes a paint operation every time the user scrolls. Why? Well, the page has to reposition the content, and then, since its background image is supposed to appear as if it’s holding still, the browser has to repaint that image in a new location relative to its actual DOM elements. The performance for this feature is so bad that iOS simply ignores this property.
