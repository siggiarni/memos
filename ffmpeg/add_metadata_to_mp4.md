
Create a `metadata` file

        ;FFMETADATA1
        title=Lorem ipsum
        artist=Lorem ipsum

        [CHAPTER]
        TIMEBASE=1/1000
        START=8000
        END=83000
        title=Lorem ipsum

        [STREAM]
        title=Lorem ipsum


Run command:

        ffmpeg -i /data/havana.mp4 -i metadata -map_metadata 1 -codec copy new_havana.mp4

<https://medium.com/@dathanbennett/adding-chapters-to-an-mp4-file-using-ffmpeg-5e43df269687>

