# Section element

`<section>` can be used with `aria-label` to signal to a screen reader user where a particular sub-part of an article begins and ends. Otherwise, forget about it, or use another element, such as `<aside aria-label=”quick summary”>` or `<div role=”region” aria-label=”quick summary”>`.

Don’t bother with `<section>` or worry about how it differs from `<article>`. It was invented as a generic wrapper for headings so that the browser could determine the HTML5 document outline.

The document outline algorithm is a way to use only one heading tag — `<h1>` — and have it magically “become” the correct level of heading (e.g. turn into an `<h2>`, `<h3>`, etc.), depending on how deeply it’s nested in HTML5 sectioning elements:`<article>`, `<section>`, and so on.

In most screen readers, a `<section>` element isn’t announced unless it has an accessible name. In this case, the text of the aria label. Now, her screen reader announced “Quick summary region”, and after the summary “Quick summary region end”. This simple markup also makes it possible for a screen reader user to jump over the summary if they want to.

<https://www.smashingmagazine.com/2020/01/html5-article-section/>
