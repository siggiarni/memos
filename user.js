
// A comprehensive list of Firefox privacy and security settings by ghacks.net
// http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/

// Place in ~/Library/Applicaion Support/Firefox/Profiles/XXXXXXXX.default/

/*** 0100: STARTUP ***/
// 0101: disable "slow startup" options
// warnings, disk history, welcomes, intros, EULA, default browser check
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.feeds.showFirstRunUI", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");


/*** 0200: GEOLOCATION ***/
// 0201: disable location-aware browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "http://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false);
user_pref("browser.search.geoip.url", "");
// 0202: disable GeoIP-based search results
// https://trac.torproject.org/projects/tor/ticket/16254
//user_pref("browser.search.countryCode", "US");
//user_pref("browser.search.region", "US");


/*** 0300: QUIET FOX [PART 1]
No auto-phoning home for anything. You can still do manual updates. It is still important
to do updates for security reasons. If you don't auto update, make sure you do manually.
There are many legitimate reasons to turn off AUTO updates, including hijacked monetized
extensions, time constraints, legacy issues, and fear of breakage/bugs ***/
// 0301: disable browser auto update
user_pref("app.update.enabled", false);
// 0302: disable browser auto installing update when you do a manual check
user_pref("app.update.auto", false);
// 0303: disable search update
user_pref("browser.search.update", false);
// 0304: disable add-ons auto checking for new versions
user_pref("extensions.update.enabled", false);
// 0305: disable add-ons auto update
user_pref("extensions.update.autoUpdateDefault", false);
// 0306: disable add-on metadata updating
// sends daily pings to mozilla about extensions and recent startups
user_pref("extensions.getAddons.cache.enabled", false);
// 0307: disable auto updating of personas (themes)
user_pref("lightweightThemes.update.enabled", false);
// 0308: disable update plugin notifications
// if using flash/java/silverlight, it is beest to turn on their own auto-update mechanisms.
// See 1804 below: Mozilla only checks a few plugins and will soon do away with NAPI
user_pref("plugins.update.notifyUser", false);
// 0320: disable extension discovery
// featured extensions for displaying in Get Add-ons panel
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");


// 0330a: disable telemetry
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
// the pref (.unified) affects the behaviour of the pref (.enabled)
// IF unified=false then .enabled controls the telemetry module
// IF unified=true then .enabled ONLY controls whether to record extended data
// so make sure to have both set as false
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
// 0330b: set unifiedIsOptIn to make sure telemetry respects OptIn choice and that telemetry
// is enabled ONLY for people that opted into it, even if unified Telemetry is enabled
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
// 0331: remove url of server telemetry pings are sent to
user_pref("toolkit.telemetry.server", "");
// 0332: disable archiving pings locally - irrelevant if toolkit.telemetry.unified is false
user_pref("toolkit.telemetry.archive.enabled", false);
// 0333a: disable health report
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
// 0333b: disable about:healthreport page (which connects to mozilla for locale/css+js+json)
// If you have disabled health reports, then this about page is useless - disable it
// If you want to see what health data is present, then these must be set at default
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.about.reportUrlUnified", "");
// 0334a: disable FF41+ new data submission master kill switch
// If disabled, no policy is shown or upload takes place, ever
// https://bugzilla.mozilla.org/show_bug.cgi?id=1195552
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// 0334b: disable FHR (Firefox Health Report) v2 data being sent Mozilla servers
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
// 0335: remove a telemetry clientID
// if you haven't got one, be proactive and set it now for future proofing
user_pref("toolkit.telemetry.cachedClientID", "");
// 0340: disable experiments
// https://wiki.mozilla.org/Telemetry/Experiments
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// 0341: disable mozilla permission to silently opt you into tests
user_pref("network.allow-experiments", false);
// 0350: disable crash reports
user_pref("breakpad.reportURL", "");
// 0360: disable new tab tile ads & preload & marketing junk
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// 0370: disable "Snippets" (Mozilla content shown on about:home screen)
// https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
// MUST use HTTPS - arbitrary content injected into this page via http opens up MiTM attacks
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// 0371: disable "Heartbeat" (Mozilla user rating telemetry)
user_pref("browser.selfsupport.url", "");
// 0372: disable "Hello" (TokBox/Telefonica WebRTC voice & video call PUP) WebRTC (IP leak)
// https://www.mozilla.org/en-US/privacy/firefox-hello/
// https://security.stackexchange.com/questions/94284/how-secure-is-firefox-hello
user_pref("loop.enabled", false);
user_pref("loop.server", "");
// 0373: disable "Pocket" (third party "save for later" service) & remove urls for good measure
// NOTE: Important: Remove the pocket icon from your toolbar first
// https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
// 0373a: disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);
// 0374: disable "social" integration
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Social_API
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);


