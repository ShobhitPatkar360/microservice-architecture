#!/bin/bash

sudo docker container stop $(sudo docker ps -aq) || true && sudo docker rm $(sudo docker ps -aq) || true
sudo docker image rmi $(sudo docker image ls -aq) || true
docker image ls
sudo docker image rmi -f $(sudo docker image ls -aq) || true
cd service1/
ls
docker build -t image1 .
cd ./../service2/
docker build -t image2 .
cd ./../service3/
docker build -t image3 .
history
docker network create new_network
docker run -d --name container1 --network new_network -p 3001:3001 image1 
docker run -d --name container2 --network new_network -p 3002:3002 image2 
docker run -d --name container3 --network new_network -p 3003:3003 image3 