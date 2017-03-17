const key = "e764a6261a40993c03312c42b3364abb",
query = "84015",
api = `http://api.openweathermap.org/data/2.5/weather?zip=${query}&units=imperial&appid=${key}`;


// const weather = {};

// const getWeather=() =>{ 
//    fetch(api)
//   .then(res=>res.json())
//   .then(res=> ({
//       city: res.name,
//       temp: res.main.temp,
//       cond: res.weather[0].description
//   }))
//   .then(res=>render(res))
//   .catch(res=>console.log('Issue with promise. Log:'+res))
//   getWeather(weather)
// }

export default (weather)=>fetch(api)
                .then(res=>
                    res.okay?
                    res.json():
                    Promise.reject(res)
                .then(res=> ({
                    city: res.name,
                    temp: res.main.temp,
                    cond: res.weather[0].description
                    })))
                