/*** 0400: QUIET FOX [PART 2]
// This section has security & tracking protection implications vs privacy concerns.
// These settings are geared up to make FF "quiet" & private.
// IMPORTANT: This entire section is rather contentious. Safebrowsing is designed to protect
// users from malicious sites. Tracking protection is designed to lessen the impact of third
// parties on websites to stop tracking and to speed up your browsing experience. These are
// both very good features provided by Mozilla. They do rely on third parties: Google for
// safebrowsing and Disconnect for tracking prrotection (someone has to provide the information).
// Additionally, SSL Error Reporting helps makes the internet more secure for everyone.
// If you do not understand the ramifications of disabling all of these, then it is advised that
// you enable them by commenting out the preferences and saving the changes, and then in
// about:config find each entry and right-click and reset the preference's value. ***/

// 0401: DON'T disable extension blocklist - SECURITY
// It now includes updates for "revoked certificates" - security trumps privacy here
// NOTE: requires extensions.blocklist.url to be set at default
// https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl
user_pref("extensions.blocklist.enabled", true);

// 0402: disable "Block reported web forgeries" - PRIVACY
// If true this compares visited URLs against a blacklist or submits URLs to a third party
// to determine whether a site is legitimate. This setting is under Options>Security
user_pref("browser.safebrowsing.enabled", false);

// 0410: disable "Block reported attack sites" - PRIVACY
// Safebrowsing uses locally stored data, but if the item is not found, then
// google is contacted. This setting is under Options>Security
user_pref("browser.safebrowsing.malware.enabled", false);

// 0411: disable safebrowsing urls & download
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// 0411b: disable FF43+ safebrowsing urls
user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

// 0420: disable tracking protection
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
// I believe there are no privacy concerns here, but you are better off using an
// extension such as uBlock Origin which is not decided by a third party (disconnect)
// and which is far more effective (when used correctly)
user_pref("privacy.trackingprotection.enabled", true);
// user_pref("browser.trackingprotection.gethashURL", "");
// user_pref("browser.trackingprotection.getupdateURL", "");
// user_pref("privacy.trackingprotection.pbmode.enabled", false);

// 0421: disable SSL Error Reporting - PRIVACY
// https://gecko.readthedocs.org/en/latest/browser/base/sslerrorreport/preferences.html
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");


/*** 0600: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - eg clicked on] ***/
// 0601: disable link prefetching
// Default: True
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
user_pref("network.prefetch-next", false);

// 0602: disable dns prefetching
// Default: False
// http://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// 0603: disable Seer/Necko
user_pref("network.predictor.enabled", false);

// 0603a: disable more Necko stuff (not sure what this will do but so far no ill effects)
// https://wiki.mozilla.org/Necko/CaptivePortal
user_pref("captivedetect.canonicalURL", "");

// 0604: disable search suggestions
user_pref("browser.search.suggest.enabled", false);

// 0605: disable link-mouseover opening connection to linked server
// http://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// http://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links
user_pref("network.http.speculative-parallel-limit", 0);

// 0606: disable pings (but enforce same host in case)
// http://kb.mozillazine.org/Browser.send_pings
// http://kb.mozillazine.org/Browser.send_pings.require_same_host
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);


/*** 0800: LOCATION BAR / SEARCH / AUTO SUGGESTIONS / HISTORY / FORMS etc
// Not ALL of these are strictly needed, some are for the truly paranoid, but
// included for a more comprehensive list (see comments on each one) ***/

// 0801: disable location bar using search - PRIVACY
// Default: True
// don't leak typos to a search engine, give an error message instead
user_pref("keyword.enabled", true);
// user_pref("keyword.enabled", false);

// 0802: disable location bar domain guessing - PRIVACY/SECURITY
// domain guessing intercepts DNS "hostname not found errors" and resends a
// request (eg by adding www or .com). This is inconsistent use (eg FQDNs), does not work
// via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
// as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
// intend to), can leak sensitive data (eg query strings: eg Princeton attack),
// and is a security risk (eg common typos & malicious sites set up to exploit this)
user_pref("browser.fixup.alternate.enabled", false);

