# Resize video with FFMPEG

	ffmpeg -i input.mp4 -vf "scale=iw/2:ih/2" output.mp4

`-vf` filtergraph

<https://trac.ffmpeg.org/wiki/FilteringGuide>