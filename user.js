/******
* name: ghacks user.js
* date: 02 July 2016
* version: 0.10
* FF version: 47 (DESKTOP)
* author: Pants (v10 special thanks to ghacks contributors: Just me, Conker, earthling, & Rockin' Jerry)
* url: http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/
* required reading: http://kb.mozillazine.org/User.js_file

* README/IMPORTANT:
  End users of this list/file are expected to know what they are doing. These are the author's
  settings. The author does NOT expect (or indeed want) end users to just run with it as is.
  Use it as a comprehensive list, or as a template for your own. Extensive links and comments
  have been added to help. Before using this user.js, if necessary, you should change, remove or
  comment out with two forward slashes any preferences you're not happy with or not sure about.
  The settings in this file (user.js) OVERWRITE the ones in your prefs (prefs.js - these are
  accessed via about:config) when FF is started. See the required reading above.

* BACKUP FIRST:
  Backup your profile first, or even just the PREFS.JS. Go to your profile directory and copy
  prefs.js, rename it (eg to prefs.js.backup). That way, if you have problems, to restore FF
  to the state it was in beforehand, close FF, delete the prefs.js, rename your backup copy of
  prefs back to prefs.js, RENAME the user.js so it doesn't overwrite everything again, then
  start FF. IF you have any problems, you can also ask in the comments at ghacks.

* PURPOSE:
  This is not a "comprehensive" list of ALL things privacy/security (otherwise it would be huge)
  It is more like a list of settings that generally differ from their defaults, and is aimed at
  improving security and privacy, at making a "quieter" FF, and at reducing fingerprinting and
  tracking; while allowing functionality. There will be trade-offs and conflicts between these.

* COMMON ISSUES:
  Some prefs will break some sites (it's inevitable). If you are having issues search for
  "WARNING:" in this document, especially the ones listed just below.

  This user.js uses the author's settings, so you need to check these EACH release because
  the author prefers anonymity, security, and privacy over functionality [eg being able to
  paste in Facebook, downloadable fonts, and other minor inconveniences]. You have been warned.

   0202 & 0204 & 0207 & 0208: search, language and locale settings
   0807: disable history manipulation
   0903 & 0904: master password (author set his up to last 5 minutes, default is once per session)
   1007 & 1008: disabling/reducing session store saves affects recently closed tabs history
   1204: security.ssl.require_safe_negotiation
   1206: security.OCSP.require
   1208: security.cert_pinning.enforcement_level
   1209: disable TLS 1.0
   1210: disable 1024-DH Encryption
   1211: disable SHA-1
   1212: disable SSL session tracking
   1401 & 1406: browser.display.use_document_fonts [author blocked fonts]
   1404: default fonts [author changed default fonts]
   1805: plugin.scan.plid.all [author blocked all plugins]
   1807: disable auto-play of HTML5 media (breaks youtube playback)
   2201: dom.event.contextmenu.enabled
   2402: dom.event.clipboardevents.enabled
   2404: dom.indexedDB.enabled
   2507: keyboard fingerprinting (android + physical keyboard)
   2508: hardware acceleration (performance vs lots of video, also fonts render differently)
         [author killed hardware acceleration]
   2509: dom.w3c_touch_events.enabled (you will want to change this if you use touch)
   2619: network.http.redirection-limit
   2705: dom.storage.enabled
   3019: set network to no proxy

* THANKS:
  Special thanks to Martin Brinkmann and the ghacks community
  Lots of websites, lots of people, too many to list but here are some excellent resources
  - https://github.com/pyllyukko/user.js
  - http://www.wilderssecurity.com/threads/firefox-lockdown.368003/
  - http://12bytes.org/articles/tech/firefoxgecko-configuration-guide-for-privacy-and-performance-buffs
  - https://www.privacy-handbuch.de/handbuch_21.htm (German)

 ******/

// START: internal custom pref to test for syntax errors
user_pref("pants.testing", 100);

/*** 0100: STARTUP ***/
// 0101: disable "slow startup" options
   // warnings, disk history, welcomes, intros, EULA, default browser check
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.rights.3.shown", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.usedOnWindows10.introURL", "");
// 0102: set start page (0=blank, 1=home, 2=resume previous session)
   // home = browser.startup.homepage preference
   // You can set all of this from Options>General>Startup
   // user_pref("browser.startup.page", 0);

/*** 0200: GEOLOCATION ***/
// 0201: disable location-aware browsing
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("geo.wifi.logging.enabled", false); // (hidden pref)
user_pref("browser.search.geoip.url", "");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
// 0202: disable GeoIP-based search results
   // https://trac.torproject.org/projects/tor/ticket/16254
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
// 0203: disable using OS locale, force APP locale
user_pref("intl.locale.matchOS", false);
// 0204: set APP local
user_pref("general.useragent.locale", "en-US");
// 0206: disable geographically specific results/search engines eg: "browser.search.*.US"
   // i.e ignore all of mozilla's multiple deals with multiple engines in multiple locales
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
// 0207: set language to match
   // WARNING: reset this to your default if you don't want English
user_pref("intl.accept_languages", "en-US, en");
// 0208: enforce default OS locale as US English (vs using application locale)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=867501
user_pref("javascript.use_us_english_locale", true); // (hidden pref)

/*** 0300: QUIET FOX [PART 1]
     No auto-phoning home for anything. You can still do manual updates. It is still important
     to do updates for security reasons. If you don't auto update, make sure you do manually.
     There are many legitimate reasons to turn off AUTO updates, including hijacked monetized
     extensions, time constraints, legacy issues, and fear of breakage/bugs  ***/
// 0301: disable browser auto update
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
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
   // if using flash/java/silverlight, it is best to turn on their own auto-update mechanisms.
   // See 1804 below: mozilla only checks a few plugins and will soon do away with NPAPI
user_pref("plugins.update.notifyUser", false);
// 0309: disable sending flash crash reports
   // https://developer.mozilla.org/en-US/Firefox/Releases/43 (supposedly deprecated)
   // leaving this pref enabled because a reset does not remove it
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// 0310: (43+?) disable sending the URL of the website where a plugin crashed
   // https://developer.mozilla.org/en-US/Firefox/Releases/43 (supposedly deprecated)
   // leaving this pref enabled because a reset does not remove it