// 0803: disable locationbar dropdown - PRIVACY (shoulder surfers,forensics/unattended browser)
// Default: 12
// user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.maxRichResults", 12);

// 0804: display all parts of the url
// why rely on just a visual clue - helps SECURITY
user_pref("browser.urlbar.trimURLs", false);

// 0805: disable URLbar autofill - PRIVACY (shoulder surfers, forensics/unattended browser)
// http://kb.mozillazine.org/Inline_autocomplete
// user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill", true);
// user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.autoFill.typed", true);

// 0806: disable autocomplete - PRIVACY (shoulder surfers, forensics/unattended browser)
// user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.autocomplete.enabled", true);
// user_pref("browser.urlbar.unifiedcomplete", false);
user_pref("browser.urlbar.unifiedcomplete", true);

// 0807: disable history manipulation - SECURITY
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history
// WARNING: if set to false it breaks some sites (youtube) ability to correctly show the
// url in location bar and for the forward/back tab history to work
// user_pref("browser.history.allowPopState", false);
// user_pref("browser.history.allowPushState", false);
// user_pref("browser.history.allowReplaceState", false);

// 0808: disable history suggestions - PRIVACY (shoulder surfers, forensics/unattended browser)
// user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.history", true);

// 0809: limit history leaks via enumeration (PER TAB: back/forward) - PRIVACY
// This is a PER TAB session history. You still have a full history stored under all history
// default=50, minimum=1=currentpage, 2 is the recommended minimum as some pages
// use it as a means of referral (eg hotlinking), 4 or 6 may be more practical
user_pref("browser.sessionhistory.max_entries", 4);

// 0810: disable css querying page history - css history leak - PRIVACY
user_pref("layout.css.visited_links_enabled", false);

// 0811: disable displaying Javascript in history URLs - SECURITY
user_pref("browser.urlbar.filter.javascript", true);

// 0812: disable saving info entered in web forms & the search bar - PRIVACY
// For convenience & functionality, this is best left at default true.
// You can clear formdata on exiting firefox
// user_pref("browser.formfill. enable", false);

// 0813: disable saving form data on secure websites - PRIVACY (shoulder surfers etc)
// For convenience & functionality, this is best left at default true.
// You can clear formdata on exiting firefox
// user_pref("browser.formfill.saveHttpsForms", false);

// 0814: disable auto-filling username & password form fields - SECURITY
// can leak in cross-site forms AND be spoofed
// http://kb.mozillazine.org/Signon.autofillForms
// password will still be auto-filled after a user name is manually entered
user_pref("signon.autofillForms", false);

// 0815 disable live search suggestions in the urlbar and toggle off the Opt-In prompt: FF41+
// Setting: Options>Privacy>Location Bar>Related searches from the default search engine
// user_pref("browser.urlbar.suggest.searches", false);
// user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);


/*** 1000: CACHE ***/
// 1001: disable disk cache
user_pref("browser.cache.disk.enable", false);
// 1002: disable disk caching of SSL pages
// http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl", false);
// 1003: disable memory cache as well IF you're REALLY paranoid
// I haven't tried it, but I'm sure you'll take a performance/traffic hit
// user_pref("browser.cache.memory.enable", false);
// 1004: disable offline cache
user_pref("browser.cache.offline.enable", false);
// 1005: disable storing extra session data 0=all 1=http-only 2=none
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.privacy_level_deferred", 2);
// 1006: disable pages being stored in memory. This is not the same as memory cache.
// Visited pages are stored in memory in such a way that they don't have to be
// re-parsed. This improves performance when pressing back/forward.
// For the sake of completeness, this option is listed for the truly paranoid.
// 0=none, -1=auto (that's minus 1), or any other positive integer
// http://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers
// user_pref("browser.sessionhistory.max_total_viewers", 0);


/*** 1200: SSL / OCSP / CERTS / ENCRYPTION ***/
// 1203: enable OCSP stapling
// https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
user_pref("security.ssl.enable_ocsp_stapling", true);

// 1204: reject communication with servers using old SSL/TLS - vulnerable to a MiTM attack
// https://wiki.mozilla.org/Security:Renegotiation
// WARNING: leave commented out for now, as when set to true it breaks too many sites
// user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.require_safe_negotiation", false);

