set encoding=utf-8 "Sets how vim shall represent characters internally.
set fileencoding=utf-8 "Sets the encoding for the file that is written.

syntax on "enable syntax highlighting


" Detection: recognize the type of the file and set the 'filetype' option.
filetype on
" Plugin: Loads ftplugin.vim in 'runtimepath'. When a file is edited its plugin file is loaded.
filetype plugin on
" Indent: loads indent.vim in 'runtimepath'. When a file is edited its indent file is loaded.
filetype indent on

" Turn on detection, plugin and indent at once.
"filetype plugin indent on

set title "Set the document name in the window title.
set showcmd "Show (partial) command in the last line of the screen.
set showmode "If in Insert, Replace or Visual mode put a message on the last line.
set number "Print the line number in front of each line.
set cursorline "Highlight the screen line of the cursor with CursorLine.
set hidden "When on a buffer becomes hidden when it is abandoned.
set linebreak "If on, Vim will wrap long lines at a character in 'breakat'.
set backspace=2 "same as :set backspace=indent,eol,start.
set nrformats-=octal "If included, numbers that start with a zero will be considered to be octal.
set mouse=a "Enable Mouse. 'a' option enables all options.
set omnifunc=syntaxcomplete#Complete " Turn on omni complete
set ruler " Always show current position
set termguicolors "When on, uses highlight-guifg and highlight-guibg attributes in the terminal (thus using 24-bit color).
"set term=screen-256color
set signcolumn=yes "Whether or not to draw the signcolumn.
highlight clear SignColumn
"hi CursorLine cterm=NONE ctermbg=black guibg=black
"hi Cursor cterm=none guibg=black ctermbg=black 
set scrolloff=5 "Minimal number of screen lines to keep above and below the cursor.

set noequalalways "When on, all the windows are automatically made the same size after splitting or closing a window.
set splitright "When on, splitting a window will put the new window right of the current one.
set splitbelow "When on, splitting a window will put the new window below the current one.

" Allow specified keys that move the cursor left/right to move to the previous/next line when the cursor is on the first/last character in the line.
set whichwrap+=<,>,h,l

" Turn off physical line wrapping.
set textwidth=0 "Maximum width of text that is being inserted.
set wrapmargin=0 "Number of characters from the right window border where wrapping starts.

" Tabstops
set tabstop=8 "Number of spaces that a <Tab> in the file counts for.
set softtabstop=4 "Number of spaces that a <Tab> counts for while performing editin operations.
set shiftwidth=4 "Number of spaces to use for each step of (auto)indent.
set expandtab "In Insert mode: Use the appropriate number of spaces to insert a <Tab>.
set smarttab "A <Tab> in front of a line inserts blanks according to 'shiftwidth'.

set path=$PWD/** "Set your path variable to the current directory
set autochdir "Always change to the current file's directory
set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines

" Always show the status line 
set laststatus=2

" Folding
set foldmethod=indent
set foldnestmax=10
set nofoldenable
set foldlevel=1

" Whitespace character
set listchars=tab:▸\ ,eol:¬,trail:~,extends:»,precedes:«,space:·
set autoread " set to auto read when a file is changed from the outside
set cmdheight=2 " Height of the command bar

" Search options
set ignorecase "" Ignore case when searching
set smartcase " When searching try to be smart about cases
set hlsearch " Hightlight search results
set incsearch "? Makes search act like search in modern browsers
set lazyredraw " Don't redraw while executing macros (good performance config)
set magic "? For regular expressions turn magic on
set showmatch " Show matching brackets when text indicator is over them
set mat=2 " How many tenths of a second to blink when matching brackets

" No annoying sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" Turn backup off
set nobackup
set nowb
set noswapfile

" wildmenu enables a menu at the bottom of the window.
set wildmenu

" wildmode a list of completions will be shown and the command will be completed to the longest common command.
set wildmode=list:longest,full

" Ignore compiled files
set wildignore=*.o,*~,*.pyc
if has("win16") || has("win32")
    set wildignore+=.git\*,.hg\*,.svn\*
else
    set wildignore+=*/.git/*,*/.hg/*,*/.svn/*,*/.DS_Store
endif

" Rendering
set ttyfast "Indicates a fast terminal connection.  More characters will be sent to the screen for redrawing.

" Custom colors
highlight SpecialKey ctermfg=LightGray

" Custom shortcuts
let mapleader = "," " Change leader key to ,
"Show/hide whitespace characters: , + l
nmap <leader>l :set list!<CR> 
" Open a filebrowser in vertical split window: F2 key
map <F2> :20 Vexplore<CR>
" Next buffer: F3 key
map <F3> :bnext<CR>
" Move screen up two lines: CTRL + e
nnoremap <C-e> 2<C-e>
" Move screen up down lines: CTRL + y
nnoremap <C-y> 2<C-y>

" Bubble single lines: CTRL + up/down key
nmap <C-Up> [e
nmap <C-Down> ]e
" Bubble multiple lines
vmap <C-Up> [egv
vmap <C-Down> ]egv

