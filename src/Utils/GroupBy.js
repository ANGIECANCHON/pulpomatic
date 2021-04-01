const groupBy = async(array, key) =>{
    return array.reduce((lastValue, newValue) => {
        (lastValue[newValue[key]] = lastValue[newValue[key]] || []).push(newValue.value)

        return lastValue
    }, {})
}

module.exports = {
    groupBy
} 