// 1205: display warning (red padlock) for "broken security"
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// 1206: require certificate revocation check through OCSP protocol
// This leaks information about the sites you visit to the CA (cert authority)
// It's a trade-off between security (checking) and privacy (leaking info to the CA)
// WARNING: Since FF43 the default is now true. If set to true, this may/will cause some
// site breakage. Some users have previously mentioned issues with youtube, microsoft etc
user_pref("security.OCSP.require", true);

// 1207: query OCSP responder servers to confirm current validity of certificates (default=1)
// 0=disable, 1=validate only certificates that specify an OCSP service URL
// 2=enable and use values in security.OCSP.URL and security.OCSP.signing
user_pref("security.OCSP.enabled", 1);

// 1208: enforce strict pinning
// https://trac.torproject.org/projects/tor/ticket/16206
// PKP (public key pinning) 0-disabled 1=allow user MITM (such as your antivirus), 2=strict
// WARNING: If you rely on an AV (antivirus) to protect your web browsing
// by inspecting ALL your web traffic, then leave at default =1
user_pref("security.cert_pinning.enforcement_level", 2);

// 1209: disable TLS 1.0
// 1=min version of TLS 1.0, 2-min version of TLS 1.1, 3=min version of TLS 1.2
// WARNING: FF/chrome currently allow TLS 1.0 by default, so this is your call.
// http://kb.mozillazine.org/Security.tls.version.*
// https://www.ssl.com/how-to/turn-off-ssl-3-0-and-tls-1-0-in-your-browser/
user_pref("security.tls.version.min", 2);

// 1210: disable 1024-DH Encryption
// https://www.eff.org/deeplinks/2015/10/how-to-protect-yourself-from-nsa-attacks-1024-bit-DH
// WARNING: may break obscure sites, but not major sites, which should support ECDH over DHE
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);


/*** 1400: FONTS ***/
// 1401: disable websites downloading their own fonts (0=block, 1=allow)
// This setting is under Options>Content>Font & Colors>Advanced>Allow pages to choose...
// If you disallow fonts, this drastically limits/reduces font enumeration (by JS) which
// is a high entropy fingerprinting vector.
// WARNING: Disabling fonts can uglify the web a fair bit.
user_pref("browser.display.use_document_fonts", 0);
// 1402: allow icon fonts (gylphs) through FF41+
user_pref("gfx.downloadable_fonts.enabled", true);
// 1403: disable rendering of SVG OpenType fonts
// https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// 1404: use more legible default fonts
// WARNING: These are the settings of the author of this user.js, comment out if required
// Been using this for a few weeks, it really grows on you
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); // default Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial"); // default Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); // default Courier New


/*** 1600: HEADERS ***/
// 1601: disable referer from an SSL Website
user_pref("network.http.sendSecureXSiteReferrer", false);
// 1602: DNT HTTP header - essentially useless
// http://kb.mozillazine.org/Privacy.donottrackheader.value (pref required since FF21+)
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
// 1603: REFERER
// http://kb.mozillazine.org/Network.http.sendRefererHeader
// It is better to leave these at default (2, false) and use an extension
// to block all and then whitelist (eg RefControl) otherwise too much of the
// internet breaks. Even Tor Browser Bundle does nothing about this.
// user_pref("network.http.sendRefererHeader", 2);
// user_pref("network.http.referer.spoofSource", false);


/*** 1800: PLUGINS ***/
// 1801: set default plugin state (i.e new plugins on discovery) to never activate
// 0=disabled, 1=ask to activate, 2=active - you can override individual plugins
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
// 1802: enable click to play and set to 0 minutes
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
// make sure a plugin is in a certain state: 0=deactivated 1=ask 2=enabled (flash example)
// you can just set all these plugin.state's via Add-ons>Plugins
// NOTE: you can still over-ride individual sites eg Youtube via site permissions
// user_pref("plugin.state.flash", 1);
// 1804: disable plugins using external/untrusted scripts with XPCOM or XPConnect
user_pref("security.xpconnect.plugin.unrestricted", false);
// 1805: disable scanning for plugins
// http://kb.mozillazine.org/Plugin_scanning
// plid.all = whether to scan the directories specified in the Windows registry for PLIDs
// includes: RealPlayer, Next-Generation Java Plug-In, Adobe Flash, Antivirus etc
// WARNING: The author turned off plugins, try it one day. You are not missing much.
user_pref("plugin.scan.plid.all", false);
// 1806: Acrobat, Quicktime, WMP are handled separately.
// The integer refers to min version number allowed
user_pref("plugin.scan.Acrobat", 99999);
user_pref("plugin.scan.Quicktime", 99999);
user_pref("plugin.scan.WindowsMediaPlayer", 99999);
// 1807: disable auto-play of HTML5 media (including webms)
// user_pref("media.autoplay.enabled", false);
// 1808: disable the bundled OpenH264 codec
// user_pref("media.gmp-provider.enabled", false);


