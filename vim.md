
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

## Commands

The dot command lets us repeat the last change.   

The `x` command deletes the character under the cursor.   

The `dd` command also performs a deletion, but this one acts on the current line as a whole.   

The `>G` command increases the indentation from the current line until the end of the file.   

The `x`, `dd`, and `>` commands are all executed from Normal mode.   

`<CR>` = Press the carriage return key also known as `<Enter>`.   

### Compound commands

* `C` = `c$`    = change (replace) to the end of the line.
* `s` = `sl`    = delete character and substitute text– and move cursor right.
* `I` = `^i`    = jump to the first non-blank character of the line– and insert before the cursor.
* `A` = `$a`    = jump to the end of the line– and insert (append) after the cursor.
* `o` = `A<CR>` = insert (append) at the end of the line– and ?
* `O` = `ko`    = move cursor up– and append (open) a new line below the current line.

* `h`, `j`, `k`, `l` = move around.
* `W`, `w` = Move forward.
* `B`, `b` = Move backward.

* `$` = Move to end of line.
* `0` = Move to start of line.

* `gg` = Go to top of document.
* `G`  = Go to end of document.

* `^`  = jump to the first non-blank character of the line.
* `g_` = jump to the last non-blank character of the line.

* `H` = Go to top of screen.
* `M` = Go to middle of screen.
* `L` = Go to bottom of screen.

* `db` = Delete backward.
* `dw` = Delete forward.
* `daw` = Delete an Entire Word.

* `yyp` = Duplicate line.
* `cW` = Change word.
* `<C-a>` command will look ahead for a digit on the current line.

* `d2w` Invoke delete command and give `2w` as the motion. Deletes 2 words.

* `Shift-V j >` Mark a block and indent it.

If you notice that you have to make the same small change in a handful of places, you can attempt to compose your changes in such a way that they can be repeated with the dot command.

Summary:
   A buffer is the in-memory text of a file.
   A window is a viewport on a buffer.
   A tab page is a collection of windows.

A window is a viewport onto a buffer.  You can use multiple windows on one
buffer, or several windows on different buffers.

A buffer is a file loaded into memory for editing.  The original file remains
unchanged until you write the buffer to the file.
