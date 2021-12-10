const request = require('request');
const geocode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=56195ec4945dda87dcc4a2ea779a25bd&query=Baripada'

// request({url: url, json: true}, (error, response) => {
// //    console.log(response.body)
//   if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')   
//     }
// })



geocode('Baripada', (error, data) => {
    console.log('Error:' + error);
    console.log('Data:' + JSON.stringify(data));

});

forecast(21.935,86.721,(error,data) => {
     console.log('Error:' + error);
    console.log('Data:' + data);
})