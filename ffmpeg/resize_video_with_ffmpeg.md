# Resize video with FFMPEG

    ffmpeg -i input.mp4 -vf "scale=iw/2:ih/2" output.mp4

    ffmpeg -i input.mp4 -vf scale=-1:640 output.mp4

`-vf` is **Filtergraph** and an alias for `-filter:v`.It is used to apply the scale filter on the input file.

<https://trac.ffmpeg.org/wiki/FilteringGuide>
