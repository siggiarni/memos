# Extract audio

    ffmpeg -i input-video.avi -vn -acodec copy output-audio.aac

`vn` is no video.

`acodec` copy says use the same audio stream that's already in there.