user_pref("dom.ipc.plugins.reportCrashURL", false);
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
user_pref("toolkit.telemetry.unifiedIsOptIn", true); // (hidden pref)
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
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
// 0334a: disable FF41+ new data submission master kill switch
   // If disabled, no policy is shown or upload takes place, ever
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1195552
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// 0334b: disable FHR (Firefox Health Report) v2 data being sent to mozilla servers
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
// 0351: disable sending of crash reports (added in FF44)
user_pref("browser.tabs.crashReporting.sendReport", false);
// 0360: disable new tab tile ads & preload & marketing junk
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// 0370: disable "Snippets" (mozilla content shown on about:home screen)
   // https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
   // MUST use HTTPS - arbitrary content injected into this page via http opens up MiTM attacks
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// 0371: disable "Heartbeat" (mozilla user rating telemetry)
user_pref("browser.selfsupport.url", "");
// 0372: disable "Hello" (TokBox/Telefonica WebRTC voice & video call PUP) WebRTC (IP leak)
   // https://www.mozilla.org/en-US/privacy/firefox-hello/
   // https://security.stackexchange.com/questions/94284/how-secure-is-firefox-hello
user_pref("loop.enabled", false);
user_pref("loop.server", "");
user_pref("loop.feedback.formURL", "");
user_pref("loop.feedback.manualFormURL", "");
   // additional facebook loop settings
user_pref("loop.facebook.appId", "");
user_pref("loop.facebook.enabled", false);
user_pref("loop.facebook.fallbackUrl", "");
user_pref("loop.facebook.shareUrl", "");
   // https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
user_pref("loop.logDomains", false);
// 0373: disable "Pocket" (third party "save for later" service) & remove urls for good measure
   // NOTE: Important: Remove the pocket icon from your toolbar first
   // https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
// 0374: disable "social" integration
   // https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Social_API
user_pref("social.whitelist", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.directories", "");
user_pref("social.share.activationPanelEnabled", false);
// 0375: disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);

/*** 0400: QUIET FOX [PART 2]
     This section has security & tracking protection implications vs privacy concerns.
     These settings are geared up to make FF "quiet" & private.
     IMPORTANT: This entire section is rather contentious. Safebrowsing is designed to protect
     users from malicious sites. Tracking protection is designed to lessen the impact of third
     parties on websites to reduce tracking and to speed up your browsing experience. These are
     both very good features provided by Mozilla. They do rely on third parties: Google for
     safebrowsing and Disconnect for tracking protection (someone has to provide the information).
     Additionally, SSL Error Reporting helps makes the internet more secure for everyone.
     If you do not understand the ramifications of disabling all of these, then it is advised that
     you enable them by commenting out the preferences and saving the changes, and then in
     about:config find each entry and right-click and reset the preference's value. ***/
// 0401: DON'T disable extension blocklist, but sanitize blocklist url - SECURITY
   // It now includes updates for "revoked certificates" - security trumps privacy here
   // https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl
   // https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
// 0410: disable safe browsing
   // I have redesigned this sub-section to differentiate between "real-time"/"user initiated"
   // data being sent to google from all other settings such as using local blocklists/whitelists
   // and updating those lists. There SHOULD be NO privacy issues here. Even *IF* an URL was sent
   // to google, they swear it is anonymized and only used to flag malicious sites/activity. Firefox
   // also takes measures such as striping out identifying parameters and storing safe browsing
   // cookies in a separate jar. (#Turn on browser.safebrowsing.debug to monitor this activity)
   // To use safebrowsing but not "leak" binary download info to google, only use 0410e and 0410f
   // #Required reading: https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
   // https://wiki.mozilla.org/Security/Safe_Browsing
// 0410a: disable "Block reported web forgeries" This setting is under Options>Security
   // this covers deceptive sites such as phishing and social engineering
user_pref("browser.safebrowsing.enabled", false);
// 0410b: disable "Block reported attack sites" This setting is under Options>Security
   // this covers malware and PUPs (potentially unwanted programs)
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
// 0410c: disable google safebrowsing downloads, updates
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // update google lists
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // list hash check
// 0410d: disable mozilla safebrowsing downloads, updates
   // NOTE: These two prefs are also used for Tracking Protection (section 0420)
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", ""); // resolves hash conflicts
user_pref("browser.safebrowsing.provider.mozilla.updateURL", ""); // update FF lists
// 0410e: disable binaries NOT in local lists being checked by google (real-time checking)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.appRepURL", ""); // google application reputation check
// 0410f: disable reporting URLs
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
// 0420: disable tracking protection
   // There SHOULD be NO privacy concerns here, but you are better off using an extension such as
   // uBlock Origin which is not decided by a third party (disconnect) and is far more effective
   // (when used correctly). NOTE: There are two prefs (section 0410d) shared with Safe Browsing
   // https://wiki.mozilla.org/Security/Tracking_protection
   // https://support.mozilla.org/en-US/kb/tracking-protection-firefox
user_pref("privacy.trackingprotection.enabled", false); // all windows pref (not just private)
user_pref("privacy.trackingprotection.pbmode.enabled", false); // private browsing pref
// 0430: disable SSL Error Reporting - PRIVACY
   // https://gecko.readthedocs.org/en/latest/browser/base/sslerrorreport/preferences.html
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

/*** 0600: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - eg clicked on] ***/
// 0601: disable link prefetching
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
user_pref("network.prefetch-next", false);
// 0602: disable dns prefetching
   // http://www.ghacks.net/2013/04/27/firefox-prefetching-what-you-need-to-know/
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
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
// 0607: stop links launching Windows Store on Windows 8/8.1/10
   // http://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/
user_pref("network.protocol-handler.external.ms-windows-store", false);



/*** 0800: LOCATION BAR / SEARCH / AUTO SUGGESTIONS / HISTORY / FORMS etc
     Not ALL of these are strictly needed, some are for the truly paranoid, but
     included for a more comprehensive list (see comments on each one) ***/

// 0801: disable location bar using search - PRIVACY
   // don't leak typos to a search engine, give an error message instead
// user_pref("keyword.enabled", false);
user_pref("keyword.enabled", true);

// 0802: disable location bar domain guessing - PRIVACY/SECURITY
   // domain guessing intercepts DNS "hostname not found errors" and resends a
   // request (eg by adding www or .com). This is inconsistent use (eg FQDNs), does not work
   // via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
   // as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
   // intend to), can leak sensitive data (eg query strings: eg Princeton attack),
   // and is a security risk (eg common typos & malicious sites set up to exploit this)
user_pref("browser.fixup.alternate.enabled", false);

// 0803: disable locationbar dropdown - PRIVACY (shoulder surfers,forensics/unattended browser)
// user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.maxRichResults", 12);

// 0804: display all parts of the url
   // why rely on just a visual clue - helps SECURITY
user_pref("browser.urlbar.trimURLs", false);

// 0805: disable URLbar autofill -  PRIVACY (shoulder surfers, forensics/unattended browser)
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
   // NOTE: this has NEVER been fully "resolved": in mozilla/docs it is stated it's only in
   // 'certain circumstances', also see latest comments in the bug link
   // http://dbaron.org/mozilla/visited-privacy
   // https://bugzilla.mozilla.org/show_bug.cgi?id=147777
   // https://developer.mozilla.org/en-US/docs/Web/CSS/Privacy_and_the_:visited_selector
user_pref("layout.css.visited_links_enabled", false);

// 0811: disable displaying Javascript in history URLs - SECURITY
user_pref("browser.urlbar.filter.javascript", true);

// 0812: disable search and form history
   // Under Options>Privacy> if you set Firefox to "use custom settings" there will be a
   // setting called "remember search and form history".
   // You can clear formdata on exiting firefox (see section 2803)
   // user_pref("browser.formfill.enable", false);

// 0813: disable saving form data on secure websites - PRIVACY (shoulder surfers etc)
   // For convenience & functionality, this is best left at default true.
   // You can clear formdata on exiting firefox
   // user_pref("browser.formfill.saveHttpsForms", false);

// 0815: disable live search suggestions in the urlbar and toggle off the Opt-In prompt: FF41+
   // Setting: Options>Privacy>Location Bar>Related searches from the default search engine
// user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// 0816: disable browsing and download history
   // Under Options>Privacy> if you set Firefox to "use custom settings" there will be a
   // setting called "remember my browsing and download history"
   // You can clear history and downloads on exiting firefox (see section 2803)
   // user_pref("places.history.enabled", false);
// 0817: disable Jumplist (Windows7+)
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);

