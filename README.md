# world-cities-last-letter

npm package that allows you to query world cities. It has over 3.2 million record of cities around the globe. 

### Prerequisites

dotenv package is a prerequisit for this package. To install it,  copy the following command to the terminal

```
$ npm install --save dotenv
```

create a file called .env in the project root directory adding to it the following key value pairs to point to the mongo database storing the cities 

```
MONGOOSE_USERNAME=node-api
MONGOOSE_PASS=node-api
```

## Installing

You can install this package using npm with the following command

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

// output 
/*
[
	{
		"_id": "5ac9f5889f58ff2d538b971a",
		"country": "ca",
		"city": "calgary",
		"latitude": "51.083333",
		"longitude": "-114.083333",
	},
	{
		"_id": "5ac9fab9b991b82d823fa8e5",
		"country": "us",
		"city": "calgary",
		"latitude": "31.6172222",
		"longitude": "-94.1191667",
	}
]
*/
```
