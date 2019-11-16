# MS Code

<kbd></kbd>

|Mac|Win|Command|
|---|---|---|
|<kbd>⌘</kbd> <kbd>B</kbd>				||Open sidebar|
|<kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd>	||Explorer|
|<kbd>⌘</kbd> <kbd>↓</kbd>				||Open file in Explorer|
|<kbd>^</kbd> <kbd>G</kbd>				||Go to line|
|<kbd>^</kbd> <kbd>`</kbd>				||Open terminal|

## Editor

|Mac|Win|Command|
|---|---|---|
|<kbd>cmd</kbd> <kbd>D</kbd>||Select word|
|<kbd>shift</kbd> <kbd>cmd</kbd> <kbd>L</kbd>||Select all occurrences of find match|
|<kbd>cmd</kbd> <kbd>E</kbd>||Find with selection|
|<kbd>cmd</kbd> <kbd>F3</kbd>||Find next selection|


<kbd></kbd>

|Mac|Win|Command|
|---|---|---|
|<kbd>option</kbd> <kbd>Up arrow</kbd> <kbd>down arrow</kbd>||Move line|
|<kbd>shift</kbd> <kbd>option</kbd> <kbd>down arrow</kbd>	||Duplicate line|
|<kbd>shift</kbd> <kbd>cmd</kbd> <kbd>K</kbd>				||Remove line|
|<kbd>cmd</kbd> <kbd>K</kbd> - <kbd>M</kbd>					||Change lang mode|
|<kbd>shift</kbd> <kbd>cmd</kbd> <kbd>M</kbd>				||Problems log|
|<kbd>option</kbd> <kbd>Z</kbd>								||Word wrap toggle|


`⇧⌘O` Go to symbol in file

`⌘K ⌘←` View: Focus Left Editor Group
`⌘K ⌘→` View: Focus Right Editor Group

`⌘K ←` View: Move Editor Group Right
`⌘K →` View: Move Editor Group Left

`⌥⌘→` Next Editor
`⌥⌘←` Previous Editor
`⌃⇥` Next used edtior in Group


## Expand region

`⌃⌥↑` Expand selection
`⌃⌥↓` Undo selection


## Jumpy

`⌘J` Toggle jumpy


## Bookmarks

`⌥⌘k` Add Bookmark
`⌥⌘L` Next Bookmark
`⌥⌘J` Previous Bookmark


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
5. Find `workbench.action.terminal.clear` add `Ctrl` + `k` as a shortcut.

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