/*** 0900: PASSWORDS ***/
// 0901: disable saving passwords
   // Options>Security>Logins>Remember logins for sites
   // NOTE: this does not clear any passwords already saved
   // user_pref("signon.rememberSignons", false);
// 0902: use a master password (recommended if you save passwords)
   // There are no preferences for this. It is all handled internally.
   // https://support.mozilla.org/en-US/kb/use-master-password-protect-stored-logins
// 0903: set how often mozilla should ask for the master password
   // 0=the first time, 1=every time it's needed, 2=every n minutes (as per the next pref)
   // WARNING: the default is 0, author changed his settings
user_pref("security.ask_for_password", 2);
// 0904: how often in minutes mozilla should ask for the master password (see pref above)
   // in minutes, default is 30
user_pref("security.password_lifetime", 5);
// 0905: disable auto-filling username & password form fields - SECURITY
   // can leak in cross-site forms AND be spoofed
   // http://kb.mozillazine.org/Signon.autofillForms
   // password will still be auto-filled after a user name is manually entered
user_pref("signon.autofillForms", false);
// 0906: ignore websites' autocomplete="off" (FF30+)
user_pref("signon.storeWhenAutocompleteOff", true);

/*** 1000: CACHE ***/
// 1001: disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
// 1002: disable disk caching of SSL pages
   // http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
user_pref("browser.cache.disk_cache_ssl", false);
// 1003: disable memory cache as well IF you're REALLY paranoid
   // I haven't tried it, but I'm sure you'll take a performance/traffic hit
   // user_pref("browser.cache.memory.enable", false);
// 1004: disable offline cache
user_pref("browser.cache.offline.enable", false);
// 1005: disable storing extra session data 0=all 1=http-only 2=none
   // extra session data contains contents of forms, scrollbar positions, cookies and POST data
user_pref("browser.sessionstore.privacy_level", 2);
// 1006: disable pages being stored in memory. This is not the same as memory cache.
   // Visited pages are stored in memory in such a way that they don't have to be
   // re-parsed. This improves performance when pressing back/forward.
   // For the sake of completeness, this option is listed for the truly paranoid.
   // 0=none, -1=auto (that's minus 1), or any other positive integer
   // http://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers
   // user_pref("browser.sessionhistory.max_total_viewers", 0);

// 1007: disable the Session Restore service completely
   // WARNING: This also disables the the "Recently Closed Tabs" feature
   // It does not affect "Recently Closed Windows" or any history.
// user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_tabs_undo", 10);
// usesr_pref("browser.sessionstore.max_windows_undo", 0);
usesr_pref("browser.sessionstore.max_windows_undo", 10);

// 1008: IF you use session restore (see 1007 above), increasing the minimal interval between
   // two session save operations can help on older machines and some websites.
   // Default is 15000 (15 secs). Try 30000 (30sec), 60000 (1min) etc - your choice.
   // WARNING: This can also affect entries in the "Recently Closed Tabs" feature:
   // i.e the longer the interval the more chance a quick tab open/close won't be captured
   // this longer interval *MAY* affect history but I cannot replicate any history not recorded
user_pref("browser.sessionstore.interval", 15000);

// 1009: DNS cache and expiration time (default 400 and 60 - same as TBB)
   // user_pref("network.dnsCacheEntries", 400);
   // user_pref("network.dnsCacheExpiration", 60);
// 1010: disable randomized FF HTTP cache decay experiments
   // https://trac.torproject.org/projects/tor/ticket/13575
user_pref("browser.cache.frecency_experiment", -1);
// 1011: disable permissions manager from writing to disk (requires restart)
  // https://bugzilla.mozilla.org/show_bug.cgi?id=967812
  // user_pref("permissions.memory_only", true); // (hidden pref)
// 1012: disable service workers cache and cache storage
user_pref("dom.caches.enabled", false);

/*** 1200: SSL / OCSP / CERTS / ENCRYPTION ***/
// 1201: block rc4 fallback (default is now false as of at least FF45)
user_pref("security.tls.unrestricted_rc4_fallback", false);
// 1202: disable rc4 ciphers
   // https://trac.torproject.org/projects/tor/ticket/17369
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
// 1203: enable OCSP stapling
   // https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
user_pref("security.ssl.enable_ocsp_stapling", true);
// 1204: reject communication with servers using old SSL/TLS - vulnerable to a MiTM attack
   // https://wiki.mozilla.org/Security:Renegotiation
   // WARNING: leave commented out for now, as when set to true it breaks too many sites
   // user_pref("security.ssl.require_safe_negotiation", true);
// 1205: display warning (red padlock) for "broken security"
   // https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// 1206: require certificate revocation check through OCSP protocol
   // This leaks information about the sites you visit to the CA (cert authority)
   // It's a trade-off between security (checking) and privacy (leaking info to the CA)
   // WARNING: Since FF43 the default is now true. If set to true, this may/will cause some
   // site breakage. Some users have previously mentioned issues with youtube, microsoft etc
   // ...aaaand in FF44 the default reverted back to false. Make up your mind Mozilla!
   // user_pref("security.OCSP.require", true);
// 1207: query OCSP responder servers to confirm current validity of certificates (default=1)
   // 0=disable, 1=validate only certificates that specify an OCSP service URL
   // 2=enable and use values in security.OCSP.URL and security.OCSP.signing
