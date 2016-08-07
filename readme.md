This is a node service using expressjs to host the APIs, typescript for coding and docker for 
containerizing. 
The docker images is uploaded to aruninfy13 account in dockerhub.

To run the container from the image - 
docker run -p 49160:8081 aruninfy13/inventory_service

The command used for building the docker image in local development - 
docker build -t aruninfy13/inventory_service .

Some useful links :
http://tecadmin.net/remove-docker-images-and-containers/ # InventoryService