/*** 2000: MEDIA / CAMERA / MIKE ***/
// 2001: disable WebRTC
// https://www.privacytools.io/#webrtc
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
// 2001a: FF42+ pref which improves the WebRTC IP Leak issue, as opposed to completely
// disabling WebRTC. You still need to enable WebRTC for this to be used.
// https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.ice.default_address_only", true);
// 2002: disable WebRTC - firefox making automatic connections#w_media-capabilities
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "");
// 2003: disable EME (Adobe "Primetime Content Decryption Module" DRM)
// https://trac.torproject.org/projects/tor/ticket/16285
user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);
// 2004: disable getUserMedia
// https://wiki.mozilla.org/Media/getUserMedia
user_pref("media.navigator.enabled", false);
// 2010: disable WebGL, force bare minimum feature set if used & disable WebGL extensions
// http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
// https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
// 2020: disable video statistics fingerprinting vector - JS performance fingerprinting
user_pref("media.video_stats.enabled", false);
// 2021: disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
// 2022: disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
// 2023: disable camera stuff
user_pref("camera.control.autofocus_moving_callback.enabled", false);
user_pref("camera.control.face_detection.enabled", false);


/*** 2200: UI MEDDLING
see http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features ***/
// 2201: disable website control over right click context menu
user_pref("dom.event.contextmenu.enabled", false);
// 2202: UI SPOOFING: disable scripts hiding or disabling the following on new windows
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.scrollbars", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
// 2203: POPUP windows - prevent or allow javascript UI meddling
user_pref("dom.disable_window_flip", true); // window z-order
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true); //bookmarks toolbar
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// 2204: disable links opening in a new window
// https://trac.torproject.org/projects/tor/ticket/9881
// test url: https://people.torproject.org/~gk/misc/entire_desktop.html
// You can still right click a link and select open in a new window
// This is to stop malicious window sizes and screen res leaks etc in conjunction
// with 2203 dom.disable_window_move_resize=true | 2418 full-screen-api.enabled=false
// user_pref("browser.link.open_newwindow.restriction", 0);


/*** 2400: DOM - JAVASCRIPT ***/
// 2401: disable dom storage
// This can be controlled in a more granular way with uMatrix (if used correctly)
// WARNING: this will break some sites' functionality.
// user_pref("dom.storage.enabled", false);
// 2402: disable website access to clipboard events/content
// WARNING: This will break some sites functionality such as pasting into Facebook
// this applies to onCut, onCopy, onPaste events - i.e is you have to interact with
// the website for it to look at the clipboard
user_pref("dom.event.clipboardevents.enabled", false);
// 2403: disable scripts changing images
// WARNING: will break some sites such as google maps and a lot of web apps
// user_pref("dom.disable_image_src_set", true);
// 2404: disable JS storing data permanently
// This setting is under about:permissions>All SItes>Maintain Offline Storage
// You can override individual domains under site permissions
// WARNING: If set as false (disabled), this WILL break some [old] add-ons
// and DOES break some sites' functionality
user_pref("dom.indexedDB.enabled", true);
// 2405: https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);
// 2406: disable gamepad API - fingerprinting - USB device ID enumeration
user_pref("dom.gamepad.enabled", false);
// 2407: disable battery API - fingerprinting vector
user_pref("dom.battery.enabled", false);
// 2408: disable network API - fingerprinting vector
user_pref("dom.network.enabled", false);
// 2409: disable giving away network info
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
user_pref("dom.netinfo.enabled", false);
// 2410: disable User Timing API
// https://trac.torproject.org/projects/tor/ticket/16336
user_pref("dom.enable_user_timing", false);
// 2411: disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// 2412: disable timing attacks - javascript performance fingerprinting
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_performance", false);
// 2413: disable virtual reality devices - fingerprinting vector
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
// 2414: disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// 2415: max popups from a single non-click event - default is 20!
user_pref("dom.popup_maximum", 3);
// 2416: disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// 2417: disable SharedWorkers for now
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 8)
// https://bugs.torproject.org/15562 - SharedWorker violates first party isolation
user_pref("dom.workers.sharedWorkers.enabled", false);
// 2418: disable full-screen API
// This setting is under about:permissions>All Sites>Fullscreen
// set to false=block, set to true=ask
// NOTE: you can still override individual domains under site permissions
user_pref("full-screen-api.enabled", false);
// 2419: disable touch events
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
// https://trac.torproject.org/projects/tor/ticket/10286
// fingerprinting attack vector - leaks screen res & actual screen coordinates
// WARNING: If you use touch eg Win8/10 Metro reset this to default
user_pref("dom.w3c_touch_events.enabled", 0);
// 2420: disable support for asm.js (http://asmjs.org/)
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);
// 2430: disable web/push notifications
// https://developer.mozilla.org/en-US/docs/Web/API/notification
// NOTE: you can still override individual domains under site permissions (FF44+)
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
// 2431: disable push notifications (FF44+?) - needs more research
// web apps can receive messages pushed to them from a server, whether or
// not the web app is in the foreground, or even currently loaded
// https://developer.mozilla.org/en/docs/Web/API/Push_API
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.userAgentID", "");


