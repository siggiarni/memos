# CSS Performance

<https://csswizardry.com/2018/11/css-and-network-performance/>


1. A browser can’t render a page until it has built the Render Tree.
2. The Render Tree is the combined result of the DOM and the CSSOM.
3. The DOM is HTML plus any blocking JavaScript that needs to act upon it.
4. The CSSOM is all CSS rules applied against the DOM.
5. It’s easy to make JavaScript non-blocking with async and defer attributes.
6. Making CSS asynchronous is much more difficult.
7. A good rule of thumb to remember is that **your page will only render as quickly as your slowest stylesheet**.

If you are able, one of the most effective ways to cut down the time to Start Render is to make use of the Critical CSS pattern: identify all of the styles needed for Start Render (commonly the styles needed for everything above the fold), inline them in `<style>` tags in the `<head>` of your document, and asynchronously load the remaining stylesheet off of the Critical Path.

A browser will not execute a `<script>` if there is any currently-in flight CSS.

1. Split a single blocking CSS file into respective media query files. 
2. Don't place `<link rel="stylesheet" />` before async snippets. 
3. Place `<link rel="stylesheet" />` in <body>.
