
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

`<CR>` = Press the carriage return key (also known as `<Enter>`).   

* C = c$    = change (replace) to the end of the line.
* s = sl    = delete character and substitute text– and move cursor right.
* I = ^i    = jump to the first non-blank character of the line– and insert before the cursor.
* A = $a    = jump to the end of the line– and insert (append) after the cursor.
* o = A<CR> = insert (append) at the end of the line– and ?
* O = ko    = move cursor up– and append (open) a new line below the current line.
