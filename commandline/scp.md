# SCP

## Copy all from remote to local files with white space

	scp user@server:"path/to\ folder/*" .

## Copy all from local to remove

	scp *.txt user@server:"path/to\ folder/"

## Copy multiple files from remote to local:

	$ scp your_username@remote.edu:/some/remote/directory/\{a,b,c\} ./

## Copy multiple files from local to remote:

	$ scp foo.txt bar.txt your_username@remotehost.edu:~
	$ scp {foo,bar}.txt your_username@remotehost.edu:~
	$ scp *.txt your_username@remotehost.edu:~

## Copy multiple files from remote to remote:

	$ scp your_username@remote1.edu:/some/remote/directory/foobar.txt \
	your_username@remote2.edu:/some/remote/directory/

Source: <http://www.hypexr.org/linux_scp_help.php>
