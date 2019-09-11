# Symbolic link

	$ ln -s SOURCE TARGET


* [http://man7.org/linux/man-pages/man1/ln.1.html](http://man7.org/linux/man-pages/man1/ln.1.html)
* `-s` make symbolic links instead of hard links
* Gott að vera í möppunni sem target-ið á að enda í.

## Dæmi

### Vísa local möppu á utanáliggjandi HDD. 

	$ cd
	$ ln -s /Volumes/HDD/"Creative Cloud Files/" "Creative Cloud Files"

### Vísa local möppu á Scripts í iCloud.

	$ cd ~/Library/Scripts
	$ ln -s /Users/sigurdurarnisvanbergsson/Library/Mobile\ Documents/com\~apple\~ScriptEditor2/Documents/Applications Applications