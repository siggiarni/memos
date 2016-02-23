# Aðgengi að vefsvæðum


## Grunnatriði

Gott skipulag á vef skilar sér sjálfkrafa sem gott aðgengi fyrir stoðtæki.
Rökrétt uppröðun HTML eininga gerir notendum stoðtækja mögulegt að lesa- og skilja vefsíður.

> For web content to be accessible, it must convey semantic information about its structure and behavior to assistive devices. WAI-ARIA exists to convey the semantics when native HTML isn’t enough.  
> http://vanseodesign.com/web-design/wai-aria-introduction/

Þegar stoðtæki opnar vefsíðu, þá les það DOM-tré vefsins í gegnum þar til gerðan Accessibility API sem tilkynnir stoðtækjunum hvaða hlutverki HTML-ið gegnir og hver staðan á því sé.
T.d. hvað sé margir hlutir í UL-lista, hversu djúpt fyrirsögnin er o.s.fr.


## Accessibility API

> Operating systems and other platforms provide a set of interfaces that expose information about objects and events to assistive technologies. Assistive technologies use these interfaces to get information about and interact with those widgets.  
> http://rawgit.com/w3c/aria/master/html-aam/html-aam.html#dfn-accessibility-api

Þetta er líka ástæðan fyrir hvers vegna það er mikilvægt að nota native HTML eininga en ekki stíla hlutlaust HTML eins og t.d. DIV sem Heading 1. Vegna þess að Accessibility API veit hvað H1 er en það þarf að útskýra sérstaklega fyrir API-inum hvað DIV sem lítur út eins og heading er.


## Grunnreglur W3C

W3C mæla með 5 grunnreglum þegar kemur að aðgengi vefsvæða:

  1. If you can use a native HTML element or attribute with the semantics and behaviour you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.
  2. Do not change native semantics, unless you really have to.
  3. All interactive ARIA controls must be usable with the keyboard.
  4. Do not use role="presentation" or aria-hidden="true" on a visible focusable element .
  5. All interactive elements must have an accessible name.

Sjá: Notes on Using ARIA in HTML

> http://w3c.github.io/aria-in-html/


## Hlutir sem er gott að hafa í huga

Native HTML element: Nota native HTML element þegar það er í boði.

* T.d. er miklu betra að nota BUTTON element-ið í staðin fyrir að útfæra DIV sem takka.
* Stoðtæki skilja hvað UL LI listi er, en SPAN listi rennur saman í eina klessu af texta.

Headings: Passa að heading séu í skynsamri röð. Stoðtæki nýta sér headings til að fara yfir efni á síðum og gefa til kynna hvernig uppröðun síðunnar er.

Stoðtæki eiga einnig auðveldara með að flakka á milli eininga sem eru í skiljanlegri röð. T.d. er rökrétt að fara frá aðalfyrirsögn í H1 niður í undirfyrirsögn í H2.Ef sama undirfyrirsögnin væri H3, þá væri eins og maður hefði hlaupið yfir H2.
Þetta ruglar fólk í ríminu.

ALT texti: Tómt alt attribute lætur stoðtæki vita að myndin er til skrauts og að því sé óhætt að hlaupa yfir hana.

* alt="" is a indication to screen reader software that the <img> is decorative and can be ignored.
* Absence of an alt attribute results, in some screen reading screen reader software, not conveying the <img> to users.

> https://www.paciellogroup.com/blog/2016/02/short-note-on-use-of-alt-and-the-title-attribute/


Er hægt að fara um viðmótið frá A til Ö með lyklaborði?

* Þetta er mikilvægt til þess að ARIA merkingar virki sem skildi.

Basic screen reader commands for accessibility testing

> https://www.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/

Label með form elements.

  * Label með element er öruggasta leiðin til að útskýra hvað form element-ið gerir.
  * Placeholder texti er ekki nóg og getur jafnvel ruglað fólk í ríminu. Það er heldur ekki hægt að reiða sig á að stoðtækið lesi placeholder textann.
  * Ef hönnun er án LABEL, þá þarf samt að hafa það með visually hidden stíl.

Tabindex: Ekki eiga við tabindex-inn nema til þessa að gera hluti "virka". Þ.e.a.s. aðgengilega með lyklaborðinu.
  Sjá grein um tabindex.


---

## Roles


## Content organisation with HTML5

* The order in which the elements are organised and the region types used is based on your content organisation.
* If you content organisation is such that a region is nested within another region, go for it.

> https://www.paciellogroup.com/blog/2015/09/easy-content-organisation-with-html5/

> Mynd

`<header></header>`
`<nav></nav>`
`<main><main>`
`<aside></aside>`
`<footer></footer>`

---

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

- JAWS. Windows. (hlekkur)
- NVDA. Windows. (hlekkur)
- Voice Over. Mac OS og iOS. (hlekkur)
- Talkback. Android. (hlekkur)

---

## DEV tól f. chrome
 
Accessibility Developer Tools

  Accessibility audit and element properties.
  > https://chrome.google.com/webstore/detail/fpkknkljclfencbdbgkenhalefipecmb


WAVE Evaluation Tool

  Adds WAVE (Web Accessibility Evaluation Tool) to Google Chrome.
  > https://chrome.google.com/webstore/detail/jbbplnpkjmmeebjpijfedlgcdilocofh


ARIA Validator

  Scans page for WAI-ARIA implementation issues.
  > https://chrome.google.com/webstore/detail/aria-validator/oigghlanfjgnkcndchmnlnmaojahnjoc


ChromeVox

  ChromeVox - Giving Voice to Chrome
  > https://chrome.google.com/webstore/detail/kgejglhpjiefppelpmljglcjbhoiplfn


ChromeShades

  ChromeShades - find accessibility problems and experience the web without sight.
  > https://chrome.google.com/webstore/detail/hlklboladblmgfpkenhlgbhoojdlfoao


Color Contrast Analyzer

  Analyze a web page or portion of a web page for conformance with WCAG 2.0 Color Contrast requirements.
  > https://chrome.google.com/webstore/detail/dagdlcijhfbmgkjokkjicnnfimlebcll



https://khan.github.io/tota11y/
http://www.deque.com/products/axe/
http://www.karlgroves.com/2013/09/07/diagnostic-css-super-quick-web-accessibility-testing/
https://github.com/matatk/landmarks
https://github.com/reactjs/react-a11y
https://thepaciellogroup.github.io/AT-browser-tests/



Web checklist

  > http://www-03.ibm.com/able/guidelines/web/accessweb.html




--- ---  --- ---  --- ---  --- ---  --- ---  --- ---  --- ---  --- ---  --- ---  --- ---  --- ---  --- ---  






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











