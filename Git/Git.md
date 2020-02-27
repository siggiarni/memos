# Git

In simple terms, a commit is a snapshot of your local files, written in your local repository. 

## Remove files deleted with `rm`

	$ git add -u

This tells git to automatically stage tracked files, including deleting the previously tracked files.

<https://stackoverflow.com/a/1402793>

## Undo `git add`

	$ git reset <file>
	$ git reset


<https://stackoverflow.com/questions/348170/how-to-undo-git-add-before-commit>

## which Git branches are tracking which remote / upstream branch

    $ git branch -vv
    $ git remote show origin
