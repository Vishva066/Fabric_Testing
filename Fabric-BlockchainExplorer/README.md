# Running Blockchain Explorer (Hyperledger Explorer 2.0)

###### Note: connection profile contains multiple files for different network configurations, choose and edit according to the network specifications.

###### in the connection profile if you have changes in the name/port/channelname/MSP id etc make changes accordingly.Specify the certificates paths for peer,CA etc.

###### in the docker-compose.yaml file give the network name as per the fabric network you are running. Also under the volume of explorer update the path location where the certificates of the network participants are stored(organisations folder)

###### Specify the connection profile file in the config.json file.

## Integrating with Fabric test network (cryptogen)
###### use test-network.json file, inside config.json file change to test-network.json
###### keep the network name as fabric_test in the docker-compose.yaml file

## Integrating with Fabric test network (CA)

###### use test-network-ca.json file, inside config.json file change to test-network-ca.json
###### keep the network name as fabric_test in the docker-compose.yaml file

## Integrating with Automobile network (CA)
###### use automobile-network.json file, inside config.json file change to automobile-network.json
###### keep the network name as fabric_automobile in the docker-compose.yaml file 

### Running the explorer
```
docker compose up
```
### Down the explorer
```
docker compose down
```