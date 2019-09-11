# Convert webm to MP4

	ffmpeg -i video.webm -movflags faststart -profile:v high -level 4.2 video.mp4

Scaled version

	ffmpeg -i video.webm -movflags faststart -profile:v high -level 4.2 -vf "scale=iw/2:ih/2" video.mp4

`-i`

`-movflags`

`faststart`

`-profile`

`-level`


<https://blog.addpipe.com/converting-webm-to-mp4-with-ffmpeg/>

	for i in *.avi; do ffmpeg -i "$i" "${i%.*}.mp4"; done

	for i in *.mov; do ffmpeg -i "$i" -movflags faststart -profile:v high -level 4.2 -vf "scale=iw/2:ih/2" "${i%.*}.mp4"; done

<https://stackoverflow.com/questions/5784661/how-do-you-convert-an-entire-directory-with-ffmpeg>