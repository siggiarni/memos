# Vim memo

## vimrc file

The vimrc file contains optional runtime configuration settings to initialize Vim when it starts.

<pre>
~/.vimrc
</pre>

http://vimdoc.sourceforge.net/htmldoc/usr_05.html#vimrc_example.vim

https://stackoverflow.com/questions/26708822/why-do-vim-experts-prefer-buffers-over-tabs

While in insert mode hit CTRL-R `{register}`.

For example, CTRL-R * will insert in the contents of the clipboard and CTRL-R " (the unnamed register) inserts the the last delete or yank.

`:set paste` This will prevent vim from re-tabbing your code. When done pasting, `:set nopaste` will return to the normal behavior.

It's also possible to toggle the mode with a single key, by adding something like set `pastetoggle=<F2>` to your `.vimrc`.

the `!` at the end of the command in vim toggles the command on and off.

`D` or its equivalent `d$` will delete the rest of the line and leave you in *command mode*. 
`C` or `c$` will delete the rest of the line and put you in *insert mode*, and new text will be appended to the line.


## Buffers

A buffer is a file loaded into memory for editing. All opened files are associated with a buffer. There are also buffers not associated with any file.

Vim buffers are identified using a name and a number. The name of the buffer is the name of the file associated with that buffer. The buffer number is a unique sequential number assigned by Vim. This buffer number will not change in a single Vim session. 

When you open a file using any of the Vim commands, a buffer is automatically created.

## Register

In Vim’s terminology, we don’t deal with a clipboard but instead with registers.

* Vim’s `put` command is effectively identical to the `paste`.
* Vim’s `yank` command is equivalent to the `copy` operation.
* Vim’s `delete` command is equivalent to the standard `cut`.

“We can specify which register we want to use by prefixing the command with "{register}. If we don’t specify a register, then Vim will use the unnamed register.”

“For example, if we wanted to yank the current word into register a, we could run "ayiw”

### The Unnamed Register

“If we don’t specify which register we want to interact with, then Vim will use the unnamed register, which is addressed by the " symbol”

“The x, s, d{motion}, c{motion}, and y{motion} commands (and their uppercase equivalents) all set the contents of the unnamed register.”

### The Yank register

When we use the `y{motion}` command, the specified text is copied not only into the unnamed register but also into the yank register, which is addressed by the `0` symbol.

We can safely paste from the yank register by pressing `"0P`.

### The Named register

Vim has one named register for each letter of the alphabet.

### The Black Hole Register

The black hole register is a place from which nothing returns.

We run the command `_d{motion}`, then Vim deletes the specified text without saving a copy of it.

Vim’s plus register references the system clipboard and is addressed by the + symbol”
If we use the cut or copy command to capture text in an external application, then we can paste it inside Vim using "+p”
prefix Vim’s yank or delete commands with "+, the specified text will be captured in the system clipboard”
Vim’s registers can be thought of simply as containers that hold a block of text.”
From Insert mode, we can insert the contents of the unnamed register by pressing <C-r>", or we can insert the contents of the yank register by pressing <C-r>0”





## Commands

`<CR>` = Press the carriage return key also known as `<Enter>`.   

* `Esc` = Switch to Normal mode.
* `C-[` = Switch to Normal mode.
* `C-o` = Switch ot Insert Normal mode.

## Normal mode

### Movement

#### Directional movement

* `h`, `j`, `k`, `l` = move around.
* `W`, `w` = Move forward.
* `B`, `b` = Move backward.

#### Go to...

##### Line

* `$` = Go to end of line.
* `0` = Go to start of line.

##### Document

* `gg` = Go to top of document.
* `G`  = Go to end of document.

##### Screen

* `H` = Go to top of screen.
* `M` = Go to middle of screen.
* `L` = Go to bottom of screen.

#### Jump to

* `^`  = jump to the first non-blank character of the line.
* `g_` = jump to the last non-blank character of the line.

#### Scroll

* `zz` = Redraws the screen with the current line in the middle of the window.
* `<C-e>` = Move screen up one line.
* `<C-y>` = Move screen down one line.

### Folding blocks

* `zi` Switch folding on/off.
* `za` Toggle current fold on/off.
* `zc` Close current fold.
* `zR` Open  all folds.
* `zM` Close all folds.
* `zv` Expand folds to reveal cursor.
* `zo` Open fold.
* `>i}` indent inner block.
* `>G` increases the indentation from the current line until the end of the file.   

http://vimcasts.org/episodes/how-to-fold/

### Indentation

* `zm` = increases the foldlevel by one.
* `zr` = decreases the foldlevel by one.
* `z Shift + o` opens all folds at the cursor.
* `z Shift + m` closes all open folds.

### Edit

* `.` The dot  command lets us repeat the last change.   
* `cW` = Change word.

* `yy` or `Y` = Jank the line.
* `dd` = Cut the line.

* `p` = paste the copied or deleted text __after__ the current line.
* `P` = paste the copied or deleted text __before__ the current line.

* `x` deletes the character under the cursor. 
* `dd` Deletes the current line. 
* `db` = Delete backward.
* `dw` = Delete forward.
* `daw` = Delete an Entire Word.

* `p` = Paste text.
* `"+p` = Paste text from an external application.
* `R` = Replace character.

* `<C-h>` = Delete back one *character*.
* `<C-w>` = Delete back one *word*.
* `<C-u>` = Delete back to *start of line*.


#### Search

* `f` = Find in line.
* `/`{pattern} = Find pattern.
* `n/N` = Jump to pattern match.
* `<C-a>` command will look ahead for a digit on the current line.
* `*` and/or `#` to search for the word under the cursor.

