# Docker Commands Cheat Sheet

## Command cheat-sheet for docker and docker compose for quick access 

*11 August 2025*


## 1.Docker Version & Info
```bash
docker --version                # Show Docker version
docker info                     # Display system-wide information
```
---

## 2.Docker Images
```bash
docker pull <image>            # Download an image from Docker Hub
docker images                  # List local images
docker rmi <image_id|name>     # Remove an image
docker tag <image> <new_tag>   # Tag an image
docker build -t <name> .       # Build image from Dockerfile in current directory
```
---

## 3.Docker Containers
```bash
docker run <image>                 # Run container from image
docker run -d <image>              # Run container in detached mode (background)
docker run -it <image> /bin/bash   # Run container interactively with a bash shell

docker ps                      # List running containers
docker ps -a                   # List all containers (including stopped)
docker stop <container_id>     # Stop a running container
docker kill <container_id>     # Kill a running container immediately
docker rm <container_id>       # Remove a stopped container
docker exec -it <container_id> /bin/bash  # Open a shell inside a running container
```
---

## 4.Docker Container Logs & Stats
```bash
docker logs <container_id>     # Show logs of a container
docker logs -f <container_id>  # Follow logs output
docker stats <container_id>    # Show live resource usage stats
```
---

## 5.Docker Networking
```bash
docker network ls             # List networks
docker network create <name>  # Create a new network
docker network rm <name>      # Remove a network
docker network inspect <name> # Show detailed info about a network
```
---

## 6.Docker Volumes
```bash
docker volume ls             # List volumes
docker volume create <name>  # Create a volume
docker volume rm <name>      # Remove a volume
docker volume inspect <name> # Inspect a volume
```
---

## 7.Docker Compose (if you use docker-compose)
```bash
docker-compose up             # Build, (re)create, start containers
docker-compose up -d          # Start containers in detached mode
docker-compose down           # Stop and remove containers, networks, volumes
docker-compose logs           # View output logs from containers
docker-compose build          # Build or rebuild services
```
---

## 8.Cleanup Commands
```bash
docker system prune           # Remove unused data (dangling images, stopped containers, unused networks)
docker container prune        # Remove all stopped containers
docker image prune            # Remove dangling images
docker volume prune           # Remove unused volumes
```
---

## 9.Helpful Flags
```bash
-p <host_port>:<container_port> — Map ports from container to host

--name <container_name> — Assign a name to container

-v <host_path>:<container_path> — Mount a volume or folder

-e VAR=value — Set environment variables
```
---