user_pref("security.OCSP.enabled", 1);
// 1208: enforce strict pinning
   // https://trac.torproject.org/projects/tor/ticket/16206
   // PKP (public key pinning) 0-disabled 1=allow user MiTM (such as your antivirus), 2=strict
   // WARNING: If you rely on an AV (antivirus) to protect your web browsing
   // by inspecting ALL your web traffic, then leave at current default =1
user_pref("security.cert_pinning.enforcement_level", 2);
// 1209: disable TLS 1.0
   // 1=min version of TLS 1.0, 2-min version of TLS 1.1, 3=min version of TLS 1.2
   // WARNING: FF/chrome currently allow TLS 1.0 by default, so this is your call.
   // http://kb.mozillazine.org/Security.tls.version.*
   // https://www.ssl.com/how-to/turn-off-ssl-3-0-and-tls-1-0-in-your-browser/
   // user_pref("security.tls.version.min", 2);
// 1210: disable 1024-DH Encryption
   // https://www.eff.org/deeplinks/2015/10/how-to-protect-yourself-from-nsa-attacks-1024-bit-DH
   // WARNING: may break obscure sites, but not major sites, which should support ECDH over DHE
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
// 1211: disable SHA-1 (0=allow, 1=disallow)
   // Jan 1 2016 mozilla disabled SHA-1, on the 7th, they re-enabled it
   // 0 = allow SHA-1, 1 = forbid SHA-1, 2 = allow SHA-1 only if notBefore < 2016-01-01
   // WARNING: when disabled, some man-in-the-middle devices (eg  security scanners and antivirus
   // products, are failing to connect to HTTPS sites. SHA-1 will eventually become obsolete.
user_pref("security.pki.sha1_enforcement_level", 2);
// 1212: disable SSL session tracking (36+)
   // SSL session IDs speed up HTTPS connections (no need to renegotiate) and last for 48hrs.
   // Since the ID is unique, web servers can (and do) use it for tracking. If set to true,
   // this disables sending SSL3 Session IDs and TLS Session Tickets to prevent session tracking
   // WARNING: This will slow down TLS connections (personally I don't notice it at all)
   // https://tools.ietf.org/html/rfc5077
   // https://bugzilla.mozilla.org/show_bug.cgi?id=967977
user_pref("security.ssl.disable_session_identifiers", true); // (hidden pref)

/*** 1400: FONTS ***/
// 1401: disable websites downloading their own fonts (0=block, 1=allow)
   // This setting is under Options>Content>Font & Colors>Advanced>Allow pages to choose...
   // If you disallow fonts, this drastically limits/reduces font enumeration (by JS) which
   // is a high entropy fingerprinting vector.
   // WARNING: Disabling fonts can uglify the web a fair bit.
user_pref("browser.display.use_document_fonts", 0);
// 1402: allow icon fonts (glyphs) through FF41+
user_pref("gfx.downloadable_fonts.enabled", true);
// 1403: disable rendering of SVG OpenType fonts
   // https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// 1404: use more legible default fonts
   // WARNING: These are the author's settings, comment out if you do not require them
   // Been using this for over half a year, it really grows on you
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); // default Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial");  // default Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); // default Courier New
// 1405: disable woff2
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
// 1406: disable CSS Font Loading API
   // WARNING: Disabling fonts can uglify the web a fair bit.
user_pref("layout.css.font-loading-api.enabled", false);
// 1407: remove special underline handling for a few fonts which you will probably never use.
   // Any of these fonts on your system can be enumerated for fingerprinting. Requires restart.
   // http://kb.mozillazine.org/Font.blacklist.underline_offset
user_pref("font.blacklist.underline_offset", "");

/*** 1600: HEADERS / REFERERS
     Except for 1601, these can all be best handled by an extension to block/spoof
     all and then whitelist if needed, otherwise too much of the internet breaks.
     http://www.ghacks.net/2015/01/22/improve-online-privacy-by-controlling-referrer-information/ ***/
// 1601: disable referer from an SSL Website
user_pref("network.http.sendSecureXSiteReferrer", false);
// 1603: referer, WHEN to send
   // 0=never, 1=send only when links are clicked, 2=for links and images (default)
   // user_pref("network.http.sendRefererHeader", 2);
// 1604: referer, SPOOF or NOT (default=false)
   // user_pref("network.http.referer.spoofSource", false);
// 1605: referer, HOW to handle cross origins
   // 0=always (default), 1=only if base domains match, 2=only if hosts match
   // user_pref("network.http.referer.XOriginPolicy", 0);
// 1606: referer, WHAT to send
   // 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
   // user_pref("network.http.referer.trimmingPolicy", 0);

/*** 1800: PLUGINS ***/
// 1801: set default plugin state (i.e new plugins on discovery) to never activate
   // 0=disabled, 1=ask to activate, 2=active - you can override individual plugins
user_pref("plugin.default.state", 0);
user_pref("plugin.defaultXpi.state", 0);
// 1802: enable click to play and set to 0 minutes
user_pref("plugins.click_to_play", true);
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
// 1802a: make sure a plugin is in a certain state: 0=deactivated 1=ask 2=enabled (flash example)
   // you can just set all these plugin.state's via Add-ons>Plugins
   // NOTE: you can still over-ride individual sites eg youtube via site permissions
   // user_pref("plugin.state.flash", 1);
// 1804: disable plugins using external/untrusted scripts with XPCOM or XPConnect
user_pref("security.xpconnect.plugin.unrestricted", false);
// 1805: disable scanning for plugins
   // http://kb.mozillazine.org/Plugin_scanning
   // plid.all = whether to scan the directories specified in the Windows registry for PLIDs
   // includes: RealPlayer, Next-Generation Java Plug-In, Adobe Flash, Antivirus etc
   // WARNING: The author turned off plugins, try it one day. You are not missing much.
user_pref("plugin.scan.plid.all", false);
// 1806: Acrobat, Quicktime, WMP are handled separately from 1805 above.
   // The string refers to min version number allowed
user_pref("plugin.scan.Acrobat", "99999");
user_pref("plugin.scan.Quicktime", "99999");
user_pref("plugin.scan.WindowsMediaPlayer", "99999");
// 1807: disable auto-play of HTML5 media (including webms)
   // WARNING: This breaks youtube video playback (and probably other sites). If you block autoplay
   // by default, but occasionally would like to toggle it on, try the following addon
   // https://addons.mozilla.org/en-US/firefox/addon/autoplay-toggle
user_pref("media.autoplay.enabled", false);
// 1809: remove mozilla's plugin update URL (plugins are dying and I have NONE]
user_pref("plugins.update.url", "");
// 1820: disable all GMP (Gecko Media Plugins)
   // https://wiki.mozilla.org/GeckoMediaPlugins
   // user_pref("media.gmp-provider.enabled", false);
