# Autocomplete

The one most people know is `CTRL-P:` keyword completion (`:help i_CTRL-P`). This finds the previous match for a word that starts with the characters in front of the cursor -- `CTRL-N` is the opposite and will find the next match.

Pressing the return key will insert the match, and pressing `CTRL-P/N` again will cycle through the completion menu.

These commands look for matches based on the `complete` option (`:help 'complete'`). The default value is `.,w,b,u,t,i` -- let's break that down:

-   `.`: The current buffer
-   `w`: Buffers in other windows
-   `b`: Other loaded buffers
-   `u`: Unloaded buffers
-   `t`: Tags
-   `i`: Included files

## The `i_CTRL-X` Sub-Mode

When in Insert mode, typing `CTRL-X` actually triggers a sub-mode that accepts several commands. For example, typing `CTRL-X CTRL-L` will cause Vim to complete an entire line

These Insert mode completion commands can be quite useful — I don’t want `CTRL-P` to match based on the dictionary, but I don't mind doing this occasionally by typing `CTRL-X` `CTRL-K`. See `:help ins-completion` for a full list of these commands.

## Omni Completion

Omni completion supports filetype-specific completion, so it’s greatly suited to programming. Here I’ve told Vim to use an omni function (`omnifunc`) and I'm using `filetype plugin` to turn on filetype detection and load plugins based on the current file:

```
filetype plugin on
set omnifunc=syntaxcomplete#Complete
```

Now programming-language specific completion is available by typing `CTRL-X CTRL-O`:

```
filetype plugin on
au FileType php setl ofu=phpcomplete#CompletePHP
au FileType ruby,eruby setl ofu=rubycomplete#Complete
au FileType html,xhtml setl ofu=htmlcomplete#CompleteTags
au FileType c setl ofu=ccomplete#CompleteCpp
au FileType css setl ofu=csscomplete#CompleteCSS
```

setl = setlocal
