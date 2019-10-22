# TMUX

## The command prefix

	Ctrl-a

## Sessions

Create a session called _fnord_.

	tmux new -s fnord

### List sessions.

	tmux ls

### Attach to a session named _session-name_

	tmux attach -t session-name

### Kill session

	tmux kill-session -t session-name

### Create a window in a current session

	Prefix-a c

## Windows

### Help window

        h

### Rename window

	Prefix-a ,

### Kill window

        Prefix-a x

## Custom commands

* Next window = `prefix-a Ctrl-h`
* Next window = `prefix-a Ctrl-l`

* Split horz = `prefix-a -`
* Split vert = `prefix-a |`

Move between panes

	prefix-a h = Move left
        prefix-a j = Move up
        prefix-a k = Move down
        prefix-a l = Move right

Resize panes

	prefix-a Ctrl-h,j,k,l

