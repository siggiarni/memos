# MS Code

| Mac                                    | Win                                       | Command               |
| -------------------------------------- | ----------------------------------------- | --------------------- |
| <kbd>⌘</kbd> <kbd>B</kbd>              | <kbd>Ctrl</kbd> <kbd>B</kbd>              | Open sidebar          |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>E</kbd> | <kbd>Ctrl</kbd> <kbd>⇧</kbd> <kbd>E</kbd> | Explorer              |
| <kbd>⌘</kbd> <kbd>↓</kbd>              | <kbd>Enter</kbd>                          | Open file in Explorer |
| <kbd>⌃</kbd> <kbd>G</kbd>              | <kbd>Ctrl</kbd> <kbd>G</kbd>              | Go to line            |
| <kbd>⌃</kbd> <kbd>\`</kbd>             | <kbd>Ctrl</kbd> <kbd>\`</kbd>             | Open terminal         |

## Editor

| Mac                                    | Win                                       | Command                              |
| -------------------------------------- | ----------------------------------------- | ------------------------------------ |
| <kbd>⌘</kbd> <kbd>D</kbd>              | <kbd>Ctrl</kbd> <kbd>D</kbd>              | Select word                          |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>L</kbd> | <kbd>⇧</kbd> <kbd>Ctrl</kbd> <kbd>L</kbd> | Select all occurrences of find match |
| <kbd>⌘</kbd> <kbd>E</kbd>              |                                           | Find with selection                  |
| <kbd>⌘</kbd> <kbd>F3</kbd>             | <kbd>Ctrl</kbd> <kbd>F3</kbd>             | Find next selection                  |

## Selection

| Mac                                      | Win                                              | Command                           |
| ---------------------------------------- | ------------------------------------------------ | --------------------------------- |
| <kbd>⌥</kbd> <kbd>↑</kbd> <kbd>↓</kbd>   | <kbd>Alt</kbd>+<kbd>↑</kbd> / <kbd>↓</kbd>       | Move line                         |
| <kbd>⇧</kbd> <kbd>⌥</kbd> <kbd>↓</kbd>   | <kbd>⇧</kbd>+<kbd>Alt</kbd> / <kbd>↓</kbd>       | Duplicate line                    |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>K</kbd>   | <kbd>⇧</kbd>+<kbd>Ctrl</kbd> / <kbd>K</kbd>      | Remove line                       |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>D</kbd>   | <kbd>⇧</kbd>+<kbd>Ctrl</kbd> / <kbd>D</kbd>      | Duplicate selection <sup>\*</sup> |
| <kbd>⌘</kbd> <kbd>K</kbd> - <kbd>M</kbd> | <kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>M</kbd>        | Change Language Mode              |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>M</kbd>   | <kbd>⇧</kbd>+<kbd>Ctrl</kbd>+<kbd>M</kbd>        | Problems log                      |
| <kbd>⌥</kbd> <kbd>Z</kbd>                | <kbd>Alt</kbd>+<kbd>Z</kbd>                      | Word wrap toggle                  |
| <kbd> </kbd> <kbd> </kbd>                | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> | Expand Selection                  |
| <kbd> </kbd> <kbd> </kbd>                | <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> | Shrink Selection                  |

<small>\* Need to remap `View: Show Debug` to another shortcut.</small>

## Go

| Mac                                                   | Win                                 | Command                               |
| ----------------------------------------------------- | ----------------------------------- | ------------------------------------- |
| <kbd>⇧</kbd> <kbd>⌘</kbd> <kbd>O</kbd>                |                                     | Got to symbol in file                 |
| <kbd>⌘</kbd> <kbd>K</kbd> - <kbd>⌘</kbd> <kbd>←</kbd> |                                     | Focus left Editor Group               |
| <kbd>⌘</kbd> <kbd>K</kbd> - <kbd>⌘</kbd> <kbd>→</kbd> |                                     | Focus right Editor Group              |
| <kbd>⌘</kbd> <kbd>K</kbd> - <kbd>←</kbd>              |                                     | Move Editor Group Right               |
| <kbd>⌘</kbd> <kbd>K</kbd> - <kbd>→</kbd>              |                                     | Move Editor Group Left                |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>right</kbd>            |                                     | <kbd>Ctrl</kbd> + <kbd>PageDown</kbd> | Next Editor |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>left</kbd>             | <kbd>Ctrl</kbd> + <kbd>PageUp</kbd> | Previous Editor                       |
| <kbd>⌃</kbd> <kbd>tab</kbd>                           |                                     | Next used editor in Group             |

## Breadcrumbs

| Mac                                    | Win | Command              |
| -------------------------------------- | --- | -------------------- |
| <kbd>⌘</kbd> <kbd>⇧</kbd> <kbd>.</kbd> |     | Focus on breadcrumbs |
| <kbd>←</kbd> <kbd>→</kbd>              |     | Navigate breadcrumbs |

## Expand region

| Mac                                    | Win | Command          |
| -------------------------------------- | --- | ---------------- |
| <kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>↑</kbd> |     | Expand selection |
| <kbd>⌃</kbd> <kbd>⌥</kbd> <kbd>↓</kbd> |     | Undo selection   |

## Jumpy

| Mac                       | Win | Command      |
| ------------------------- | --- | ------------ |
| <kbd>⌘</kbd> <kbd>J</kbd> |     | Toggle jumpy |

## Bookmarks

| Mac                                    | Win | Command           |
| -------------------------------------- | --- | ----------------- |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>K</kbd> |     | Add Bookmark      |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>L</kbd> |     | Next Bookmark     |
| <kbd>⌥</kbd> <kbd>⌘</kbd> <kbd>J</kbd> |     | Previous Bookmark |

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

## Keybindings

    keybindings.json

<pre><code>
// Place your key bindings in this file to override the defaultsauto[]
[
    // MacOS specific shortcuts
    {
        "key": "ctrl+k",
        "command": "workbench.action.terminal.clear",
        "when": "isMacOS"
    },
    // Windows specific shortcuts
    {
        "key": "ctrl+k k",
        "command": "workbench.action.terminal.clear",
        "when": "isWindows"
    },
    {
        "key": "ctrl+alt+[",
        "command": "workbench.action.terminal.focusPrevious",
        "when": "isWindows"
    },
    {
        "key": "ctrl+alt+]",
        "command": "workbench.action.terminal.focusNext",
        "when": "isWindows"
    },
    // Shared shortcuts
    {
        "key": "ctrl+shift+d",
        "command": "editor.action.duplicateSelection"
    },
    {
        "key": "ctrl+shift+alt+d",
        "command": "workbench.view.debug"
    },
    {
        "key": "ctrl+shift+d",
        "command": "-workbench.view.debug"
    }
]
</code></pre>

## Extensions

<pre>
Name: Auto Rename Tag
Id: formulahendry.auto-rename-tag
Description: Auto rename paired HTML/XML tag
Version: 0.1.1
Publisher: Jun Han
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

Name: Better Comments
Id: aaron-bond.better-comments
Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
Version: 2.0.5
Publisher: Aaron Bond
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

Name: Bookmarks
Id: alefragnani.bookmarks
Description: Mark lines and jump to them
Version: 10.6.0
Publisher: Alessandro Fragnani
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks

Name: Bracket Pair Colorizer 2
Id: coenraads.bracket-pair-colorizer-2
Description: A customizable extension for colorizing matching brackets
Version: 0.0.28
Publisher: CoenraadS
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2

Name: change-case
Id: wmaurer.change-case
Description: Quickly change the case (camelCase, CONSTANT_CASE, snake_case, etc) of the current selection or current word
Version: 1.0.0
Publisher: wmaurer
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case

Name: Git History
Id: donjayamanne.githistory
Description: View git log, file history, compare branches or commits
Version: 0.4.6
Publisher: Don Jayamanne
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory

Name: GitLens — Git supercharged
Id: eamodio.gitlens
Description: Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more
Version: 10.2.0
Publisher: Eric Amodio
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

Name: Import Cost
Id: wix.vscode-import-cost
Description: Display import/require package size in the editor
Version: 2.12.0
Publisher: Wix
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost

Name: Incrementor
Id: nmsmith89.incrementor
Description: Advanced increment / decrement actions for just about anything!
Version: 0.1.0
Publisher: Neil Smith
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=nmsmith89.incrementor

Name: IntelliSense for CSS class names in HTML
Id: zignd.html-css-class-completion
Description: CSS class name completion for the HTML class attribute based on the definitions found in your workspace.
Version: 1.19.0
Publisher: Zignd
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion

Name: Live Server
Id: ritwickdey.liveserver
Description: Launch a development local Server with live reload feature for static & dynamic pages
Version: 5.6.1
Publisher: Ritwick Dey
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Name: Material Icon Theme
Id: pkief.material-icon-theme
Description: Material Design Icons for Visual Studio Code
Version: 3.9.2
Publisher: Philipp Kief
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme

Name: Prettier - Code formatter
Id: esbenp.prettier-vscode
Description: Code formatter using prettier
Version: 3.9.0
Publisher: Esben Petersen
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Name: Sort lines
Id: tyriar.sort-lines
Description: Sorts lines of text
Version: 1.9.0
Publisher: Daniel Imms
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines
</pre>
