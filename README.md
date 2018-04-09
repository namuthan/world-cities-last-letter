# world-cities-last-letter

npm package that allows to query world cities. It has over 3.2 million record of cities around the globe. 

### Prerequisites

dotenv package is a prerequisit for this package. To install it,  copy the following command to the terminal
```
$ npm install --save dotenv
```
create a .env file in the project root directory adding to it the following key value pairs to point to the mongo db storing the cities 
```
MONGOOSE_USERNAME=node-api
MONGOOSE_PASS=node-api
```

for more information go to cocoapods(https://cocoapods.org/) 


## Installing

Can be installed with npm using the following command 

```
$ npm install --save world-cities-last-letter

```


## sample usage

```
const cities = require('world-cities-last-letter')

cities.cities('calgary').then(docs => {
    console.log(JSON.stringify(docs))
})
.catch(err => {
    console.log(err)
})

```
