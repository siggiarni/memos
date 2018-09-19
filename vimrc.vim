execute pathogen#infect()
" Setting up Vundle - the vim plugin bundler
    let iCanHazVundle=1
    let vundle_readme=expand('~/.vim/bundle/vundle/README.md')
    if !filereadable(vundle_readme)
        echo "Installing Vundle.."
        echo ""
        silent !mkdir -p ~/.vim/bundle
        silent !git clone https://github.com/VundleVim/Vundle.vim ~/.vim/bundle/vundle
        let iCanHazVundle=0
    endif
    " be iMproved, required
    set nocompatible
    " required
    filetype off
    set rtp+=~/.vim/bundle/vundle/
    call vundle#begin()
    Plugin 'VundleVim/Vundle.vim'
    "Add your bundles here
    Plugin 'Syntastic'
    Plugin 'https://github.com/tpope/vim-fugitive'
    Plugin 'https://github.com/airblade/vim-gitgutter'
    "Plugin 'https://github.com/valloric/youcompleteme'
    Plugin 'https://github.com/pangloss/vim-javascript'
    Plugin 'vim-airline/vim-airline'
    Plugin 'scrooloose/nerdcommenter'
    Plugin 'davidhalter/jedi-vim'
    "...All your other bundles...
    if iCanHazVundle == 0
        echo "Installing Vundles, please ignore key map error messages"
        echo ""
        :PluginInstall
    endif
    call vundle#end()
" Setting up Vundle - the vim plugin bundler end
syntax on
filetype plugin indent on
set title
set showcmd
set number
set cursorline
set hidden
set linebreak
"set textwidth=80
set backspace=2
set nrformats-=octal
set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab
" Set your path variable to the current directory
set path=$PWD/**
set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines
" Folding
set foldmethod=indent
set foldnestmax=10
set nofoldenable
set foldlevel=1
" Whitespace character
set listchars=tab:▸\ ,eol:¬,trail:~,extends:»,precedes:«,space:·
set autoread
set cmdheight=2
" Search options
set ignorecase
set smartcase
set hlsearch
set incsearch
set lazyredraw
set magic
set showmatch
set mat=2
" No annoying sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500

set wildmenu
" Ignore compiled files
set wildignore=*.o,*~,*.pyc
if has("win16") || has("win32")
    set wildignore+=.git\*,.hg\*,.svn\*
else
    set wildignore+=*/.git/*,*/.hg/*,*/.svn/*,*/.DS_Store
endif

" Properly disable sound on errors on MacVim
if has("gui_macvim")
    autocmd GUIEnter * set vb t_vb=
endif

" Color scheme
colorscheme monokai
"colorscheme flatland

" Custom colors
highlight SpecialKey ctermfg=LightGray
"highlight Special ctermfg=Green

" Custom shortcuts
nmap <leader>l :set list!<CR>
nnoremap <C-e> 2<C-e>
nnoremap <C-y> 2<C-y>

" Syntastic settings
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
