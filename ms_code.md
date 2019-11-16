# MS Code

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>B</kbd>				||Open sidebar|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>	||Explorer|
|<kbd>⌘</kbd> <kbd>↓</kbd>				||Open file in Explorer|
|<kbd>⌃</kbd> <kbd>G</kbd>				||Go to line|
|<kbd>⌃</kbd> <kbd>`</kbd>				||Open terminal|

## Editor

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>D</kbd>				||Select word|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>L</kbd>	||Select all occurrences of find match|
|<kbd>⌘</kbd> <kbd>E</kbd>				||Find with selection|
|<kbd>⌘</kbd> <kbd>F3</kbd>				||Find next selection|

---

|Mac|Win|Command|
|---|---|---|
|<kbd>⌥</kbd> <kbd>↑ arrow</kbd> <kbd>↓ arrow</kbd>	||Move line|
|<kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>↓ arrow</kbd>		||D↑licate line|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd>				||Remove line|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>M</kbd>			||Change lang mode|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>M</kbd>				||Problems log|
|<kbd>⌥</kbd> <kbd>Z</kbd>							||Word wrap toggle|

---

|Mac|Win|Command|
|---|---|---|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd>					||Got to symbol in file|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>⌘</kbd> <kbd>←</kbd>	||Focus left Editor Gro↑|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>⌘</kbd> <kbd>→</kbd>	||Focus right Editor Gro↑|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>←</kbd>				||Move Editor Gro↑ Right|
|<kbd>⌘</kbd> <kbd>K</kbd> - <kbd>→</kbd>				||Move Editor Gro↑ Left|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>right</kbd>				||Next Editor|
|<kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>left</kbd>				||Previous Editor|
|<kbd>⌃</kbd> <kbd>tab</kbd>							||Next used editor in Gro↑|


|Mac|Win|Command|
|---|---|---|
|<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>↑</kbd>	||Expand selection|
|<kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>↓</kbd>	||Undo selection|


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

### Command panel

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

<kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>.</kbd> Focus on breadcrumbs

Navigate breadcrumbs using arrow keys <kbd>←</kbd> <kbd>→</kbd>



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
