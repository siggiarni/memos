# Trim video

	$ ffmpeg -i source-file.foo -ss 0 -t 600 first-10-min.m4v
	$ ffmpeg -i source-file.foo -ss 600 -t 600 second-10-min.m4v
	$ ffmpeg -i source-file.foo -ss 1200 -t 600 third-10-min.m4v


## Trim video 2

	ffmpeg -i input.mp4 -ss 01:10:27 -to 02:18:51 -c:v copy -c:a copy output.mp4

This will cut out the section from about 1h19min to 2h18min losslessly, and will only take a few seconds to run.

`-i`

`-ss`

`-to`

`-c:v`

`-c:a`

`-copy`