/*** 2600: MISC - LEAKS / FINGERPRINTING / PRIVACY / SECURITY ***/
// 2601: disable sending additional analytics to web servers
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled", false);
// 2602: CIS 2.3.2 disable downloading on desktop
user_pref("browser.download.folderList", 2);
// 2603: always ask the user where to download - enforce user interaction for security
user_pref("browser.download.useDownloadDir", false);
// 2604: https://bugzil.la/238789#c19
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// 2605: don't integrate activity into windows recent documents
user_pref("browser.download.manager.addToRecentDocs", false);
// 2606: disable hiding mime types (Options>Applications) not associated with a plugin
user_pref("browser.download.hide_plugins_without_extensions", false);
// 2607: disable page thumbnails - privacy
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.pagethumbnails.storage_version", 3); // not sure
// 2608: disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// 2609: disable insecure active content on https pages - mixed content
user_pref("security.mixed_content.block_active_content", true);
// 2610: disable insecure passive content (such as images) on https pages - mixed context
// current default=false, leave it this way as too many sites break visually
// user_pref("security.mixed_content.block_display_content", true);
// 2611: disable WebIDE to prevent remote debugging and addon downloads
// https://trac.torproject.org/projects/tor/ticket/16222
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
// 2612: disable SimpleServiceDiscovery - which can bypass proxy settings - eg Roku
// https://trac.torproject.org/projects/tor/ticket/16222
user_pref("browser.casting.enabled", false);
user_pref("gfx.layerscope.enabled", false);
// 2613: disable device sensor API - fingerprinting vector
user_pref("device.sensors.enabled", false);
// 2614: disable SPDY as it can contain identifiers
// SPDY will be deprecated in 2016
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 10)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
// 2615: disable http2 for now as well
user_pref("network.http.spdy.enabled.http2", false);
// 2617: disable pdf.js as an option to preview PDFs within Firefox
// see mime-types under Options>Applications) - EXPLOIT risk
// Enabling this (set to true) will change your option most likely to "Ask" or "Open with
// some external pdf reader". This does NOT necessarily prevent pdf.js being used via
// other means, it only removes the option. I think this should be left at default (false).
// 1. It won't stop JS bypassing it. 2. Depending on external pdf viewers there is just as
// much risk or more (acrobat). 3. mozilla are very quick to patch these sorts of exploits,
// they treat them as severe/critical and 4. for convenience
user_pref("pdfjs.disabled", false);
// 2618: when using SOCKS have the proxy server do the DNS lookup - dns leak issue
// http://kb.mozillazine.org/Network.proxy.socks_remote_dns
// https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
// eg in TOR, this stops your local DNS server from knowing your Tor destination
// as a remote Tor node will handle the DNS request
user_pref("network.proxy.socks_remote_dns", true);
// 2619: limit HTTP redirects (this does not control redirects with HTML meta tags or JS)
// WARNING: a low setting of 5 or under will probably break some sites (eg gmail logins)
// To control HTML Meta tag and JS redirects, use an addon (eg NoRedirect). Default is 20
user_pref("network.http.redirection-limit", 10);
// 2620: disable middle mouse click opening links
// https://trac.torproject.org/projects/tor/ticket/10089
user_pref("middlemouse.contentLoadURL", false);
// 2621: disable IPv6 (included for knowledge ONLY - not recommended)
// This is all about covert channels such as MAC addresses being included/abused in the
// IPv6 protocol for tracking. If you want to mask your IP address, this is not the way
// to do it. It's 2016, IPv6 is here. Here are some old links
// 2010: https://www.christopher-parsons.com/ipv6-and-the-future-of-privacy/
// 2011: https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6
// 2012: http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
// NOTE: It is a myth that disabling IPv6 will speed up your internet connection
// http://www.howtogeek.com/195062/no-disabling-ipv6-probably-wont-speed-up-your-internet-connection
// user_pref("network.dns.disableIPv6", true);
// user_pref("network.http.fast-fallback-to-IPv4", true);
// 2622: ensure you have a security delay when installing add-ons (milliseconds)
// default=1000, This also covers the delay in "Save" on downloading files.
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay", 1000);