// 1830: disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false); // Options>Content>Play DRM Content
user_pref("browser.eme.ui.enabled", false); // hides "Play DRM Content" checkbox, restart required
user_pref("media.eme.apiVisible", false); // block websites detecting DRM is disabled
// 1840: disable the OpenH264 Video Codec by Cisco to "Never Activate"
   // This is the bundled codec used for video chat in WebRTC
   // Disable pings to the external update/download server
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url", "data:text/plain,");
// 1850: disable the Adobe EME "Primetime CDM" (Content Decryption Module)
   // https://trac.torproject.org/projects/tor/ticket/16285
user_pref("media.gmp-eme-adobe.enabled", false);
// 1851: delay play of videos until they're visible
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1180563
user_pref("media.block-play-until-visible", true);

/*** 2000: MEDIA / CAMERA / MIKE ***/
// 2001: disable WebRTC
   // https://www.privacytools.io/#webrtc
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
// 2001a: FF42+ pref which improves the WebRTC IP Leak issue, as opposed to completely
   // disabling WebRTC. You still need to enable WebRTC for this to be used.
   // https://wiki.mozilla.org/Media/WebRTC/Privacy
user_pref("media.peerconnection.ice.default_address_only", true);
// 2010: disable WebGL, force bare minimum feature set if used & disable WebGL extensions
   // http://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
   // https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// 2021: disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
// 2022: disable screensharing
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
// 2023: disable camera stuff
user_pref("camera.control.face_detection.enabled", false);

/*** 2200: UI MEDDLING
   see http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features ***/
// 2201: disable website control over right click context menu
   // WARNING: This will break some sites eg Dropbox, Google Docs?
   // user_pref("dom.event.contextmenu.enabled", false);
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

/*** 2400: DOM & JAVASCRIPT ***/
// 2402: disable website access to clipboard events/content
   // http://www.ghacks.net/2014/01/08/block-websites-reading-modifying-clipboard-contents-firefox/
   // WARNING: This will break some sites functionality such as pasting into Facebook
   // this applies to onCut, onCopy, onPaste events - i.e is you have to interact with
   // the website for it to look at the clipboard
user_pref("dom.event.clipboardevents.enabled", false);
// 2404: disable JS storing data permanently
   // This setting WAS under about:permissions>All Sites>Maintain Offline Storage
   // Note: about:permissions is no longer available since FF46 but you can still override
   // individual domains: use info icon in urlbar etc or right click on a web page>view page info
   // WARNING: If set as false (disabled), this WILL break some [old] add-ons
   // and DOES break a lot of sites' functionality
   // user_pref("dom.indexedDB.enabled", false);
// 2405: https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);
// 2410: disable User Timing API
   // https://trac.torproject.org/projects/tor/ticket/16336
user_pref("dom.enable_user_timing", false);
// 2411: disable resource/navigation timing
user_pref("dom.enable_resource_timing", false);
// 2412: disable timing attacks - javascript performance fingerprinting
   // https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.enable_performance", false);
// 2414: disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// 2415: max popups from a single non-click event - default is 20!
user_pref("dom.popup_maximum", 3);
// 2416: disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// 2418: disable full-screen API
   // This setting WAS under about:permissions>All Sites>Fullscreen
   // Note: about:permissions is no longer available since FF46 but you can still override
   // individual domains: use info icon in urlbar etc or right click on a web page>view page info
   // set to false=block, set to true=ask
   // NOTE: you can still override individual domains under site permissions
user_pref("full-screen-api.enabled", false);
// 2420: disable support for asm.js (http://asmjs.org/)
   // https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
   // https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
   // https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
user_pref("javascript.options.asmjs", false);
// 2421: in addition to 2420 above, these settings will help harden JS against exploits
   // such as CVE-2015-0817. They will reduce the performance of Javascript slightly.
   // https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
   // https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-0817
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
// 2430: disable web/push notifications
   // https://developer.mozilla.org/en-US/docs/Web/API/notification
   // NOTE: you can still override individual domains under site permissions (FF44+)
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
// 2431: disable push notifications (FF44+?)
   // web apps can receive messages pushed to them from a server, whether or
   // not the web app is in the foreground, or even currently loaded
   // https://developer.mozilla.org/en/docs/Web/API/Push_API
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.userAgentID", "");
// 2432: disable service workers API (disable for now)
   // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
   // http://www.ghacks.net/2016/03/02/manage-service-workers-in-firefox-and-chrome/
user_pref("dom.serviceWorkers.enabled", false);
// 2433: force FF to tell you if a website asks to store data for offline use
   // https://support.mozilla.org/en-US/questions/1098540
   // https://bugzilla.mozilla.org/show_bug.cgi?id=959985
user_pref("offline-apps.allow_by_default", false);
   // Options>Advanced>Network>Tell me when a website asks to store data for offline use
user_pref("browser.offline-apps.notify", true);
   // change size of warning quota for offline cache (default 51200)
   // Offline cache is only used in rare cases to store data locally. FF will store small amounts
   // (default <50MB) of data in the offline (application) cache without asking for permission.
   // user_pref("offline-apps.quota.warn", 51200);

/*** 2500: HARDWARE FINGERPRINTING ***/
// 2501: disable gamepad API - USB device ID enumeration
   // https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled", false);
// 2502: disable battery API
   // a Linux issue, that has now been fixed, however, it is still another metric
   // for fingerprinting [do you have a battery or not] used to raise entropy
   // http://techcrunch.com/2015/08/04/battery-attributes-can-be-used-to-track-web-users/
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1124127
user_pref("dom.battery.enabled", false);
// 2503: disable giving away network info
   // eg bluetooth, cellular, ethernet, wifi, wimax, other, mixed, unknown, none
   // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
   // https://wicg.github.io/netinfo/
   // https://bugzilla.mozilla.org/show_bug.cgi?id=960426
user_pref("dom.netinfo.enabled", false);
// 2504: disable virtual reality devices
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
// 2505: disable media device enumeration (FF29+)
   // NOTE: media.peerconnection.enabled should also be set to false (see 2001)
   // https://wiki.mozilla.org/Media/getUserMedia
   // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
user_pref("media.navigator.enabled", false);
// 2506: disable video statistics - JS performance fingerprinting
  // https://trac.torproject.org/projects/tor/ticket/15757
user_pref("media.video_stats.enabled", false);
// 2507: disable keyboard fingerprinting (FF38+) (physical keyboards)
   // The Keyboard API allows tracking the "read parameter" of pressed keys in forms on
   // web pages. These parameters vary between types of keyboard layouts such as QWERTY,
   // AZERTY, Dvorak, and between various languages, eg German vs English.
   // WARNING: Don't use if Android + physical keyboard
   // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
   // https://www.privacy-handbuch.de/handbuch_21v.htm
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// 2508: disable graphics fingerprinting (the loss of hardware acceleration is negligible)
   // These prefs are under Options>Advanced>General>Use hardware acceleration when available
   // NOTE: changing this option changes BOTH these preferences
   // https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration
   // WARNING: This changes text rendering (fonts will look different)
   // WARNING: If you watch a lot of video, this will impact performance
user_pref("gfx.direct2d.disabled", true);
user_pref("layers.acceleration.disabled", true);
// 2509: disable touch events
   // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
   // https://trac.torproject.org/projects/tor/ticket/10286
   // fingerprinting attack vector - leaks screen res & actual screen coordinates
   // WARNING: If you use touch eg Win8/10 Metro/Smartphone reset this to default
user_pref("dom.w3c_touch_events.enabled", 0);

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
// 2607: disable page thumbnail collection
   // look in profile/thumbnails directory - you may want to clean that out
user_pref("browser.pagethumbnails.capturing_disabled", true); // (hidden pref)
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
   // https://trac.torproject.org/projects/tor/ticket/15758
user_pref("device.sensors.enabled", false);
// 2614: disable SPDY as it can contain identifiers
   // SPDY will be deprecated in 2016
   // https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 10)
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
user_pref("network.http.spdy.enabled.deps", false);
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
// 2620: disable middle mouse click opening links from clipboard
   // https://trac.torproject.org/projects/tor/ticket/10089
   // http://kb.mozillazine.org/Middlemouse.contentLoadURL
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
// 2623: ensure Strict File Origin Policy on local files
   // The default is true. Included for completeness
   // http://kb.mozillazine.org/Security.fileuri.strict_origin_policy
user_pref("security.fileuri.strict_origin_policy", true);
// 2624: enforce Subresource Integrity (SRI) - FF43+
   // The default is true. Included for completeness
   // https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
   // https://wiki.mozilla.org/Security/Subresource_Integrity
user_pref("security.sri.enable", true);
// 2625: Applications [non Tor protocol] SHOULD generate an error
   // upon the use of .onion and SHOULD NOT perform a DNS lookup.
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
user_pref("network.dns.blockDotOnion", true);
// 2626: strip optional user agent token, default is false, included for completeness
   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Gecko_user_agent_string_reference
user_pref("general.useragent.compatMode.firefox", false);
// 2627: don't reveal buildID
   // navigator.buildID (see gecko.buildID in about:config) reveals build time
   // down to the second which defeats user agent spoofing and can compromise OS etc
   // https://bugzilla.mozilla.org/show_bug.cgi?id=583181
   // test: http://browserspy.dk/showprop.php (see buildID)
user_pref("general.buildID.override", "20100101"); // (hidden pref)
// 2628: disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
// 2629: disable remote JAR files being opened, regardless of content type
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1215235
user_pref("network.jar.block-remote-files", true);
// 2630: limit window.screen & CSS media queries providing large amounts of identifiable info.
   // POC: http://ip-check.info/?lang=en (screen, usable screen, and browser window will match)
   // https://bugzilla.mozilla.org/show_bug.cgi?id=418986
   // NOTE: does not cover everything yet - https://bugzilla.mozilla.org/show_bug.cgi?id=1216800
   // NOTE: this will probably make your values pretty unique until you resize or snap the
   // inner window width + height into standard/common resolutions (mine is at 1280x800)
   // To set a size, open a XUL (chrome) page (such as about:config) which is at 100% zoom, hit
   // Shift+F4 to open the scratchpad, type window.resizeTo(1280,800), hit Ctrl+R to run. Test
   // your window size, do some math, resize to allow for all the non inner window elements
   // Test: http://browserspy.dk/screen.php
   // Common resolutions: http://www.rapidtables.com/web/dev/screen-resolution-statistics.htm
   // NOTE: This also spoofs screen orientation - https://bugzilla.mozilla.org/show_bug.cgi?id=1281949
   // NOTE: This will also SOON hide the contents of navigator.plugins and navigator.mimeTypes
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1281963
user_pref("privacy.resistFingerprinting", true); // (hidden pref)
// 2650: start the browser in e10s mode (48+)
   // After restarting the browser, you can check whether it's enabled by visiting
   // about:support and checking that "Multiprocess Windows" = 1
   // use force-enable and extensions.e10sblocksenabling if you have add-ons
   // user_pref("browser.tabs.remote.autostart", true);
   // user_pref("browser.tabs.remote.force-enable", true); // (hidden pref)
   // user_pref("extensions.e10sBlocksEnabling", false);

/*** 2700: COOKIES & DOM STORAGE ***/
// 2701: disable cookies on all sites
   // you can set exceptions under site permissions or use an extension (eg Cookie Controller)
   // 0=allow all 1=allow same host 2=disallow all 3=allow 3rd party if it already set a cookie
user_pref("network.cookie.cookieBehavior", 2);
// 2702: ensure that third-party cookies (if enabled, see above pref) are session-only
   // https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
   // http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly
user_pref("network.cookie.thirdparty.sessionOnly", true);
// 2703: set cookie lifetime policy
   // 0=until they expire (default), 2=until you close firefox, 3=for n days (see next pref)
   // If you use custom settings for History in Options, this is the setting under
   // Privacy>Accept cookies from sites>Keep until
   // user_pref("network.cookie.lifetimePolicy", 0);
// 2704: set cookie lifetime in days (see above pref) - default is 90 days
   // user_pref("network.cookie.lifetime.days", 90);
// 2705: disable dom storage
   // WARNING: this will break a LOT of sites' functionality.
   // You are better off using an extension for more granular control
   // user_pref("dom.storage.enabled", false);

/*** 2800: SHUTDOWN ***/
// 2802: enable FF to clear stuff on close
   // This setting is under Options>Privacy>Clear history when firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// 2803: what to clear on shutdown
   // These settings are under Options>Privacy>Clear history when firefox closes>Settings
   // These are the settings of the author of this user.js, chose your own
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
// user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", false); // active logins
user_pref("privacy.clearOnShutdown.siteSettings", false);
// 2804: (to match above) - auto selection of items to delete with Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
// user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.history", false);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.passwords", false);
user_pref("privacy.cpd.sessions", false);
user_pref("privacy.cpd.siteSettings", false);

/*** 3000: PERSONAL SETTINGS
     Settings that are handy to migrate and/or are not in the Options interface. Users
     can put their own non-security/privacy/fingerprinting/tracking stuff here ***/
// 3001: disable annoying warnings
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
// 3001a: disable warning when a domain requests full screen
   // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
   // user_pref("full-screen-api.warning.delay", 0);
   // user_pref("full-screen-api.warning.timeout", 0);
// 3002: disable closing browser with last tab
// user_pref("browser.tabs.closeWindowWithLastTab", false);
// 3004: disable backspace (0 = previous page, 1 = scroll up, 2 = do nothing)
user_pref("browser.backspace_action", 2);
// 3005: disable autocopy default (use extensions autocopy 2 & copy plain text 2)
// user_pref("clipboard.autocopy", false);
user_pref("clipboard.autocopy", true);
// 3006: disable enforced addon signing: FF43 turned on signatures required,
   // you can disable this to buy some time for any addons you need to replace
   // or get signed. It will be deprecated in FF48 most likely, but will still
   // be retained for Aurora/Dev-Edition
user_pref("xpinstall.signatures.required", false);
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
// 3010: enable ctrl-tab previews
// user_pref("browser.ctrlTab.previews", true);
user_pref("browser.ctrlTab.previews", false);
// 3011: don't open "page/selection source" in a tab. The window used instead is cleaner
   // and easier to use and move around (eg developers/multi-screen).
user_pref("view_source.tab", false);
// 3012: spellchecking: 0=none, 1-multi-line controls, 2=multi-line & single-line controls
user_pref("layout.spellcheckDefault", 1);
// 3013: disable automatic "Work Offline" status
   // https://bugzilla.mozilla.org/show_bug.cgi?id=620472
   // https://developer.mozilla.org/en-US/docs/Online_and_offline_events
user_pref("network.manage-offline-status", false);
// 3014: enable webm
user_pref("media.mediasource.webm.enabled", true);
// 3015: disable tab animation, speed things up a little
user_pref("browser.tabs.animate", false);
// 3016: disable fullscreeen animation. Test using F11.
   // Animation is smother but is annoyingly slow, while no animation can be a startling
user_pref("browser.fullscreen.animate", false);
// 3017: submenu in milliseconds. 0=instant while a small number allows
   // a mouse pass over menu items without any submenus alarmingly shooting out
user_pref("ui.submenuDelay", 75); // (hidden pref)
// 3018: maximum number of daily bookmark backups to keep (default is 15)
user_pref("browser.bookmarks.max_backups", 2);
// 3019: bypass all (external) proxy(s) settings, connect directly to the internet
   // This can be found under Options>Advanced>Network>Connection Settings
   // It is advised to set this via Options where many other settings may apply
   // 0=no proxy, 4=auto-detect, 5=use system proxy (default), 1=manual proxy settings
   // WARNING: Disable this preference if it's not what you need!
user_pref("network.proxy.type", 0);
// 3020: FYI: urlbar click behaviour (with defaults)
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
// 3021: FYI: tab behaviours (with defaults)
   // open links in a new tab immediately to the right of parent tab, not far right
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
   // switch to the parent tab (if it has one) on close, rather than to the adjacent right tab if
   // it exists or to the adjacent left tab if it doesn't. Note: requires browser.link.open_newwindow
   // set to 3 (see pref 3007). Note: does not apply to middle-click or Ctrl-clicking links.
user_pref("browser.tabs.selectOwnerOnClose", true);
   // Options>General>When I open a link in a new tab, switch to it immediately
   // default is unchecked = DON'T switch to ti = true
user_pref("browser.tabs.loadInBackground", true);
   // set behavior of pages normally meant to open in a new window (such as target="_blank"
   // or from an external program), but that have instead been loaded in a new tab.
   // true: load the new tab in the background, leaving focus on the current tab
   // false: load the new tab in the foreground, taking the focus from the current tab.
user_pref("browser.tabs.loadDivertedInBackground", false);

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
// 3204: (v25.6+) Controls whether to completely ignore "autocomplete=off" on login fields
   // user_pref("signon.ignoreAutocomplete", false);
// 3205: (v26.0+) read Moonchild's description on the palemoon forum thread linked above
   // user_pref("dom.disable_beforeunload", true);

/*** 9998: DEPRECATED
     Personally confirmed by resetting as well as via documentation and DXR searches.
     Note: numbers may get re-used ***/
// 2607: (23+) disable page thumbnails, it was around v23, not 100% sure when
   // this pref was replaced with browser.pagethumbnails.capturing_disabled
   // user_pref("pageThumbs.enabled", false);
// 2408: (31+) disable network API - fingerprinting vector
   // user_pref("dom.network.enabled", false);
// 2620: (35+) disable WebSockets
   // https://developer.mozilla.org/en-US/Firefox/Releases/35
   // user_pref("network.websocket.enabled", false);
// 2023: (37+) disable camera autofocus callback (was in 36, not in 37)
   // Not part of any specification, the API will be superceded by the WebRTC Capture
   // and Stream API ( http://w3c.github.io/mediacapture-main/getusermedia.html )
   // https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/API/CameraControl/
   // user_pref("camera.control.autofocus_moving_callback.enabled", false);
// 1804: (41+) disable plugin enumeration
   // user_pref("plugins.enumerable_names", "");
// 0420: (42+) disable tracking protection
   // this particular pref was never in stable
   // labelled v42+ because that's when tracking protection landed
   // user_pref("browser.polaris.enabled", false);
// 2803: (42+) what to clear on shutdown
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1102184#c23
   // user_pref("privacy.clearOnShutdown.passwords", false);
// 0411: (43+) disable safebrowsing urls & download
   // user_pref("browser.safebrowsing.gethashURL", "");
   // user_pref("browser.safebrowsing.malware.reportURL", "");
   // user_pref("browser.safebrowsing.provider.google.appRepURL", "");
   // user_pref("browser.safebrowsing.reportErrorURL", "");
   // user_pref("browser.safebrowsing.reportGenericURL", "");
   // user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
   // user_pref("browser.safebrowsing.reportMalwareURL", "");
   // user_pref("browser.safebrowsing.reportURL", "");
   // user_pref("browser.safebrowsing.updateURL", "");
// 0420: (43+) disable tracking protection. FF43+ URLs are now part of safebrowsing
   // https://wiki.mozilla.org/Security/Tracking_protection (look under Prefs)
   // NOTE: getupdateURL = WRONG / never existed. updateURL = CORRECT and has been added FYI
   // user_pref("browser.trackingprotection.gethashURL", "");
   // user_pref("browser.trackingprotection.getupdateURL", "");
   // user_pref("browser.trackingprotection.updateURL", "");
// 1803: (43+) remove plugin finder service
   // http://kb.mozillazine.org/Pfs.datasource.url
   // mozilla are dropping NPAPI anyway [except flash/java/silverlight, i think that's all]
   // user_pref("pfs.datasource.url", "");
// 2403: (43+) disable scripts changing images - test link below
   // http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2
   // WARNING: will break some sites such as google maps and a lot of web apps
   // user_pref("dom.disable_image_src_set", true);
// 2615: (43+) disable http2 for now as well
   // user_pref("network.http.spdy.enabled.http2draft", false);
// 3001a: (43+) disable warning when a domain requests full screen
   // replaced by setting full-screen-api.warning.timeout to zero
   // user_pref("full-screen-api.approval-required", false);
// 3003: (43+) disable new search panel UI [Classic Theme Restorer can restore the old search]
   // user_pref("browser.search.showOneOffButtons", false);
// 1201: (44+) block rc4 whitelist
   // https://developer.mozilla.org/en-US/Firefox/Releases/44#Security
   // user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
// 2417: (44+) disable SharedWorkers, which allow the exchange of data between iFrames that
   // are open in different tabs, even if the sites do not belong to the same domain.
   // https://www.torproject.org/projects/torbrowser/design/#identifier-linkability (no. 8)
   // https://bugs.torproject.org/15562 - SharedWorker violates first party isolation
   // is used in FF 45and 46 code once, to set it for a test
   // user_pref("dom.workers.sharedWorkers.enabled", false);
// 1005: (45+) disable deferred level of storing extra session data 0=all 1=http-only 2=none
   // user_pref("browser.sessionstore.privacy_level_deferred", 2);
// 1602: (45+?) DNT HTTP header - moved to deprecated (Apr 2016)
   // Note: Option still exists in "Options>Privacy>Tracking>Request that sites not track you"
   // 1: Tested as legacy at https://panopticlick.eff.org/ 2: Most advertisers don't respect it.
   // 3. There are better ways to block/limit tracking and 4. It raised entropy when it did work.
   // http://kb.mozillazine.org/Privacy.donottrackheader.value (pref required since FF21+)
   // user_pref("privacy.donottrackheader.enabled", true);
   // user_pref("privacy.donottrackheader.value", 1); // (hidden pref)
// 0373: (46+) disable "Pocket"
   // FF46 replaced these with extensions.pocket.*
   // user_pref("browser.pocket.enabled", false);
   // user_pref("browser.pocket.api", "");
   // user_pref("browser.pocket.site", "");
   // user_pref("browser.pocket.oAuthConsumerKey", "");

// END: internal custom pref to test for syntax errors
user_pref("pants.testing", 9999);

/*** 9999: TO INVESTIGATE ***/
// disable server side events
   // https://developer.mozilla.org/en-US/docs/Server-sent_events
   // SSE (server-sent events) is part of HTML5 (EventSource API) and data
   // pushed by the server is initiated by the client.
   // user_pref("dom.server-events.enabled", false);
// disable workers API
   // https://developer.mozilla.org/en-US/docs/Web/API/Worker
   // user_pref("dom.workers.enabled", false);
// stuff to follow up on
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1070752
// keep an eye on extensions.systemAddon* prefs
// user_pref("media.webaudio.enabled", false);
// user_pref("media.gmp-manager.buildID", "20000101000000");
// resource://URIs leak
   // https://trac.torproject.org/projects/tor/ticket/8725
   // https://bugzilla.mozilla.org/show_bug.cgi?id=863246
   // addon below might break some extensions that rely on resource://URIs
   // https://addons.mozilla.org/en-US/firefox/addon/no-resource-uri-leak/
   // test: https://www.browserleaks.com/firefox
// 1400's: expose whitelisted system fonts only
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1121643
// 1400's: prevent local font enumeration
   // https://bugzilla.mozilla.org/show_bug.cgi?id=732096
// 1400's: disable SVG
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1216893
// 1400's: disable MathML
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1173199
   // user_pref("mathml.disabled", true);
// 2400's: reduce precision of time exposed by javascript
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1217238
// 2600's: disable "open with" in download dialog (FF48? resolved but not landed yet)
   // This is very useful to enable when the browser is sandboxed (e.g. via AppArmor)
   // in such a way that it is forbidden to run external applications.
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1281959
   // user_pref("browser.download.forbid_open_with", true);
// 2600's: add first party isolation pref and OriginAttribute
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1260931
   // user_pref("privacy.firstparty.isolate", true);
// 2600's: isolate favicons to 1st party
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1264564
// 2600's: isolate DOM storage to 1st party
   // https://bugzilla.mozilla.org/show_bug.cgi?id=1264564

/**- APPENDIX A: TEST SITES
   Here is an exhaustive list of various websites in which to test your browser. You should enable
   JS on these sites for the tests to present a worse-case scenario. In reality, you should control
   JS and XSS (cross site scripting) on sites with add-ons such as NoScript, uMatrix, uBlock Origin,
   among others, to reduce the possibility of fingerprinting attacks.
   url: http://www.ghacks.net/2015/12/28/the-ultimate-online-privacy-test-resource-list/

//* 01: Fingerprinting
   Panopticlick      https://panopticlick.eff.org/
   JoDonym           http://ip-check.info/?lang=en
   Am I Unique?      https://amiunique.org/
//* 02: Multiple Tests [single page]
   Whoer             https://whoer.net/
   5who              http://5who.net/?type=extend
   IP/DNS Leak       https://ipleak.net/
   IP Duh            http://ipduh.com/anonymity-check/
//* 03: Multiple Tests [multi-page]
   BrowserSpy.dk     http://browserspy.dk/
   BrowserLeaks      https://www.browserleaks.com/
   PC Flank          http://www.pcflank.com/index.htm
//* 04: Encryption / Ciphers / SSL/TLS
   BadSSL            https://badssl.com/
   DCSec             https://cc.dcsec.uni-hannover.de/
   Qualys SSL Labs   https://www.ssllabs.com/ssltest/viewMyClient.html
   Fortify           https://www.fortify.net/sslcheck.html
   How's My SSL      https://www.howsmyssl.com/
   RC4               https://rc4.io/
   Heartbleed        https://filippo.io/Heartbleed/
   Freak Attack      https://freakattack.com/clienttest.html
   Logjam            https://weakdh.org/
//* 05: Other
   Battery           https://pstadler.sh/battery.js/
   DNS Leak          https://www.dnsleaktest.com/
   DNS Spoofability  https://www.grc.com/dns/dns.htm
   Evercookie        http://samy.pl/evercookie/
   Firefox Addons    http://thehackerblog.com/addon_scanner/
   localStorage      http://www.filldisk.com/
   HSTS Supercookie  http://www.radicalresearch.co.uk/lab/hstssupercookies
   HSTS [sniffly]    https://zyan.scripts.mit.edu/sniffly/
   Popup Killer      http://www.kephyr.com/popupkillertest/index.html
   Popup Test        http://www.popuptest.com/
   Redirects         https://jigsaw.w3.org/HTTP/300/Overview.html
   Referer Headers   https://www.darklaunch.com/tools/test-referer
   Resouce://URI     https://www.browserleaks.com/firefox
   WebRTC IP Leak    https://www.privacytools.io/webrtc.html
***/

/**-/**- APPENDIX B: FIREFOX ADDONS
   Maybe next time :)
***/

