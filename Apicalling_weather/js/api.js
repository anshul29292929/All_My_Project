function getcityname(){
    let getcityid = document.querySelector(".city-name")
    var cityname = getcityid.value;
    geolocationapi(cityname);
    getcityid.value=""
};

let lat, lon;




function geolocationapi(cityname){
    url=`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=58af419ac7ab39d7ed0aca0e630df75a`
    fetch(url)
    .then((response) => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then((data) => {
        // Access the data and log the city name
        return data[0]
    })
    .then((value2)=>{
        lat = value2.lat;
        lon = value2.lon;
        getgeolocations(lat, lon);
    })
    .catch((error) => {
        // Handle errors
        console.error('Error:', error);
    })
    function getgeolocations(lat, lon){
        getweatherdetails(lat,lon);
    }
}


function getweatherdetails(lat, lon){
    url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=58af419ac7ab39d7ed0aca0e630df75a`
    fetch(url)
    .then((value1) => {
        if (!value1.ok) {
            throw new Error("Network response was not ok");
        }else{
            return value1.json();
        }
    }).then((anshul) =>{
        return anshul.main;
    }).then((value2)=>{
        printweatherelements(value2)
    })

}

function printweatherelements(objects) {
    var tar = document.querySelector(".return-window");
    for (const key in objects) {
        var newDiv = document.createElement('div');
        newDiv.className = 'divelement';
        var newLabel = document.createElement('label');
        newLabel.className = 'label-r';
        let rr=`${key} = ${objects[key]}`
        rr=rr.toUpperCase()
        newLabel.textContent = rr;
        newDiv.appendChild(newLabel);
        tar.appendChild(newDiv);
    }
}
