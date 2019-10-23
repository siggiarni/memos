# Resource Hints

- <https://w3c.github.io/resource-hints/>
- <https://www.w3.org/TR/resource-hints/#resource-hints>
- <https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf>
- <https://www.keycdn.com/blog/resource-hints>
- <https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/>

* **Preload** resources you have high-confidence will be used in the current page.
* **Prefetch** resources likely to be used for future navigations across multiple navigation boundaries.

---

## Preconnect

    <link rel="preconnect" href="//cdn.example.com" crossorigin>

Preconnect allows the browser to setup early connections before an HTTP request is actually sent to the server. This includes DNS lookups, TLS negotiations, TCP handshakes. This in turn eliminates roundtrip latency and saves time for users.

The preconnect link relation type is used to indicate an origin that will be used to fetch required resources. Initiating an early connection, which includes the DNS lookup, TCP handshake, and optional TLS negotiation, allows the user agent to mask the high latency costs of establishing a connection.

Each open socket incurs costs both on the client and server, and you want to avoid opening sockets that might go unused.

- <https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/>
- <https://caniuse.com/#search=preconnect>

## DNS prefetch

    <link rel="dns-prefetch" href="//cdn.domain.com">

The dns-prefetch link relation type is used to indicate an origin that will be used to fetch required resources, and that the user agent SHOULD resolve as early as possible.

DNS requests are very small in terms of bandwidth, but latency can be quite high, especially on mobile networks. By speculatively prefetching DNS results, latency can be reduced significantly at certain times, such as when the user clicks the link. In some cases, latency can be reduced by a second.

DNS prefetching allows the browser to perform DNS lookups on a page in the background while the user is browsing.

We suggest using this on things such as Google fonts, Google Analytics, and your CDN.

- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control>
- <https://caniuse.com/#search=dns-prefetch>

## Preload

    <link rel="preload" href="https://example.com/fonts/font.woff" as="font" crossorigin>

Preloaded fonts without crossorigin will double fetch!

Preload is a new web standard that offers more control on how particular resources are fetched for current navigation.
Preload is different from prefetch in that it focuses on fetching a resource for the current navigation.
Allows the browser to set resource priority therefore allowing web developers to optimize the delivery of certain resources.

- <https://www.w3.org/TR/preload/>
- <https://caniuse.com/#feat=link-rel-preload>

### AS attribute

When the resource is declared via the Link header field, the resource's as attribute is defined via the as link-extension target attribute.

- <https://www.w3.org/TR/preload/#as-attribute>

## Prefetch

    <link rel="prefetch" href="/uploads/images/pic.png">

Prefetch is a low priority resource hint that allows the browser to fetch resources in the background _(idle time)_ that might be needed later, and store them in the browser’s cache.

link prefetching allows the browser to fetch resources, store them in cache, assuming that the user will request them.

Once a page has finished loading it begins downloading additional resources and if a user then clicks on a prefetched link, it will load the content instantly.

There are three different types of prefetching: link, DNS, and prerendering.

- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ>
- <https://caniuse.com/#search=prefetch>

## Prerendering

<link rel="prerender" href="https://www.example.com">

prerendering actually renders the entire page in the background, all the assets of a document

The prerender hint can be used by the application to indicate the next likely HTML navigation target: the user agent will fetch and process the specified resource as an HTML response. To fetch other content-types with appropriate request headers, or if HTML preprocessing is not desired, the application can use the prefetch hint.
