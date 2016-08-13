#A NodeJS + ExpressJs + Docker + Typescript service

[![Build Status](https://travis-ci.org/arunk13/InventoryService.svg?branch=master)](https://travis-ci.org/arunk13/InventoryService)

This is a node service using expressjs to host the APIs, typescript for coding and docker for 
containerizing. 
The docker images is uploaded to aruninfy13 account in dockerhub.

###To run the container from the image : 
docker run -p 49160:8081 aruninfy13/inventory_service

###The command used for building the docker image in local development:
docker build -t aruninfy13/inventory_service .

#Some useful links :
### Useful docker commands 
http://tecadmin.net/remove-docker-images-and-containers/

###How add local repository to git remot
https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

###To create Travis configurations
# install travis ruby command line utility
> sudo gem install travis
> travis --version
# encrypt DOCKER_EMAIL, DOCKER_USER & DOCKER_PASSWORD
> travis encrypt DOCKER_EMAIL=your-docker-hub-email@gmail.com --add env.global.DOCKER_EMAIL
> travis encrypt DOCKER_USER=your-docker-hub-username --add env.global.DOCKER_USER
> travis encrypt DOCKER_PASS=your-docker-hub-password --add env.global.DOCKER_PASS

