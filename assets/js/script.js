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
      const requestUrl1 = "https://api.openweathermap.org/data/2.5/weather?";
      fetch(
        requestUrl1 +
         "lat=" +
         Latitude +
         "&" +
        "lon=" +
        Longitude +
        "&" +
        "&appid=" +
        apiKey
      )
      .then(function (response) {
        return response.json();
    })   
     .then(function (data) {
    // for (var i = 0; i < data.length; i++) {
    //     const wind = data[i].wind;
    //     const humidity = data[i].main.humidity;
    //     const temp = data[i].main.temp;
        console.log(data);
        // console.log(wind);
        // console.log(humidity);
        // console.log(temp);
    // };
     });
      };
    });
  };

