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

todo

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

* `x` deletes the character under the cursor. 
* `dd` Deletes the current line. 
* `db` = Delete backward.
* `dw` = Delete forward.
* `daw` = Delete an Entire Word.

* `p` = paste text.
* `R` = Replace character.

* `<C-h>` = Delete back one *character*.
* `<C-w>` = Delete back one *word*.
* `<C-u>` = Delete back to *start of line*.

#### Search

* `f` = Find in line.
* `/`{pattern} = Find pattern.
* `n/N` = Jump to pattern match.
* `<C-a>` command will look ahead for a digit on the current line.

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

