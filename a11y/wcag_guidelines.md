# Web Content Accessibility Guidelines (WCAG) 2.1

* <https://www.w3.org/TR/WCAG21/>

## About the guidelines

* Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make Web content more accessible to people with disabilities.
* WCAG 2.1 is developed through the W3C process in cooperation with individuals and organizations around the world.
* The European Union adopted WCAG 2.1 as the digital accessibility standard in September 2018 as directive [EN 301 549](http://mandate376.standards.eu/standard/technical-requirements/#9).
* At the time of this writing EN 301 549 is a [voluntary standard](http://mandate376.standards.eu/frequently-asked-questions#EN), however all public sector websites in the EU must comply by [September 23 2020](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102#d1e1150-1-1).

To meet this requirement web compnents should at least support WCAG Level AA.


* [WAI-ARIA exampels of design patterns and widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#intro)
* [Inclusive Components, designing inclusive web interfaces](https://inclusive-components.design/)


## The four principles

All future NDS components should comply with the four principles of the Web Content Accessibility Guidelines.

### 1. Perceivable
Users must be able to perceive it in some way, using one or more of their senses.

* <https://www.w3.org/TR/WCAG21/#perceivable>

### 2. Operable
The interface cannot require interaction that a user cannot perform. Users must be able to control UI elements (e.g. buttons must be clickable in some way — mouse, keyboard, voice command, etc.).

* <https://www.w3.org/TR/WCAG21/#operable>

### 3. Understandable
Users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)

* <https://www.w3.org/TR/WCAG21/#understandable>

### 4. Robust
The content must be developed using well-adopted web standards that will work across different browsers, now and in the future.

* <https://www.w3.org/TR/WCAG21/#robust>





## Level A requirements

### 1. Perceivable

#### 1.1.1 Non-text content ❗
https://www.w3.org/TR/WCAG21/#non-text-content

> All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.

#### 1.2.1 Audio-only and video-only
<https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded>

#### 1.2.3 Audio description or media alternative
<https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded>

#### 1.2.4 Captions
<https://www.w3.org/TR/WCAG21/#captions-prerecorded>


### Operable

#### 2.1.1 Keyboard ❗
https://www.w3.org/TR/WCAG21/#keyboard

> All functionality of the content is operable through a keyboard interface

#### 2.1.2 No keyboard trap ❗
https://www.w3.org/TR/WCAG21/#no-keyboard-trap

> If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface

#### 2.1.4 Character key shortcuts
https://www.w3.org/TR/WCAG21/#character-key-shortcuts

#### 2.2.1 Timing adjustable ❗
https://www.w3.org/TR/WCAG21/#timing-adjustable

> For each time limit that is set by the content the user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times.

#### 2.2.2 Pause, stop, hide
https://www.w3.org/TR/WCAG21/#pause-stop-hide

#### 2.3.1 Three flashes or below threshold
https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold

#### 2.4.1 Bypass blocks ❗
https://www.w3.org/TR/WCAG21/#bypass-blocks

> A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

Skip links, landmarks, aria-labels.

#### 2.4.2 Page titled ❗
https://www.w3.org/TR/WCAG21/#page-titled

> Web pages have titles that describe topic or purpose.

#### 2.4.3 Focus Order ❗
https://www.w3.org/TR/WCAG21/#focus-order

> If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

#### 2.4.4 Link purpose (in context) ❗
https://www.w3.org/TR/WCAG21/#link-purpose-in-context

> The purpose of each link can be determined from the link text alone

#### 2.5.1 Pointer gestures
https://www.w3.org/TR/WCAG21/#pointer-gestures

#### 2.5.2 Pointer cancellation
https://www.w3.org/TR/WCAG21/#pointer-cancellation

#### 2.5.3 Label in name ❗
https://www.w3.org/TR/WCAG21/#label-in-name

> For user interface components with labels that include text or images of text, the name contains the text that is presented visually.

#### 2.5.4 Motion actuation
https://www.w3.org/TR/WCAG21/#motion-actuation


### Understandable

#### 3.1.1 Language of page ❗
https://www.w3.org/TR/WCAG21/#language-of-page

> The default human language of each Web page can be programmatically determined.

#### 3.2.1 On focus ❗
https://www.w3.org/TR/WCAG21/#on-focus

> When any user interface component receives focus, it does not initiate a change of context.

#### 3.2.2 On input ❗
https://www.w3.org/TR/WCAG21/#on-input

> Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.


#### 3.3.1 Error identification ❗
https://www.w3.org/TR/WCAG21/#error-identification

> If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.


#### 3.3.2 Labels or Instructions ❗
https://www.w3.org/TR/WCAG21/#labels-or-instructions

> Labels or instructions are provided when content requires user input.

### Robust

#### Parsing ❗
https://www.w3.org/TR/WCAG21/#parsing

> In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

#### 4.1.2 Name, Role, Value ❗
https://www.w3.org/TR/WCAG21/#name-role-value

> For all user interface components, the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.


## Level AA requirements

### Perceivable

#### Captions
https://www.w3.org/TR/WCAG21/#captions-live

#### Audio description (pre-recorded)
https://www.w3.org/TR/WCAG21/#audio-description-prerecorded


### Operable

#### Multiple ways
https://www.w3.org/TR/WCAG21/#multiple-ways

#### Headings and labels ❗
https://www.w3.org/TR/WCAG21/#headings-and-labels

> Headings and labels describe topic or purpose.

#### Focus visible ❗
https://www.w3.org/TR/WCAG21/#focus-visible

> Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.


### Understandable

#### 3.1.2 Language of parts
https://www.w3.org/TR/WCAG21/#language-of-parts

#### 3.2.3 Consistent navigation ❗
https://www.w3.org/TR/WCAG21/#consistent-navigation

> Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.

#### Consistent identification
https://www.w3.org/TR/WCAG21/#consistent-identification

#### 3.3.2 Labels or instructions ❗
https://www.w3.org/TR/WCAG21/#labels-or-instructions

> Labels or instructions are provided when content requires user input.

### 3.3.3 Error suggestion ❗
https://www.w3.org/TR/WCAG21/#error-suggestion

> If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user

### Error prevention (legal, financial, data) ❗
https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data

> For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:
> * **Reversible**: Submissions are reversible.
> * **Checked**: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
> * **Confirmed**: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

### Robust

### 4.1.3 Status messages
https://www.w3.org/TR/WCAG21/#status-messages

> In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.
