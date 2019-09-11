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

	Prefix c

## Windows

To create a window in a current session, press Prefix c.

### Rename window

	Prefix-a ,

## Custom commands

* Next window = `prefix-a Ctrl-h`
* Next window = `prefix-a Ctrl-l`

* Split horz = `prefix-a -`
* Split vert = `prefix-a |`

Move between panes

	prefix-a h,j,k,l

Resize panes

	prefix-a Ctrl-h,j,k,l

