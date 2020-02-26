# CORS

> What's going on? I incorrectly assumed crossorigin simply meant "the target is on another domain." But the browser could infer that by comparing the `<link>` element's href attribute to the current page's origin. So what is the `crossorigin` attribute for?

- Crossorigin actually tells the browser that **resources on this connection are downloaded using CORS.**

- By default, it specifically means **CORS without credentials.**

- CORS improves web security.

- Resources downloaded without CORS are downloaded on a **separate connection** from those that use CORS.

- The `crossorigin` attribute, when used with `rel="preconnect"`, doesn't describe where the target origin is but rather what kind of assets will be downloaded from that origin.

- If the assets use CORS, crossoriginis needed. If CORS won't be used, crossoriginshould be omitted. If both types of assets will be present, two resource hints are necessary.

---

- Most _traditional_ resources fetched on the web (images, stylesheets, and scripts) are fetched **without** opting in to Cross-Origin Resource Sharing.

- That means that if those resources are fetched from a cross-origin server, by default their contents **cannot** be read back by the page, due to the same-origin policy.

- In some cases, the page can opt-in to fetch the resource using CORS if it needs to read its content.

- CORS enables the browser to _ask permission_ and get access to those cross-origin resources.

- For newer resource types (e.g. fonts, fetch() requests, ES modules), the browser defaults to requesting those resources using CORS, failing the requests entirely if the server does not grant it permission to access them.

- In the context of resource hints, usage of the crossorigin attribute enables them to match the CORS mode of the resources they are supposed to match and indicates the credentials to include in the request.

- For example: `<link rel="prefetch" href="https://other-server.com/shopping-cart.css" crossorigin="anonymous">` enables CORS and indicates that no credentials should be included for those cross-origin requests.

---

- <https://almanac.httparchive.org/en/2019/resource-hints>
- <https://crenshaw.dev/preconnect-resource-hint-crossorigin-attribute/>
- <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes>