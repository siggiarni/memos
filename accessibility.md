# Aðgengi að vefsvæðum

Collection of notes about assistive technologies and webdevelopement

## Grunnatriði

Gott skipulag á vef skilar sér sjálfkrafa sem gott aðgengi fyrir stoðtæki.
Rökrétt uppröðun HTML eininga gerir notendum stoðtækja mögulegt að lesa- og skilja vefsíður.

> For web content to be accessible, it must convey semantic information about its structure and behavior to assistive devices. WAI-ARIA exists to convey the semantics when native HTML isn’t enough.  
> http://vanseodesign.com/web-design/wai-aria-introduction/

Þegar stoðtæki opnar vefsíðu, þá les það DOM-tré vefsins í gegnum þar til gerðan Accessibility API sem tilkynnir stoðtækjunum hvaða hlutverki HTML-ið gegnir og hver staðan á því sé.
T.d. hvað eru mörg `LI` í `UL`-lista, hversu djúpt fyrirsögnin er o.s.fr.

> Semantic html is using html to reinforce structural meaning. It’s about using tags, class names, and ids that reinforce the meaning of the content within the tags.   
> http://vanseodesign.com/web-design/semantic-html/

## Accessibility API

> Operating systems and other platforms provide a set of interfaces that expose information about objects and events to assistive technologies. Assistive technologies use these interfaces to get information about and interact with those widgets.   
> http://rawgit.com/w3c/aria/master/html-aam/html-aam.html#dfn-accessibility-api

Þetta er líka ástæðan fyrir hvers vegna það er mikilvægt að nota native HTML eininga en ekki stíla hlutlaust HTML eins og t.d. `DIV` sem `H1`.   
Vegna þess að Accessibility API veit hvað `H1` er en það þarf að útskýra sérstaklega fyrir API-inum hvað `DIV` sem lítur út eins og `H1` er.

## Grunnreglur W3C

