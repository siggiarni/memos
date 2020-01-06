# SSH

## Add public key to remote

(if not already done) generate a set of public and private ssh keys on your machine for your user with:

    $ ssh-keygen

Answer the questions in order to generate the set of keys.
copy your public key to the remote host:

    $ ssh-copy-id remote-user@remote-host

This will enable login-in from your username@host to remote-user@remote-host without being prompt with p/w authentication.

## Connect using a different port

    $ ssh username@remote -p 1234

