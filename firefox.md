## Profiles

Slóð á custom profile

"C:\Program Files (x86)\Mozilla Firefox 31\firefox.exe" -P "31"

## Config


### Manage Firefox Connections

`browser.aboutHomeSnippets.updateUrl` **`blank`**  
`browser.search.geoip.url` **`blank`**  
`extensions.getAddons.cache.enabled` **`false`**  
`network.http.pipelining` **`true`**  

[About pipelining](http://kb.mozillazine.org/Network.http.pipelining)  
[How to stop Firefox from making automatic connections](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections?redirectlocale=en-US&redirectslug=how-stop-firefox-automatically-making-connections)  

### Disable Telemetry Pings

`toolkit.telemetry.unified` **`false`**  
`toolkit.telemetry.enabled` **`false`**  
`toolkit.telemetry.archive.enabled` **`false`**  
`toolkit.telemetry.server` **`blank`**  

* `toolkit.telemetry.unified` controls unified behavior. If enabled, it will record basic data, and send additional pings.
* `toolkit.telemetry.enabled` controls if Telemetry is enabled in Firefox and whether extended data is sent to Mozilla.
* `toolkit.telemetry.archive.enabled` defines whether local archiving of telemetry pings is enabled or not.
* `toolkit.telemetry.server` defines the server the Telemetry ping is sent to.

[Telemetry docs](http://gecko.readthedocs.io/en/latest/toolkit/components/telemetry/telemetry/preferences.html)

### Disable health reports

`datareporting.healthreport.service.enabled` **`false`**  
`datareporting.healthreport.uploadEnabled` **`false`**  
`datareporting.policy.dataSubmissionEnabled` **`false`**  
`datareporting.policy.dataSubmissionEnabled.v2` **`false`**  
 
* `datareporting.healthreport.uploadEnabled` sends data if Health Report is enabled.
* `datareporting.policy.dataSubmissionEnabled` If disabled, no policy is shown and no uploads take place.
* `datareporting.policy.dataSubmissionEnabled.v2` will prevent the sending Health Report v2 data to Mozilla.

[Source](http://www.ghacks.net/2015/11/09/how-to-disable-the-firefox-saved-telemetry-pings-and-archive-folder)

### Disable the WebRTC service

`media.peerconnection.enabled` **`false`**  

### Disable Websockets

`network.websocket.enabled`  **`false`**  

### Disable weak encryption

`security*rc4` set all to **`false`**  
`security*des` set all to **`false`** _(Breaks Facebook)_

### Reject insecure negotiation attempts with websites

`security.ssl.require_safe_negotiation` **`true`** _(Breaks Facebook)_  
`security.ssl.treat_unsafe_negotiation_as_broken` **`true`** _(Breaks Facebook)_  

### Disable cache to disk

`browser.cache.disk.enable` **`false`**  
`browser.cache.disk_cache_ssl` **`false`**  
`browser.cache.offline.enable` **`false`**  

### Disable access to the clipboard

`dom.event.clipboardevents.enabled` **`false`**  

### Disable Geolocation to prevent sending network and location info to 3rd parties

`geo.enabled` **`false`**  

### Throw away all cookies every time you close the browser.

`network.cookie.lifetimePolicy` **`2`**  

### Opt out of add-on metadata updates

`extensions.getAddons.cache.enabled` **`false`**

[Source](https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/)


privacy.trackingprotection.enabled True  
browser.newtab.url about:blank  
browser.startup.homepage about:blank  
browser.urlbar.trimURLs false  
browser.tabs.remote.autostart true  

## about pages

about:profiles

about:serviceworkers

about:memory

about:plugins

about:performance

about:debugging

about:support

about:config

## GCLI

resize to WIDTH HEIGHT

csscoverage start, stop, report

https://developer.mozilla.org/en-US/docs/Tools/CSS_Coverage
