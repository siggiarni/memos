# MS Code

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>B</kbd>				|<kbd>Ctrl</kbd> <kbd>B</kbd>|Open sidebar|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>	|<kbd>Ctrl</kbd> <kbd>⇧</kbd> <kbd>E</kbd>|Explorer|
|<kbd>⌘</kbd> <kbd>↓</kbd>				|<kbd>Enter</kbd>|Open file in Explorer|
|<kbd>⌃</kbd> <kbd>G</kbd>				|<kbd>Ctrl</kbd> <kbd>G</kbd>|Go to line|
|<kbd>⌃</kbd> <kbd>\`</kbd>				|<kbd>Ctrl</kbd> <kbd>\`</kbd>|Open terminal|

## Editor

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>D</kbd>				||Select word|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>L</kbd>	||Select all occurrences of find match|
|<kbd>⌘</kbd> <kbd>E</kbd>				||Find with selection|
|<kbd>⌘</kbd> <kbd>F3</kbd>				||Find next selection|

## Selection

|Mac|Win|Command|
|---|---|---|
|<kbd>⌥</kbd> <kbd>↑</kbd> <kbd>↓</kbd>		|<kbd>Alt</kbd>+<kbd>↑</kbd> / <kbd>↓</kbd>	|Move line|
|<kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>↓</kbd>		|<kbd>⇧</kbd>+<kbd>Alt</kbd> / <kbd>↓</kbd>	|Duplicate line|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd>		|<kbd>⇧</kbd>+<kbd>Ctrl</kbd> / <kbd>K</kbd>	|Remove line|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>D</kbd>		|<kbd>⇧</kbd>+<kbd>Ctrl</kbd> / <kbd>D</kbd>	|Duplicate selection <sup>*</sup> |
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>M</kbd>	|<kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>M</kbd>|Change Language Mode|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>M</kbd>		|<kbd>⇧</kbd>+<kbd>Ctrl</kbd>+<kbd>M</kbd>	|Problems log|
|<kbd>⌥</kbd> <kbd>Z</kbd>					|<kbd>Alt</kbd>+<kbd>Z</kbd>				|Word wrap toggle|

<small>* Need to remap `View: Show Debug` to another shortcut.</small>

## Go

|Mac|Win|Command|
|---|---|---|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd>					||Got to symbol in file|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>⌘</kbd> <kbd>←</kbd>	||Focus left Editor Group|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>⌘</kbd> <kbd>→</kbd>	||Focus right Editor Group|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>←</kbd>				||Move Editor Group Right|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>→</kbd>				||Move Editor Group Left|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>right</kbd>				||Next Editor|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>left</kbd>				||Previous Editor|
|<kbd>⌃</kbd> <kbd>tab</kbd>							||Next used editor in Group|

## Breadcrumbs

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>.</kbd>	||Focus on breadcrumbs|
|<kbd>←</kbd> <kbd>→</kbd>				||Navigate breadcrumbs|


## Expand region

|Mac|Win|Command|
|---|---|---|
|<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>↑</kbd>	||Expand selection|
|<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>↓</kbd>	||Undo selection|


## Jumpy

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>J</kbd>||Toggle jumpy|


## Bookmarks

|Mac|Win|Command|
|---|---|---|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>K</kbd>||Add Bookmark|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>L</kbd>||Next Bookmark|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>J</kbd>||Previous Bookmark|


## Misc

### Reload window

On OSX VSCode isn't using CMD+R as a keybinding. I found it useful to set this up to reload the window. Click Code > Preferences > Keyboard Shortcuts (or press CMD+K+S) search for 'reload window' and hover over and click the plus then press CMD R ENTER. Now you can reload the window simply by pressing CMD+R.

	>Reload Window

### Full Path in Title Bar

1. Open Settings: hit: `⌘,`.
2. Search for `title`.
3. In the input replace `activeEditorShort` with `activeEditorLong`.
4. Save.

<https://medium.com/riow/vscode-show-full-path-in-title-bar-b0cb731b330>


### Breadcrumbs navigation

Add to settings.json

	"breadcrumbs.enabled": true,

## Symbols

CSS symbol is a selector.
JS symbols is a variable.

## Keep files open

1. Go to settings
2. Look for

	`workbench.editor.enablePreviewFromQuickOpen`

3. Uncheck box.

## Terminal font size

1. Go to settings
2. Look for

	`terminal.integrated.fontSize`

3. Set font size.

## Add clear terminal shortcut

1. Go to settings
2. Look for

	`workbench.action.terminal`

3. add `workbench.action.terminal.clear`
4. Go to Keyboard Shortcuts
5. Find `workbench.action.terminal.clear` add `⌃` + `k` as a shortcut.

## Turn off color dectations

1. Go to settings
2. Look for

	`editor.colorDecorators`

3. Uncheck box

## Add vertical guides

1. Open Settings.
2. Look for `editor.rulers`.
3. Add `"editor.rulers": [80,120]`
4. Add `"workbench.colorCustomizations": {"editorRuler.foreground": "#313131"}`
