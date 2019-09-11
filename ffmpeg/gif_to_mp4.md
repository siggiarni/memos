# FFMPEG

	ffmpeg -i animated.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" video.mp4


### Flags

`-i` filename

input file name

`-ss` position

Seek to given time position in seconds. "hh:mm:ss[.xxx]" syntax is also supported.

`-t` duration

Restrict the transcoded/captured video sequence to the duration specified in seconds. `"hh:mm:ss[.xxx]"` syntax is also supported.

[https://unix.stackexchange.com/a/1675](https://unix.stackexchange.com/a/1675)