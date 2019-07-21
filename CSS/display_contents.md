# Display contents

In its simplest form, display: contents exists to visually remove the element’s box and replace it with its content. Essentially, it treats an element as if the element’s opening and closing tags were removed and the content was left naked on the page.

Today browsers will take an element with display: contents and drop it from the accessibility tree. 

There are plenty of cases where this might be helpful, but the most common one is with flexbox. With flexbox, only the immediate children of a flex container become flex items.
But, once you apply display: contents to a child, its children become flex items and are laid out using the same rules that would have been applied to their parent.

* <https://developers.google.com/web/updates/2018/03/nic65#display-contents>
* <https://bitsofco.de/how-display-contents-works/>
* <http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html>
* <https://rachelandrew.co.uk/archives/2017/07/20/why-display-contents-is-not-css-grid-layout-subgrid/>
