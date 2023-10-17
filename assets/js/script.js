function searchValue() { 
    const apiKey = "05871a22741fed4f47dfdbeee80de637";
    var sVal = document.getElementById("City").value; 
    const requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q="
    fetch(
      requestUrl +
        sVal +
        "&appid=" +
        apiKey
            )
            .then(function (response) {
        return response.json();
    })   
     .then(function (data) {
      for (var i = 0; i < data.length; i++) {
      const Latitude = data[i].lat;
      const Longitude = data[i].lon;
      const requestUrl1 = "https://api.openweathermap.org/data/2.5/forecast?";
      fetch(
        requestUrl1 +
         "lat=" +
         Latitude +
         "&" +
        "lon=" +
        Longitude +
        "&" +
        "units=" +
        "imperial" +
        "&appid=" +
        apiKey
      )
      .then(function (response) {
        return response.json();
    })   
     .then(function (data) {

      console.log(data);
      const cityName = data.city.name
      const todayTemp = data.list[0].main.temp
      const todayHumidity = data.list[0].main.humidity
      const todayDate = data.list[0].dt_txt
      const todayWind = data.list[0].wind.speed

      var cityNameToday = document.getElementById('cityName');
      cityNameToday.append(cityName);
      var tempToday = document.getElementById('temp');
      tempToday.append(todayTemp);
      var humidityToday = document.getElementById('humidity');
      humidityToday.append(todayHumidity);
      var dateToday = document.getElementById('date');
      dateToday.append(todayDate);
      var windToday = document.getElementById('wind');
      windToday.append(todayWind);

   
      const todayTemp1 = data.list[8].main.temp
      const todayHumidity1 = data.list[8].main.humidity
      const todayDate1 = data.list[8].dt_txt
      const todayWind1 = data.list[8].wind.speed

      var tempToday1 = document.getElementById('temp1');
      tempToday1.append(todayTemp1);
      var humidityToday1 = document.getElementById('humidity1');
      humidityToday1.append(todayHumidity1);
      var dateToday1 = document.getElementById('date1');
      dateToday1.append(todayDate1);
      var windToday1 = document.getElementById('wind1');
      windToday1.append(todayWind1);

      const todayTemp2 = data.list[16].main.temp
      const todayHumidity2 = data.list[16].main.humidity
      const todayDate2 = data.list[16].dt_txt
      const todayWind2 = data.list[16].wind.speed

      var tempToday2 = document.getElementById('temp2');
      tempToday2.append(todayTemp2);
      var humidityToday2 = document.getElementById('humidity2');
      humidityToday2.append(todayHumidity2);
      var dateToday2 = document.getElementById('date2');
      dateToday2.append(todayDate2);
      var windToday2 = document.getElementById('wind2');
      windToday2.append(todayWind2);

      const todayTemp3 = data.list[24].main.temp
      const todayHumidity3 = data.list[24].main.humidity
      const todayDate3 = data.list[24].dt_txt
      const todayWind3 = data.list[24].wind.speed


      var tempToday3 = document.getElementById('temp3');
      tempToday3.append(todayTemp3);
      var humidityToday3 = document.getElementById('humidity3');
      humidityToday3.append(todayHumidity3);
      var dateToday3 = document.getElementById('date3');
      dateToday3.append(todayDate3);
      var windToday3 = document.getElementById('wind3');
      windToday3.append(todayWind3);

      const todayTemp4 = data.list[32].main.temp
      const todayHumidity4 = data.list[32].main.humidity
      const todayDate4 = data.list[32].dt_txt
      const todayWind4 = data.list[32].wind.speed


      var tempToday4 = document.getElementById('temp4');
      tempToday4.append(todayTemp4);
      var humidityToday4 = document.getElementById('humidity4');
      humidityToday4.append(todayHumidity4);
      var dateToday4 = document.getElementById('date4');
      dateToday4.append(todayDate4);
      var windToday4 = document.getElementById('wind4');
      windToday4.append(todayWind4);

      const todayTemp5 = data.list[39].main.temp
      const todayHumidity5 = data.list[39].main.humidity
      const todayDate5 = data.list[39].dt_txt
      const todayWind5 = data.list[39].wind.speed


      var tempToday5 = document.getElementById('temp5');
      tempToday5.append(todayTemp5);
      var humidityToday5 = document.getElementById('humidity5');
      humidityToday5.append(todayHumidity5);
      var dateToday5 = document.getElementById('date5');
      dateToday5.append(todayDate5);
      var windToday5 = document.getElementById('wind5');
      windToday5.append(todayWind5);
    });
    };
    });
  };
//  });
// };


