"use strict";

function getDogImage(userNum) {
    if (userNum < 3) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch (error => alert("Technical difficulties.  Please try again later!"));
     } else if (userNum > 50) {
        return alert("Please enter a value less than 50");
        } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch (error => alert("Technical difficulties. Please try again later!"));
        }
}

function displayResults(responseJson) {
    console.log(responseJson);
    $(".results").html("");
    responseJson.message.forEach(imgReturned => {
        $(".results").append(`<img src="${imgReturned}" class="results">`);
    });

    $(".results").removeClass("hidden");
}

function watchForm() {
    $("#dog-number-form").submit(e => {
        e.preventDefault();
        let userNum = $(`#dog-number-user`).val();
        getDogImage(userNum);
    });
}

$(function () {
    console.log('App is alive, waiting for input!');
    watchForm();
});