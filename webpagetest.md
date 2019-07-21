# WebPageTest memo

## Summary page

* Load time is the most important metric; it should be 3 seconds or less.
* Look at the metrics relative to each other. Divide Time to First Byte by the Load Time to find out the percentage of time that the browser is just waiting for data.
* If you have the repeat view shown (which is the default setting on WPT), compare the times here. If the Load Time is nearly the same, it could mean you’re not taking advantage of browser caching.
* For optimal performance, the fewer requests the better. Look at the number of requests.
* Look towards the bottom for the content breakdown to see which types of elements are most resource intensive, either by size or request.

## Waterfall view

* Too many requests, which means too many round trips.
* Yellow highlights are 3xx responses, which could be undesired redirects. Check for response codes 301 and 302.
* Red highlights means the request most likely returned an error. Most of the time these should be eliminated.
* Blue lines show the payload size. One long blue line by itself can be a sign of one request blocking others.
* Multiple orange bars show differing connections, which can be wasteful. This can be improved by enabling connection keep-alive.

<http://loadstorm.com/2014/02/performance-analysis-tips-using-webpagetest/>


<https://frontendnews.io/editions/2018-08-22-a-brief-guide-to-webpagetest/>
