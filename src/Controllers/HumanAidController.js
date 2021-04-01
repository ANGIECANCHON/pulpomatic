'use strict'
const redis = require('redis')
const MakeData = require('../Utils/MakeData')

const REDIS_PORT = process.env.PORT || 6379

const redisClient = redis.createClient(REDIS_PORT);

const register = async (req, res) => {

    const countryCode = req.query.countryCode
    redisClient.get(countryCode, async (err, rep) => {
        if (err) {
            res.status(500).json({ error: err });
            return;
        }
        if (rep) {
            res.status(200).send({ success: true, data: JSON.parse(rep) });
        }
        else {
            const dataStore = await MakeData.makeData(countryCode)
            redisClient.set(countryCode, JSON.stringify(dataStore), 'EX', 60 * 60 * 24, (error, result) => {
                 if (error) {
                     res.status(500).json({ error: err })
                     return
                 }
             })

            return res.status(200).send({ success: true, data: dataStore })
        }
    })
}

module.exports = {
    register
}
