# rsync memo

## Basic use

```bash
$ rsync -a source/ destination
```

The trailing slash `(/)` at the end of the source is necessary to mean _“the contents of source”_.

## rsync dry run

```bash
$ rsync -anv source/ destination
```

## Sync to a remote server

### push

```bash
$ rsync -a ~/source/ username@remote_host:destination
```

### pull

```bash
$ rsync -a username@remote_host:/home/username/source destination
```

## Flags

### Archive

The `-a` option is a combination flag. It stands for _“archive”_ and syncs recursively and preserves symbolic links, special and device files, modification times, group, owner, and permissions. It is more commonly used than `-r` and is usually what you want to use.

    -a

### Recursive

    -r

#### Zip files

    -z

### Verbose

    -v

### Progress and partial

     -P

### Dry run

    -n

### Human readable format

    -h