/*** 2800: PERSONAL SETTINGS [that have PRIVACY implications]
These can all be set via options. you don't have to use this section. This is
included for those who wish to add this type of control into their user.js ***/
// 2801: COOKIES
// disable cookies on all sites
// you can set exceptions under site permissions or an extension (eg Cookie Controller)
// 0=allow all 1=allow same host 2=disallow all 3=allow 3rd party if it already set a cookie
user_pref("network.cookie.cookieBehavior", 2);
// 2082: enable FF to clear stuff on close
// This setting is under Options>Privacy>Clear history when firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// 2803: what to clear
// These settings are under Options>Privacy>Clear history when firefox closes>Settings
// These are the settings of the author of this user.js, chose your own
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.passwords", false);
user_pref("privacy.clearOnShutdown.sessions", false); // active logins
user_pref("privacy.clearOnShutdown.siteSettings", false);
// 2804: (to match above) - auto selection of items to delete with Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", false);
user_pref("privacy.cpd.siteSettings", false);


/*** 3000: PERSONAL SETTINGS
Settings that are handy to be able to easily migrate to a new profile. Users
can put their own non-security/privacy/fingerprinting/tracking stuff here ***/
// 3001: disable annoying warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// 3001a disable warning when a domain requests full screen
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
// user_pref("full-screen-api.warning.delay", 0);
// user_pref("full-screen-api.warning.timeout", 0);
// 3002: disable closing browser with last tab
// user_pref("browser.tabs.closeWindowWithLastTab", false);
// 3004: disable backspace
user_pref("browser.backspace_action", 2);
// 3005: disable autocopy default (use extensions autocopy 2 & copy plain text 2)
user_pref("clipboard.autocopy", false);
// 3006: disable enforced addon signing: FF43 turned on signatures required,
// until F44 stable you can disable this to buy some time for any addons you
// need to replace or get signed. It will be deprecated in FF44 most likely, but
// will still be retained for Aurora/Dev-Edition
// user_pref("xpinstall.signatures.required", false);
// 3007: open new windows in a new tab instead
// This setting is under Options>General>Tabs
// 1=current window, 2=new window, 3=most recent window
user_pref("browser.link.open_newwindow", 3);
// 3008: disable "Do you really want to leave this site?" popups
// https://support.mozilla.org/en-US/questions/1043508
user_pref("dom.disable_beforeunload", true);
// 3009: turn on APZ (Async Pan/Zoom) - requires e10s
// http://www.ghacks.net/2015/07/28/scrolling-in-firefox-to-get-a-lot-better-thanks-to-apz/
// user_pref("layers.async-pan-zoom.enabled", true);
// Throw away all cookies every time you close the browser.
user_pref("network.cookie.lifetimePolicy", 2);
// Blank new tab
// user_pref("browser.newtab.url", "about:blank");
// Blank homepage
// user_pref("browser.startup.homepage", "about:blank");
// Enable Electrolysis
// https://wiki.mozilla.org/Electrolysis
user_pref("browser.tabs.remote.autostart", true);
user_pref("network.dnsCacheEntries", "100");
user_pref("browser.formfill.enable", false);


