# CSS Variables

## Global var

```
:root {
  --font-size: 20px
}

.test {
  font-size: var(--font-size)
}
```

## Local var

```
.alert {
  --alert-color: #ff6f69;
}

.alert p {
  color: var(--alert-color);
  border: 1px solid var(--alert-color);
}
```

## resp var

```
:root {
  --main-font-size: 16px;
}
media all and (max-width: 600px) {
  :root {
    --main-font-size: 12px;
  }
}
```

## js

```
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--main-color');
console.log(mainColor); 
--> '#ffeead'
```

Update var using:
```
root.style.setProperty('--main-color', '#88d8b0')
```


If you want it to be available globally, simply define it on the :root pseudo class.


You can also create local variables, which are accessible only to the element it’s declared at and to its children.

A big advantage CSS Variables is that they have access to the DOM. This isn’t the case with LESS or SASS as their variables are compiled down to regular CSS.

In practice this means that you can, for example, change the variables based upon the width of the screen

Another advantage of living in the DOM is that you can access the variables with JavaScript, and even update them, for example based upon used interactions.

---

unlike variables from CSS preprocessors, CSS Variables are actually a part of the DOM, which has a lot of benefits.

Custom properties are ordinary properties, so they can be declared on any element.

a CSS variable is any “property” whose name begins with two dashes.

CSS variables are resolved with the normal inheritance and cascade rules. 

CSS variables can be made conditional with @media and other conditional rules. 

CSS variables can be used in HTML’s style attribute.


---

Another side-effect of the variables being scoped to an element is that they can’t be used outside CSS declarations. CSS variables can’t be used in other places such as with @media rules

---





If you reassign a custom property’s value, the browser will recalculate all variables and calc() expressions where it’s applied.

CSS custom properties are aware of the DOM’s structure and are dynamic.

* <https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855>
* <https://medium.freecodecamp.org/learn-css-variables-in-5-minutes-80cf63b4025d>
