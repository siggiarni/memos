# DVDPlayback

* Start your system with pushed `Command + R` key
* Open Terminal
* Fill in `csrutil disable`
* Restart your Mac
* Open Terminal
* Fill in  


		sudo perl -i.bak -pe "s/\000Internal\000/\000External\000/g" \ /System/Library/Frameworks/DVDPlayback.framework/Versions/A/DVDPlayback;


* Start your system with pushed `Command` + `R` key
* Open Terminal
* Fill in `csrutil enable`
* Restart your Mac

