# Difference between dns-prefetch & preconnect

The difference between dns-prefetch and preconnect is dns-prefetch will only do the DNS lookup, while preconnect will do the DNS lookup, TLS negotiation, and the TCP handshake. This means that it avoids an additional 2 RTT once the resource is ready to be downloaded.
