# Rename all files to lowercase

	for f in *; do mv "$f" "$f.tmp"; mv "$f.tmp" "`echo $f | tr "[:upper:]" "[:lower:]"`"; done

<https://stackoverflow.com/questions/7787029/how-do-i-rename-all-files-to-lowercase>