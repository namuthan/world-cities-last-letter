const City = require('./src/model/City')
const mongoose = require('mongoose')
require('dotenv').config()


const url = 'mongodb://' + process.env.MONGOOSE_USERNAME + ':' + process.env.MONGOOSE_PASS + '@cluster0-shard-00-00-cvse1.mongodb.net:27017,cluster0-shard-00-01-cvse1.mongodb.net:27017,cluster0-shard-00-02-cvse1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
mongoose.connect(url, {})
mongoose.Promise = global.Promise

exports.cities = function (query) {
    return new Promise(function (resolve, reject) {
        City
            .find({ city: query })
            .exec()
            .then(docs => {
                resolve(docs)
            })
            .catch(err => {
                reject(err)
            })
    });
}
