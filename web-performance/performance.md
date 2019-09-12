# Difference between dns-prefetch & preconnect

The difference between `dns-prefetch` and `preconnect`

* `dns-prefetch` will **only** do the DNS lookup
* `preconnect` will do the DNS lookup, TLS negotiation, and the TCP handshake.

This means that it avoids an additional 2 RTT once the resource is ready to be downloaded.
