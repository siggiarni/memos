# Web Content Accessibility Guidelines (WCAG) 2.1

* <https://www.w3.org/TR/WCAG21/>

## About the guidelines

* Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make Web content more accessible to people with disabilities.
* WCAG 2.1 is developed through the W3C process in cooperation with individuals and organizations around the world.
* The European Union adopted WCAG 2.1 as the digital accessibility standard in September 2018 as directive [EN 301 549](http://mandate376.standards.eu/standard/technical-requirements/#9).
* At the time of this writing EN 301 549 is a [voluntary standard](http://mandate376.standards.eu/frequently-asked-questions#EN), however all public sector websites in the EU must comply by [September 23 2020](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102#d1e1150-1-1).
* This list is based on


## Resources

* [WAI-ARIA exampels of design patterns and widgets](https://www.w3.org/TR/wai-aria-practices-1.1/#intro)
* [Inclusive Components, designing inclusive web interfaces](https://inclusive-components.design/)
* [Directive EN 301 549 clause 9](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.01.01_20/en_301549v030101a.pdf#page=44&zoom=page-width,-12,747)
* [How to Meet WCAG Level AA](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%2523col_customize&showtechniques=141,144&levels=aaa&techniques=sufficient,failures&technologies=js,server,smil,pdf,flash,sl)
* [WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)


## Best practice

* Use native HTML elements.
* Use landmarks.
* Keyboard support.
* Visual impaired support.
* FF a11y tools.
* Chrome a11y tools.
* extensions.

## The four principles

All future NDS components should comply with the four principles of the Web Content Accessibility Guidelines.


### 1. [Perceivable](https://www.w3.org/TR/WCAG21/#perceivable)
Users must be able to perceive it in some way, using one or more of their senses.

### 2. [Operable](https://www.w3.org/TR/WCAG21/#operable)
The interface cannot require interaction that a user cannot perform. Users must be able to control UI elements (e.g. buttons must be clickable in some way — mouse, keyboard, voice command, etc.).

### 3. [Understandable](https://www.w3.org/TR/WCAG21/#understandable)
Users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)

### 4. [Robust](https://www.w3.org/TR/WCAG21/#robust)
The content must be developed using well-adopted web standards that will work across different browsers, now and in the future.


## Guidelines


| ID | Level | Title | Description |
|-------|----|---|---|
| 1.1.1 | A  | [Non-text content](https://www.w3.org/TR/WCAG21/#non-text-content) | All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#g1.1)|
| 2.1.1 | A  | [Keyboard](https://www.w3.org/TR/WCAG21/#keyboard) | All functionality of the content is operable through a keyboard interface. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.1.1) |
| 2.1.2 | A  | [No keyboard trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap) | If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.1.2) |
| 2.2.1 | A  | [Timing adjustable](https://www.w3.org/TR/WCAG21/#timing-adjustable) | For each time limit that is set by the content the user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.2.1)|
| 2.4.1 | A  | [Bypass blocks](https://www.w3.org/TR/WCAG21/#bypass-blocks) | A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. See Skip links, landmarks, aria-labels. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.4.1) |
| 2.4.2 | A  | [Page titled](https://www.w3.org/TR/WCAG21/#page-titled) | Web pages have titles that describe topic or purpose. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.4.2) |
| 2.4.3 | A  | [Focus Order](https://www.w3.org/TR/WCAG21/#focus-order) | If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.4.3) |
| 2.4.4 | A  | [Link purpose](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) | The purpose of each link can be determined from the link text alone [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.4.4) |
| 2.5.3 | A  | [Label in name](https://www.w3.org/TR/WCAG21/#label-in-name) | For user interface components with labels that include text or images of text, the name contains the text that is presented visually. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.5.3) |
| 3.1.1 | A  | [Language of page](https://www.w3.org/TR/WCAG21/#language-of-page) | The default human language of each Web page can be programmatically determined. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc3.1.1) |
| 3.2.1 | A  | [On focus](https://www.w3.org/TR/WCAG21/#on-focus) | When any user interface component receives focus, it does not initiate a change of context. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc3.2.1) |
| 3.2.2 | A  | [On input](https://www.w3.org/TR/WCAG21/#on-input) | Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc3.2.2) |
| 3.3.1 | A  | [Error identification](https://www.w3.org/TR/WCAG21/#error-identification) | If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc3.3.1) |
| 3.3.2 | A  | [Labels or Instructions](https://www.w3.org/TR/WCAG21/#labels-or-instructions) | Labels or instructions are provided when content requires user input. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc3.3.2) |
| 4.1.1 | A  | [Parsing](https://www.w3.org/TR/WCAG21/#parsing) | In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc4.1.1) |
| 4.1.2 | A  | [Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value) | For all user interface components, the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc4.1.2) |
| 2.4.6 | AA | [Headings and labels](https://www.w3.org/TR/WCAG21/#headings-and-labels) | Headings and labels describe topic or purpose. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.4.6) |
| 2.4.7 | AA | [Focus visible](https://www.w3.org/TR/WCAG21/#focus-visible) | Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. [WebAIM's recommendations](https://webaim.org/standards/wcag/checklist#sc2.4.7) |
| 3.2.3 | AA | [Consistent navigation](https://www.w3.org/TR/WCAG21/#consistent-navigation) |  |
| 3.3.3 | AA | [Error suggestion](https://www.w3.org/TR/WCAG21/#error-suggestion) | If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user |
| 3.3.4 | AA | [Error prevention](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data) | For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.
| 4.1.3 | AA | [Status messages](https://www.w3.org/TR/WCAG21/#status-messages) | In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus. |
| X.X.X | AA |  |  |


---

### 1.2.1 Audio-only and video-only | A
<https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded>

### 1.2.3 Audio description or media alternative | A
<https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded>

### 1.2.4 Captions | A
<https://www.w3.org/TR/WCAG21/#captions-prerecorded>

### 2.1.4 Character key shortcuts | A
https://www.w3.org/TR/WCAG21/#character-key-shortcuts

### 2.2.2 Pause, stop, hide | A
https://www.w3.org/TR/WCAG21/#pause-stop-hide

### 2.3.1 Three flashes or below threshold | A
https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold

### 2.5.1 Pointer gestures | A
https://www.w3.org/TR/WCAG21/#pointer-gestures

### 2.5.2 Pointer cancellation | A
https://www.w3.org/TR/WCAG21/#pointer-cancellation

### 2.5.4 Motion actuation | A
https://www.w3.org/TR/WCAG21/#motion-actuation

### Captions | AA
https://www.w3.org/TR/WCAG21/#captions-live

### Audio description (pre-recorded) | AA
https://www.w3.org/TR/WCAG21/#audio-description-prerecorded

### Multiple ways | AA
https://www.w3.org/TR/WCAG21/#multiple-ways

### 3.1.2 Language of parts | AA
https://www.w3.org/TR/WCAG21/#language-of-parts
