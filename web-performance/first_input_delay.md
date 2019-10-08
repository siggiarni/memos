# First input delay

First Input Delay (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.

* In general, input delay (or input latency) happens because the browser's main thread is busy doing something else, so it can't (yet) respond to the user.
* One common reason this might happen is the browser is busy parsing and executing a large JavaScript file loaded by your app.
* While it's doing that, it can't run any event listeners because the JavaScript it's loading might tell it to do something else.

<https://developers.google.com/web/updates/2018/05/first-input-delay>