W3C mæla með [5 grunnreglum](http://w3c.github.io/aria-in-html/#notes2) þegar kemur að aðgengi vefsvæða:

  1. If you can use a native HTML element or attribute with the semantics and behaviour you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so. [Link](http://w3c.github.io/aria-in-html/#rule1).
  2. Do not change native semantics, unless you really have to. [Link](http://w3c.github.io/aria-in-html/#rule2).
  3. All interactive ARIA controls must be usable with the keyboard. [Link](http://w3c.github.io/aria-in-html/#rule3).
  4. Do not use `role="presentation"` or `aria-hidden="true"` on a visible focusable element. [Link](http://w3c.github.io/aria-in-html/#rule4).
  5. All interactive elements must have an accessible name. [Link](http://w3c.github.io/aria-in-html/#rule5).

## Hlutir sem er gott að hafa í huga

### 1. Native HTML

Nota native HTML element þegar það er í boði.

* T.d. er miklu betra að nota `BUTTON` element-ið í staðin fyrir að útfæra `DIV` sem takka.
* Stoðtæki skilja hvað `UL` `LI` listi er, en `SPAN` listi rennur saman í eina klessu af texta.

### 2. Headings

Passa að heading séu í skynsamri röð. Stoðtæki nýta sér headings til að fara yfir efni á síðum og gefa til kynna hvernig uppröðun síðunnar er.

Stoðtæki eiga einnig auðveldara með að flakka á milli eininga sem eru í skiljanlegri röð. T.d. er rökrétt að fara frá aðalfyrirsögn í `H1` niður í undirfyrirsögn í `H2`.Ef sama undirfyrirsögnin væri `H3`, þá væri eins og maður hefði hlaupið yfir `H2`.   
Þetta ruglar fólk í ríminu.

### 3. ALT texti

Tómt alt attribute lætur stoðtæki vita að myndin er til skrauts og að því sé óhætt að hlaupa yfir hana.

* `alt=""` is a indication to screen reader software that the `IMG` is decorative and can be ignored.
* Absence of an alt attribute results, in some screen reading screen reader software, not conveying the `IMG` to users.

> https://www.paciellogroup.com/blog/2016/02/short-note-on-use-of-alt-and-the-title-attribute/

### 4. Tab index

Er hægt að fara um viðmótið frá A til Ö með lyklaborði?
Þetta er mikilvægt til þess að ARIA merkingar virki sem skildi.

Tabindex: Ekki eiga við tabindex-inn nema til þessa að gera hluti __"virka"__. Þ.e.a.s. aðgengilega með lyklaborðinu.
  Sjá grein um tabindex.
  
**Vantar hlekka á grein um tabindex**.



### 5. Form labels

Label með form elements.

  * Label með element er öruggasta leiðin til að útskýra hvað form element-ið gerir.
  * Placeholder texti er ekki nóg og getur jafnvel ruglað fólk í ríminu. Það er heldur ekki hægt að reiða sig á að stoðtækið lesi placeholder textann.
  * Ef hönnun er án LABEL, þá þarf samt að hafa það með visually hidden stíl.

---

## Roles

## Content organisation with HTML5

* The order in which the elements are organised and the region types used is based on your content organisation.
* If you content organisation is such that a region is nested within another region, go for it.

> https://www.paciellogroup.com/blog/2015/09/easy-content-organisation-with-html5/

> Mynd vantar

**`<header></header>`**   
> The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids.   
> http://w3c.github.io/html/sections.html#the-header-element

**`<nav></nav>`**   
> The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.   
> http://w3c.github.io/html/sections.html#the-nav-element

**`<main><main>`**   
> The `main` element represents the main content of the body of a document or application.   

> Authors must **not** include the `main` element as a descendant of an `article`, `aside`, `footer`, `header` or `nav` element.   
> http://w3c.github.io/html/grouping-content.html#the-main-element

> The `main` element is an exact analogue of ARIA’s `role="main"`, and is designed to show screenreaders and assistive technologies exactly where main content begins.   
> http://www.brucelawson.co.uk/2013/the-main-element/

**`<aside></aside>`**   
> The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.   
> http://w3c.github.io/html/sections.html#the-aside-element

**`<footer></footer>`**   
> The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.   
> http://w3c.github.io/html/sections.html#the-footer-element   



## ARIA

Joe Dolson: ARIA – Roles, States and Properties

> http://wordpress.tv/2016/01/22/joe-dolson-aria-roles-states-and-properties/


http://tink.uk/using-the-aria-owns-attribute/

https://dev.opera.com/articles/ux-accessibility-aria-label/

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

https://www.w3.org/TR/WCAG20-TECHS/

https://www.w3.org/TR/html-aria/

---

## HTML

HTML5 Accessibility Chops: section elements

  > https://www.paciellogroup.com/blog/2011/03/html5-accessibility-chops-section-elements/


https://dequeuniversity.com/library/

http://w3c.github.io/elements-of-html/

https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html

https://www.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/


---

## Stoðtæki

- [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) fyrir Windows.
- [NVDA](http://www.nvaccess.org) fyrir Windows.
- Voice Over fyrir [Mac OS](http://www.apple.com/accessibility/osx/voiceover) og [iOS](http://www.apple.com/accessibility/ios/voiceover).
- [Talkback](https://support.google.com/accessibility/android/answer/6283677) fyrir Android.

[Basic screen reader commands for accessibility testing](https://www.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

[Aural UI of the Elements of HTML](https://thepaciellogroup.github.io/AT-browser-tests/)   
How HTML elements are supported by screen readers

---

## DEV tól f. chrome
 
**[Accessibility Developer Tools](https://chrome.google.com/webstore/detail/fpkknkljclfencbdbgkenhalefipecmb)**   
Accessibility audit and element properties.

**[WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/jbbplnpkjmmeebjpijfedlgcdilocofh)**   
Adds WAVE (Web Accessibility Evaluation Tool) to Google Chrome.

**[ARIA Validator](https://chrome.google.com/webstore/detail/aria-validator/oigghlanfjgnkcndchmnlnmaojahnjoc)**   
Scans page for WAI-ARIA implementation issues.

**[ChromeVox](https://chrome.google.com/webstore/detail/kgejglhpjiefppelpmljglcjbhoiplfn)**   
ChromeVox - Giving Voice to Chrome

**[ChromeShades](https://chrome.google.com/webstore/detail/hlklboladblmgfpkenhlgbhoojdlfoao)**   
ChromeShades - find accessibility problems and experience the web without sight.

**[Color Contrast Analyzer](https://chrome.google.com/webstore/detail/dagdlcijhfbmgkjokkjicnnfimlebcll)**   
Analyze a web page or portion of a web page for conformance with WCAG 2.0 Color Contrast requirements.

## More dev tools

**[tota11y](https://khan.github.io/tota11y/)**   
tota11y helps visualize how your site performs with assistive technologies.

**[aXe by Deque](http://www.deque.com/products/axe/)**   
aXe is a portable JavaScript library that executes automated accessibility testing inside your testing framework or browser of choice.

**[Diagnostic.css](http://www.karlgroves.com/2013/09/07/diagnostic-css-super-quick-web-accessibility-testing/)**   
Diagnostic.css is a CSS file which, when applied to a web page, will highlight accessibility errors in the page.

**[Landmarks](https://github.com/matatk/landmarks)**   
A Firefox extension that enables keyboard navigation of WAI-ARIA landmarks

**[React A11y](https://github.com/reactjs/react-a11y)**   
Warns about potential accessibility issues with your React elements.

**[IBM Web accessibility checklist](http://www-03.ibm.com/able/guidelines/web/accessweb.html)**   
Use this checklist for Web sites and Web applications.






---






https://www.marcozehe.de/2015/12/14/the-web-accessibility-basics/

https://blogs.adobe.com/dreamweaver/2015/09/making-your-website-design-accessible.html

https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b#.y5lpqhi98

http://www.karlgroves.com/2015/08/16/what-happens-when-you-get-sued-for-your-inaccessible-website/

https://www.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/

https://www.paciellogroup.com/blog/2015/10/notes-on-use-of-multiple-aria-role-attribute-values/

https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/

http://adrianroselli.com/2016/01/links-buttons-submits-and-divs-oh-hell.html

http://bitsofco.de/the-accessibility-cheatsheet/

http://thatjdanisso.cool/a11y/focus-vs-hover/

http://maxdesign.com.au/jobs/sample-accessibility/index.html






# ARIA Memo

## aria-labelledby and describedby

By default, assistive technologies do not relay hidden information, but an author can explicitly override that and include hidden text as part of the accessible name or accessible description by using aria-labelledby or aria-describedby.

Via [Short note on aria-labelledby and aria-describedby](http://www.paciellogroup.com/blog/2015/05/short-note-on-aria-labelledby-and-aria-describedby/)



# Webdev memo

## A11y notes

### Required vs. Aria-required

The required attribute and aria-required are not completely equivalent.

### Required attribute

Triggers automatic validation and built-in form submission error messages in browsers – which are currently not 100% accessible

### Aria-required

while the latter only signals that a form field is required to assistive technologies (without any further validation/error bubbles being triggered in browsers). So, the decision is a conscious one. This is a nice example of how accessibility is more than simple adherence to technical standards. Accessible development in the real world requires nuanced, pragmatic decisions on when to apply certain technologies, and when to look for alternatives.

http://www.paciellogroup.com/blog/2015/02/is-accessibility-a-supply-or-demand-issue/#comment-2122

### Empty image alt's

alt="" is a standardised indication to screen reader software that the <img> is decorative and can be safely ignored.

https://www.paciellogroup.com/blog/2016/02/short-note-on-use-of-alt-and-the-title-attribute/

### aria-hidden="true" and role="presentation"

aria-hidden: Indicates that the element and all of its descendants are not visible or perceivable (i.e.presentable to users in ways they can sense) to any user as implemented by the author.

presentation (role): An element whose implicit native role semantics will not be mapped to the accessibility API.

The attribute role="presentation" should only be used in very limited circumstances, and only when it is desirable to suppress the role of an element for screen reader users.

### aria-haspopup="true"

A popup is generally presented visually as a group of items that appear to be on top of the main page content

The attribute aria-haspopup should only be used on triggering elements that open menus. Otherwise, the presence of the attribute will only misrepresent the popup type to screen reader users.

When role="presentation" is added to the markup of an element, it manually overrides this role mapping in the browser, and prevents the screen reader from identifying or even interacting with the element in the expected manner.

--- 

http://slides.com/heydon/getting-nowhere-with-css-best-practices/#/41

* aria-busy
* aria-grabbed
* aria-invalid
* aria-checked
* aria-disabled
* aria-expanded
* aria-hidden
* aria-invalid
* aria-pressed
* aria-selected