### Visual mode 

* `shift` + `v` = Select using visual line.
* `viw` = visually select word under cursor.

### Insert mode


#### Edit

* `c` = Changes word. Use with visual mode.

## Compound commands

* `C` = `c$`    = change (replace) to the end of the line.
* `s` = `sl`    = delete character and substitute text– and move cursor right.
* `I` = `^i`    = jump to the first non-blank character of the line– and insert before the cursor.
* `A` = `$a`    = jump to the end of the line– and insert (append) after the cursor.
* `o` = `A<CR>` = insert (append) at the end of the line– and ?
* `O` = `ko`    = move cursor up– and append (open) a new line below the current line.

### Misc

* `d2w` Invoke delete command and give `2w` as the motion. Deletes 2 words.
* `yy` = Yank the line.
* `<C-r><C-p>`{register} = Inserts text literally and fixes any unintended indentation
* To indent a curly-braces block, put your cursor on one of the curly braces and use `>%`.
* If you’re copying blocks of text around and need to align the indent of a block in its new location, use `]p` instead of just `p`. This aligns the pasted block with the surrounding text.


The expression register is addressed by the `=` symbol. From Insert mode we can access it by typing `<C-r>=`.

* `v` = Enable character wise visual mode
* `V` = Enable line wise visual mode
* `<C-v>` = Enable block wise visual mode.
* `gv` = Enable last visual selection.
* `o` “Go to other end of highlighted text”


When we use the dot command to repeat a Visual mode command, it acts on the same amount of text as was marked by the most recent visual selection.

The gv command is a useful little shortcut. It reselects the range of text that was last selected in Visual mode

As a general rule, we should prefer operator commands over their Visual mode equivalents when working through a repetitive set of changes.

sometimes we need to modify a range of text whose structure is difficult to trace. In these cases, Visual mode is the right tool for thejob.

We can use Visual-Block mode to insert text into several lines of text simultaneously.

* `vit` = select the inner contents of a tag
* `U` = converts the selected characters to uppercase


## Ex commands

* `:1` = First line of the file.
* `:$` = Last line of the file.
* `:0` = Virtual line above the first line of the file.
* `:.` = Current line.
* `:'m` = Line containing mark `m`.
* `:'<` = Start of visual selection.
* `:'>` = End of visiual selection.
* `:%` = The entire file. Shorthand for `:1,$`.

Repeat the last Ex command with `@:`.

### Duplicate lines

`:[range]copy {address}`

Make a copy of line 6 and put it below the current line.

* `:6copy`
* `:6co`
* `:6t.`

### Moving lines

`:[range]move {address}`

We can shorten it to a single letter: `:m`.

---

Command-Line mode prompts us to enter an Ex command, a search pattern, or an expression.

we press / to bring up a search prompt or <C-r>= to access the expression register

We can jump to the top of the file by run”ning the following `:1`

If we wanted to jump to the end of the file, we could enter :5 or we could use the special $ symbol `:$`

`:{start},{end}`

We can use the `.` symbol as an address to represent the current line.

So, we can easily compose a range representing everything from here to the end of the file: `.,$p`

The `%` stands for all the lines in the current file

##### Copy

* `:6t.` = Copy line 6 to just below the current line.
* `:t6` = Copy the current line to just below line 6

##### Move

* `:’<,’>m6` = Move visual selection to line 6.

With the ‘wildmenu’ option enabled, Vim provides a navigable list of suggestions.

try opening your vimrc file, place your cursor on a setting, and then type `:help <C-r><C-w>`.

## Files

The :edit command allows us to open files from within Vim.

The % symbol is a shorthand for the filepath of the active buffer.

“The :h modifier removes the filename while preserving the rest of the path”

“The ‘path’ option allows us to specify a set of directories inside of which Vim will search when the :find command is invoked”

:set path+=app/**

“We can open the file explorer window with the :edit {path} command by supplying a directory name”

“:e.
Open file explorer for current working directory”

“:E
Open file explorer for the directory of the active buffe”



## Window management

### Windows

http://vimcasts.org/episodes/working-with-windows/

### Tabs

`tab sball` = open current buffer in tab.

`:edit` to reload the current file


We can open a new tab page with the `:tabedit {filename}` command. If we omit the `{filename}` argument, then Vim creates a new tab page containing an empty buffer.

The :lcd {path} command lets us set the working directory locally for the current window

if the current tab page contains more than one window, we can use the <C-w>T command, which moves the current window into a new tab page

If the active tab page contains only a single window, the :close command will close the window and the tab page with it.

we can use the :tabclose command, which closes the current tab page no matter how many windows it contains.

if we want to close all tab pages except for the current one, we can use the :tabonly command.

Tabs are numbered starting from 1. We can switch between tabs with the {N}gt command

if the number is omitted, Vim advances to the next tab. The gT command does the same but in reverse.

    http://vimcasts.org/episodes/how-to-use-tabs/


https://stackoverflow.com/questions/235839/indent-multiple-lines-quickly-in-vi  
https://stackoverflow.com/questions/234564/tab-key-4-spaces-and-auto-indent-after-curly-braces-in-vim  

If you notice that you have to make the same small change in a handful of places, you can attempt to compose your changes in such a way that they can be repeated with the dot command.

Summary:
   A buffer is the in-memory text of a file.
   A window is a viewport on a buffer.
   A tab page is a collection of windows.

A window is a viewport onto a buffer.  You can use multiple windows on one
buffer, or several windows on different buffers.

A buffer is a file loaded into memory for editing.  The original file remains
unchanged until you write the buffer to the file.

* https://imgur.com/fujVeHM
* https://vim.rtorr.com/
