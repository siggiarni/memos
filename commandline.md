## Directories

[Filesystem Hierarchy Standard](http://en.wikipedia.org/wiki//etc#Directory_structure)

## Root

<pre>/bin/</pre>

### Essential command binaries

<pre>/sbin/</pre>

- Executables used for system maintenance and/or administrative tasks.
- The sbin in <tt>/sbin</tt> is short for <em>system binaries</em>.

Host-specific system-wide configuration files

<pre>/etc/</pre>

Secondary hierarchy for read-only user data

<pre>/usr/</pre>

Variable files

<pre>/var/</pre>

— Files whose content is expected to continually change during normal operation of the system.
- Contains files to which the system writes data during the course of its operation.

## /usr/

<pre>/usr/sbin</pre>

Sama og <tt>/sbin/</tt>, bara ekki eins mikilvæg kerfi.

Locally installed system administration programs

<pre>/usr/local/sbin</pre>

## Environment variable

Environmental variables are a class of variables that tell the shell how to behave as a user works at the command line (i.e., in all-text mode) or in scripts (i.e., short programs).

- [Environment variable @ Wikipedia](http://en.wikipedia.org/wiki/Environment_variable)

_When bash starts it reads the following files every time you login. For the purposes of OS X, this means every time you open a new Terminal window._


HÆTTI HÉR

<pre>
/etc/profile
~/.bash_profile
~/.bash_login   (if .bash_profile does not exist)
~/.profile      (if .bash_login does not exist)
</pre>

### Að nota "/usr/local/":http://hivelogic.com/articles/using_usr_local

#### Compile Using --prefix

When compiling command line utilities, programs, and system tools, tell the system to install things into /usr/local. Just append --prefix=/usr/local to the ./configure command in the build process.

#### Set The Path

PATH lists all directories that the system searches for executable programs, thus eliminating the need to enter the absolute pathnames of programs in commands.

By default, tell the system to look in /usr/local for files first by editing your path. On Mac OS X, either create or edit a file called .bash_login in your home folder (note the ”.”, it’s a hidden file) and add the following line to it:

<pre>export PATH="/usr/local/bin:/usr/local/sbin:$PATH"</pre>

#### Specify the /usr/local Prefix in Scripts

When writing scripts, specify the full path to the executable you’ve installed in the first line of the script. So to specify a Ruby binary in /usr/local/bin, one would use a line like this:

<pre>#!/usr/local/bin/ruby</pre>

## Venjulegar aðgerðir

### Færa möppu

<pre>$ mv -fv SOURCE DEST</pre>

-f Do not prompt before overwriting existing files.
-v Operate verbosely.

### Copy the content of a folder another

You can copy the content of a folder /source to another existing folder /dest with the command

<pre>$ cp -a /source/. /dest/</pre>

-a    Same as -pPR options. Preserves structure and attributes of files but not directory structure.

### Ping á vefþjón

<pre>$ ping -c 5 192.168.0.1</pre>

-c Count. Stop after sending (and receiving) count ECHO_RESPONSE packets.

### Fá HTTP svar fá skrá á vefþjóni

curl -I https://www.google.se/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png

-I Fetch the HTTP-header only

### Prenta lista yfir skrár

<pre>$ ls -lshF</pre>

-l er use a long listing format.
-s er print the allocated size of each file, in blocks.
-h er with -l, print sizes in human-readable format (e.g., 1K, 234M, 2G).
-F append indicator (one of */=>@|) to entries.

### Upplýsingar um nettenginu

<pre>$ ifconfig</pre><pre>$ ifconfig en1</pre>

### Upplýsingar um process

<pre>$ top</pre>
<pre>$ top -U <notandi></pre>
<pre>$ top -ocpu</pre>
<pre>$ top -n #</pre>
<pre>$ top -ocpu -O+rsize -s 5 -n 20</pre>

### Aftengja disk

<pre>$ diskutil eject /Volumes/Nafn-a-disk</pre>

### Opna DMG

<pre>$ hdid stuff.dmg</pre>

## SSH

### Tengjast vél

<pre>$ ssh <user>@<host></pre>

### Aftengjast vél

<pre>$ logout</pre>

### Færa skrá á remote vél

<pre>$ scp <filename> <user>@<host>:<path><filename></pre>

### Sækja skrá af remote vél

<pre>$ scp <user>@<host>:<path><filename>. ("." þýðir mappan sem maður er í)</pre>

## DVD

### Búa til .iso

<pre>$ hdiutil makehybrid -o mappa-með-VIDEO_TS/ mappa-með-VIDEO_TS/</pre>

## Póstur

### Sjá stærð á pósthólfi:

<pre>$ du -ks Library/Mail</pre>

## Symbolic link

<pre>$ ln -s SOURCE TARGET</pre>

Note: Hvað er -s flag-ið? Eru til fleiri flögg?

Gott að vera í möppunni sem target-ið á að enda í.

Dæmi:
<pre>$ ln -s /Volumes/HDD/"Creative Cloud Files/" "Creative Cloud Files"</pre>

## Validate Filevault recovery key

<pre>$ sudo fdesetup validaterecovery</pre>

## Install/Reinstall FFMPG

<pre>brew install ffmpeg --with-libvpx</pre>
<pre>brew reinstall ffmpeg --with-libvpx</pre>
<pre>brew install ffmpeg --with-libass --with-libquvi --with-libvorbis --with-libvpx --with-opus --with-x265</pre>

## Convert mkv to mp4

<pre>$ ffmpeg -i video.mkv -c copy video.mp4</pre>

## Capture stream to mp4

<pre>ffmpeg -i rtsp://source_url_full_file_name -acodec copy -vcodec copy local_target_file_name.mp4</pre>

<pre>
ffmpeg -i input.m3u8 -acodec copy -vcodec copy output.mp4

ffmpeg -i input.m3u8 -b 900k -vcodec copy -r 60 -y output.mp4

ffmpeg -i input.m3u8 -c copy -map 0 -f segment -segment_time 600 -segment_format mp4 -bsf:a aac_adtstoasc "output.mp4"
</pre>


## Force eject CD

<pre>$ /usr/bin/drutil eject</pre>


### Gulp

To check the CLI and local version
<pre>$ gulp -v</pre>

To check the Installed project version run: `npm ls` and look for gulp
<pre>$ npm ls</pre>

Update the project specific version to 3.3.4 to solve that issue.
From a terminal in your project folder:
<pre>$ npm install gulp@3.3.4 --save</pre>

### Delete all .DS_store files

<pre>$ sudo find / -name ".DS_Store" -depth -exec rm {} \;</pre>

### How to tell a progressive JPEG

<pre>$ brew install imagemagick</pre>
<pre>
$ identify -verbose baseline.jpg | grep Interlace
  Interlace: None
</pre>
<pre>
$ identify -verbose progressive.jpg | grep Interlace
  Interlace: JPEG
</pre>

`Interlace: JPEG` is progressive.

### Linkchecker

<pre>linkchecker -F csv/UTF-8/results.csv -r 1 https://www.example.com/</pre>

### Python stuff

<pre>
$ python setup.py build
$ python setup.py install
</pre>

<pre>
$ pip install --user [package name]
</pre>

<pre>
$ pip install --user [package name]
</pre>

<pre>
# install command line tools
$ xcode-select --install

# if pip not installed
$ sudo easy_install pip

# show current pip version
$ pip --version

# upgrade pip
$ sudo pip install --upgrade pip
</pre>

### MOZjpeg

1. Install Docker

https://ariya.io/2016/02/easy-docker-on-os-x

2. Get MozJPEG

<pre>
git clone git://github.com/mozilla/mozjpeg.git
cd mozjpeg
git checkout v3.1
</pre>

3. In the current directory, create a `Dockerfile` with the following content

<pre>
FROM alpine:3.3
ADD . /source
RUN apk --update add autoconf automake build-base libtool nasm
RUN cd /source && autoreconf -fiv && ./configure --prefix=/opt/mozjpeg && make install
</pre>

4. Fire up docker and build MozJPEG

<pre>
docker build -t mozjpeg .
</pre>

#### Using MozJPEG in Docker

1. CD to the JPEG.  
2. Use the command below to compress.

`docker run -v $PWD:/img mozjpeg sh -c "/opt/mozjpeg/bin/cjpeg -quality 80 /img/INPUT.jpg > /img/OUTPUT.jpg”`

Do not change the INPUT/OUTPUT `/img/` path to the current dir you are in.

For details, see:  
https://ariya.io/2016/03/using-mozjpeg-via-docker


### Check for CORS

#### Sending a regular CORS request using cUrl

<pre>
curl -H "Origin: http://example.com" --verbose https://www.googleapis.com/discovery/v1/apis?fields=
</pre>

The response should include the `Access-Control-Allow-Origin` header.

#### Sending a preflight request using cUrl

<pre>
curl -H "Origin: http://example.com" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: X-Requested-With" \
  -X OPTIONS --verbose \
  https://www.googleapis.com/discovery/v1/apis?fields=
</pre>

If the preflight request is successful, the response should include the `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and  `Access-Control-Allow-Headers` response headers.

[How can you debug a CORS request with cURL?](http://stackoverflow.com/a/12179364/7616345)

### Change default screenshots directory

<pre>
$ defaults write com.apple.screencapture location ~/Downloads/
$  killall SystemUIServer
</pre>

### Update brew

<pre>
$ brew update
$ brew upgrade --all
</pre>


### Windows Virtual machine activation

**Show current licence**

<pre>
$ slmgr /dlv
</pre>

**Re-arm**

<pre>
$ slmgr /rearm
</pre>

* Requires reboot.
* Does not work on WinXP.

Find PID name

ps -p [PID] -o comm=
