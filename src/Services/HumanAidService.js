const Request = require('request-promise')

const iatidatastore = async (countryCode) => {
    const options = {
        uri: `https://iatidatastore.iatistandard.org/search/activity?q=recipient_country_code:${countryCode}`,
        headers: {
            'Content-Type': 'application/json',
        },
        json: true,
    }
    let response = await Request.get(options)
    response = response.response.docs
    return response
}

module.exports = { iatidatastore }
