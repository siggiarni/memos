# Convert webm to MP4

    ffmpeg -i input.webm -movflags faststart -profile:v high -level 4.2 video.mp4

## Scaled version

    ffmpeg -i input.webm -movflags faststart -profile:v high -level 4.2 -vf "scale=iw/2:ih/2" video.mp4

    ffmpeg -i input.webm -movflags faststart -level 4.2 -vf scale=-1:640 output.mp4

    for i in *.avi; do ffmpeg -i "$i" "${i%.*}.mp4"; done

    for i in *.mov; do ffmpeg -i "$i" -movflags faststart -profile:v high -level 4.2 -vf "scale=iw/2:ih/2" "${i%.*}.mp4"; done

    for i in *.mov; do ffmpeg -i "$i" -movflags faststart -profile:v high -level 4.2 -vf scale=-1:640 "${i%.}.mp4"; done


    -i

    -movflags faststart

Move metadata about all packets to the start for better playback. 

<https://ffmpeg.org/ffmpeg-formats.html#mov_002c-mp4_002c-ismv>

    `-profile:v -level 4.2`

Set the H.264 feature profile to 4.2. This supports iPad Air and later and iPhone 5s and later.

<https://trac.ffmpeg.org/wiki/Encode/H.264#Compatibility>

    -vf

Filtergraph and an alias for -filter:v. Used to apply the scale filter on the width of the input file.

<https://ffmpeg.org/ffmpeg.html#filter_005foption>

----

<https://blog.addpipe.com/converting-webm-to-mp4-with-ffmpeg/>
<https://stackoverflow.com/questions/5784661/how-do-you-convert-an-entire-directory-with-ffmpeg>
