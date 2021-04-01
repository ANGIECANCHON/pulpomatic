const GroupBy = require('../Utils/GroupBy')
const moment = require('moment')
const HumanAidService = require('../Services/HumanAidService')

const makeData = async (countryCode) => {
    const dataStore = await HumanAidService.iatidatastore(countryCode)
    let newObj = []

    dataStore.forEach(element => {
        let values = element.transaction_value
        let dates = element.transaction_value_date

        if (values && dates) {
            for (let i = 0; i < dates.length; i++) {
                let year = moment(dates[i], 'YYYY/MM/DD').year()
                newObj.push({ "year": year, "value": values[i] })
            }
        }
    })

    let dataGr = await GroupBy.groupBy(newObj, 'year')

    for (const key in dataGr) {
        dataGr[key].sort((a,b)=>a-b)
    }

    return dataGr
}

module.exports = {
    makeData
} 