/*** 3200: PALEMOON SPECIFIC ( https://www.palemoon.org/ )
Full list maintained by Moonchild: https://forum.palemoon.org/viewtopic.php?f=24&t=3357
If you have issues or questions about any of these, please use the palemoon forums ***/
// 3201: (v25.6+) disable canvas fingerprinting
// user_pref("canvas.poisondata", true);
// 3202: (v25.2+) control HSTS
// If editing this in about:config PM needs to be fully closed and then restarted
// NOTE: This is a trade-off between privacy vs security. HSTS was designed to increase
// security to stop MiTM attacks but can also be misused as a fingerprinting vector, by
// scrapping previously visited sites. Recommended: security over privacy. Your choice.
// user_pref("network.stricttransportsecurity.enabled", true);
// 3203: (v25.0+) controls whether to ignore an expired state of stapled OCSP responses
// If set to true, breaks with RFC6066 (like Firefox) and ignores the fact that stapled
// OCSP responses may be expired. If false (the default) aborts the connection.
// user_pref("security.ssl.allow_unsafe_ocsp_response", false);


/*** 9999: DEPRECATED
Personally confirmed by resetting as well as via documentation
except those with a ? because they are future releases ***/
// 2620: (35+) disable WebSockets
// https://developer.mozilla.org/en-US/Firefox/Releases/35
user_pref("network.websocket.enabled", false);
// 1804: (41+) disable plugin enumeration
// user_pref("plugins.enumerable_names", "");
// 0420: (42+) disable tracking protection
// this particular pref was never in stable
// labelled v42+ because that's when tracking protection landed
// user_pref("browser.polaris.enabled", false);
// 0411: (43+) disable safebrowsing urls & download
// user_pref("browser.safebrowsing.appRepURL", "");
// user_pref("browser.safebrowsing.gethashURL", "");
// user_pref("browser.safebrowsing.malware.reportURL", "");
// user_pref("browser.safebrowsing.reportErrorURL", "");
// user_pref("browser.safebrowsing.reportGenericURL", "");
// user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
// user_pref("browser.safebrowsing.reportMalwareURL", "");
// user_pref("browser.safebrowsing.reportURL", "");
// user_pref("browser.safebrowsing.updateURL", "");
// 1803: (43+) remove plugin finder service - http://kb.mozillazine.org/Pfs.datasource.url
// mozilla are dropping NAPI anyway [except flash/java/silverlight, i think thats all]
// user_pref("pfs.datasource.url", "");
// 3001a (43+) disable warning when a domain requests full screen
// replaced by setting full-screen-api.warning.timeout to zero
// user_pref("full-screen-api.approval-required", false);
// 2615: (43+) disable http2 for now as well
// user_pref("network.http.spdy.enabled.http2draft", false);
// 3003: (43+) disable new search panel UI [Classic Theme Restorer can restore the old search]
// user_pref("browser.search.showOneOffButtons", false);
// 0309: (43+?) disable sending plugin crash reports - keep FF quiet
// https://developer.mozilla.org/en-US/Firefox/Releases/43
// leaving this pref enabled because a reset does not remove it
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// 0310: (43+?) disable sending the URL of the website where a plugin crashed - PRIVACY
// https://developer.mozilla.org/en-US/Firefox/Releases/43
// leaving this pref enabled because a reset does not remove it
user_pref("dom.ipc.plugins.reportCrashURL", false);
// 1201: (44+?) block rc4 fallback and disable whitelist
// https://developer.mozilla.org/en-US/Firefox/Releases/43#Security
// https://developer.mozilla.org/en-US/Firefox/Releases/44#Security
user_pref("security.tls.unrestricted_rc4_fallback", false);
user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
// 1202: (44+?) disable rc4 ciphers
// https://trac.torproject.org/projects/tor/ticket/17369
// https://developer.mozilla.org/en-US/Firefox/Releases/43#Security
// https://developer.mozilla.org/en-US/Firefox/Releases/44#Security
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
//
user_pref("security.ssl3.rsa_des_ede3_sha", false);


/*** TO INVESTIGATE ***/
// disable websocket support in workers
// user_pref("dom.workers.websocket.enabled", false);
// disable server side events
// https://developer.mozilla.org/en-US/docs/Server-sent_events
// SSE (server-sent events) is part of HTML5 (EventSource API) and data
// pushed by the server is initiated by the client.
// user_pref("dom.server-events.enabled", false);
// disable workers API
// https://developer.mozilla.org/en-US/docs/Web/API/Worker
// user_pref("dom.workers.enabled", false);
// disable service workers API
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
// user_pref("dom.serviceWorkers.enabled", false);
// Subresource integrity
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// https://wiki.mozilla.org/Security/Subresource_Integrity
// user_pref("security.sri.enable", true);
// stuff to follow up on
// https://bugzilla.mozilla.org/show_bug.cgi?id=1070752
