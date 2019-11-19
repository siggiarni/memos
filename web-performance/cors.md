# CORS


* <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes>


> ## Why did crossorigin break things?
>
> What's going on? I incorrectly assumed crossorigin simply meant "the target is on another domain." But the browser could infer that by comparing the `<link>` element's href attribute to the current page's origin. So what is the `crossorigin` attribute for?
>
> crossorigin actually tells the browser that __"resources on this connection are downloaded using CORS."__
>
> By default, it specifically means __"CORS without credentials."__
>
> CORS improves web security. That's all I'll say about it here, because smarter people have explained it elsewhere much better than I could.
>
> To speed up this web page, all we need to know is that **resources downloaded without CORS are downloaded on a separate connection from those that use CORS**.
>
> The `crossoriginattribute`, when used with `rel="preconnect"`, doesn't describe where the target origin is but rather what kind of assets will be downloaded from that origin. If the assets use CORS, crossoriginis needed. If CORS won't be used, crossoriginshould be omitted. If both types of assets will be present, two resource hints are necessary.

<https://crenshaw.dev/preconnect-resource-hint-crossorigin-attribute/>
