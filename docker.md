# Docker memo

## 1. Basics

### 1.1 Image

An image is a lightweight, stand-alone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files.

Images are read-only and come in layers.

The file system and configuration of our application which are used to create containers. 

For simplicity, you can think of an image akin to a git repository - images can be committed with changes and have multiple versions. When you do not provide a specific version number, the client defaults to latest.

* **Base images** are images that have no parent images, usually images with an OS like ubuntu, alpine or debian.
* **Child images** are images that build on base images and add additional functionality.
* **Official images** are Docker sanctioned images.
* **User images** are images created and shared by users like you. They build on base images and add additional functionality.

### 1.2 Container

A container is a runtime instance of an image—what the image becomes in memory when actually executed. It runs completely isolated from the host environment by default, only accessing host files and ports if configured to do so.

Containers, then, are the “machines” that run these images and add the layer of a writable file system on top.

Running instances of Docker images — containers run the actual applications. A container includes an application and all of its dependencies.

* Containers are immutable.
* Containers are disposable.
* Containers are ephemeral.
* Don’t store data in containers.  If you need to store data, do it in a volume
* Don’t create large images
* Don’t use a single layer image
* Don’t create images from running containers. In other terms, don’t use “docker commit” to create an image.
* Don’t use only the “latest” tag. 
* Don’t run more than one process in a single container.
* Don’t store credentials in the image. Use environment variables.
* Don’t run processes as a root user.
* Don’t rely on IP addresses.

https://developers.redhat.com/blog/2016/02/24/10-things-to-avoid-in-docker-containers/

### 1.3 Dockerfile

Dockerfile will define what goes on in the environment inside your container.

A Dockerfile is a text file that contains a list of commands that the Docker daemon calls while creating an image.

The Dockerfile contains all the information that Docker needs to know to run the app — a base Docker image to run from, location of your project code, any dependencies it has, and what commands to run at start-up.

The best part is that the commands you write in a Dockerfile are almost identical to their equivalent Linux commands.

---

* `FROM` starts the Dockerfile. It is a requirement that the Dockerfile must start with the `FROM` command. Images are created in layers.
* The `FROM` command defines your base layer. As arguments, it takes the name of the image.
* You can add the Docker Cloud username of the maintainer and image version, in the format `username/imagename:version`.

---

* `RUN` is used to build up the Image you're creating.
* For each `RUN` command, Docker will run the command then **create a new layer** of the image.

---

* `EXPOSE` creates a hint for users of an image which ports provide services.
* It is included in the information which can be retrieved via `$ docker inspect <container-id>`.

---

* `PUSH` pushes your image to Docker Cloud, or alternately to a private registry.	
---

* `ADD` The `ADD` instruction **copies** new files, directories or remote file URLs from `<src>` and adds them to the filesystem of the image at the path `<dest>`.

---

* `COPY` copies local files into the container.
* `COPY` The `COPY` instruction copies new files or directories from `<src>` and adds them to the filesystem of the container at the path `<dest>`.

---

* `CMD` defines the commands that will run on the Image at **start-up**.
* Unlike a `RUN`, this does not create a new layer for the Image, but simply runs the command.
* There can only be **one CMD** per a Dockerfile/Image.
* If you need to run multiple commands, the best way to do that is to have the CMD run a script.

https://docs.docker.com/engine/reference/builder/

* Write `.dockerignore` file
* Container should do one thing
* Understand Docker caching! Use `COPY` and `RUN` commands in proper order to utilize that.
* Merge multiple `RUN` commands into one
* Remove unneeded files after each step
* Use proper base image (alpine versions should be enough)
* Set `WORKDIR` and `CMD`
* Use `ENTRYPOINT` when you have more than one command and/or need to update files using runtime data
* Use `exec` inside entrypoint script
* Prefer `COPY` over `ADD`
* Specify default environment variables, ports and volumes inside Dockerfile

https://rock-it.pl/how-to-write-excellent-dockerfiles/

### 1.3 Docker daemon

The background service running on the host that manages building, running and distributing Docker containers.

### 1.4 Docker client 

The command line tool that allows the user to interact with the Docker daemon.

#### 1.5 Docker Store

A registry of Docker images, where you can find trusted and enterprise ready containers, plugins, and Docker editions.

https://store.docker.com

## 2. Common commands

https://docs.docker.com/engine/reference/commandline/cli/

### 2.1 List containers

https://docs.docker.com/engine/reference/commandline/ps/

`$ docker ps`

#### Options

<pre>
-a
</pre>

### 2.2 List images

https://docs.docker.com/engine/reference/commandline/images/

`$ docker images`

### 2.3 Run a command in a new container

https://docs.docker.com/engine/reference/commandline/run/

`$ docker run`

Running the `run` command with the `-it` flags attaches us to an interactive tty in the container. Now you can run as many commands in the container as you want

#### 2.3.1 Options

<pre>
-d     = Run container in background and print container ID
-p     = Publish a container's port(s) to the host
--name = Assign a name to the container
</pre>

The -d flag enables detached mode, which detaches the running container from the terminal/shell and returns your prompt after the container starts.

-d will create a container with the process detached from our terminal.  
-P will publish all the exposed container ports to random ports on the Docker host.  
-e is how you pass environment variables to the container.  
--name allows you to specify a container name.  
AUTHOR is the environment variable name and Your Name is the value that you can pass.  

#### 2.3.2 Example

`$ docker run -d -p 80:80 --name webserver nginx`

### 2.4 Manage containers

https://docs.docker.com/engine/reference/commandline/container/

`$ docker container COMMAND`

#### 2.4.1 List containers

`$ docker container ls`

#### Options

<pre>
-a
</pre>

### Build containers

docker build -t

-t parameter gives a name to the image.

`docker build -t <YOUR_USERNAME>/myfirstapp .`

The `.` indicates the current directory:

## Misc notes

### <none> images

`"< none >"` images are created when you build an image with the same repository/tag as one that has already been pulled. They are called dangling/untagged images. You can clean them up via:

`docker system prune`

http://www.projectatomic.io/blog/2015/07/what-are-docker-none-none-images/

`docker container prune`

https://docs.docker.com/engine/reference/commandline/container_prune/

`docker system prune`

https://docs.docker.com/engine/reference/commandline/system_prune/
