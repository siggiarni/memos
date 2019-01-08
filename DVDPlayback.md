# DVDPlayback

1. Start your system with pushed `Command` + `R` key
2. Open Terminal
3. Fill in `csrutil disable`
4. Restart your Mac
5. Open Terminal
6. Fill in `sudo perl -i.bak -pe "s/\000Internal\000/\000External\000/g" \ /System/Library/Frameworks/DVDPlayback.framework/Versions/A/DVDPlayback;`
7. Start your system with pushed `Command` + `R` key
8. Open Terminal
9. Fill in `csrutil enable`
10. Restart your Mac
