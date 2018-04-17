const request = require('superagent')

const URL = 'http://192.168.100.115:3000/fruits.json'
request.get(URL).end(callbackGet)

function callbackGet (err, res) {
    if (err) {
        console.log('err')
        return
    }
    console.log(res.body)
}