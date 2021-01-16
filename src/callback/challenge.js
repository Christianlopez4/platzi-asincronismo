let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';
const API_CHARACTER = 'https://rickandmortyapi.com/api/character/';
const API_DIMENSION = 'https://rickandmortyapi.com/api/location/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttprequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

function getPersonajes() {
    fetchData(API_CHARACTER, function(error, data) {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    })
}

function getPersonaje(id) {
    fetchData(API_CHARACTER + id, function(error, data) {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    })
}

function getLocation(id) {
    fetchData(API_DIMENSION + id, function(error, data) {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    })
}

fetchData(API, function(error1, data1) {
    if (error1) {
        return console.error(error1);
    }
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if (error2) {
            return console.error(error2);
        }
        fetchData(data2.origin.url, function(error3,data3) {
            if (error3) {
                return console.error(erro3);
            }
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
});
