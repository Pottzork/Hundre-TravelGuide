var bergen;
var london;
var prague;
var bali;
var tokyo;
var cityArr = [];

fetch("../json/travel-json.json")
    .then(response => response.json())
    .then(data => {
        var bergenLikes = data.Bergen.likes
        var londonLikes = data.London.likes
        var pragueLikes = data.Prague.likes
        var baliLikes = data.Bali.likes
        var tokyoLikes = data.Tokyo.likes
        document.getElementById("bergenLikes").innerHTML = " " + bergenLikes;
        document.getElementById("londonLikes").innerHTML = " " + londonLikes;
        document.getElementById("pragueLikes").innerHTML = " " + pragueLikes;
        document.getElementById("baliLikes").innerHTML = " " + baliLikes;
        document.getElementById("tokyoLikes").innerHTML = " " + tokyoLikes;

        var bergenTemperature = data.Bergen.Temperature
        var londonTemperature = data.London.Temperature
        var pragueTemperature = data.Prague.Temperature
        var baliTemperature = data.Bali.Temperature
        var tokyoTemperature = data.Tokyo.Temperature
        document.getElementById("bergenTemperature").innerHTML = " " + bergenTemperature;
        document.getElementById("pragueTemperature").innerHTML = " " + pragueTemperature;
        document.getElementById("baliTemperature").innerHTML = " " + baliTemperature;
        document.getElementById("tokyoTemperature").innerHTML = " " + tokyoTemperature;
        document.getElementById("londonTemperature").innerHTML = " " + londonTemperature;

        bergen = data.Bergen
        london = data.London
        prague = data.Prague
        bali = data.Bali
        tokyo = data.Tokyo

        cityArr = [bergen, london, prague, bali, tokyo];

    })



function incrementValue(city) {
    var cityHeart = document.getElementById(city + "Heart")
    var value = parseInt(document.getElementById(city + "Likes").innerHTML);
    value = isNaN(value) ? 0 : value;

if (signedIn == true) {
        if(localStorage.getItem(city + "Likes" ) !== "finished"){
        value++;
        document.getElementById(city + "Likes").innerHTML = value;

        if (cityHeart.style.color != "red") {
            cityHeart.style.color = "red";
        } if (cityHeart.style.color == "red") {
            cityHeart.style.color = "none";
        }
    localStorage.setItem(city+ "Likes", "finished");
    } 
}
    else if (signedIn == false) {
        alert("You must be signed in to vote");
    }


}

//Filter functions
var filterChecked = [];


function filterSelected() {

    if (document.getElementById("selectFilter").value == "score") {

        cityArr.sort(function (a, b) {
            return parseFloat(b.likes) - parseFloat(a.likes);
        })
        for (i in cityArr) {
            var row = i + 1;
            document.getElementById(cityArr[i].Country).style.gridRow = row;
            row++;
            console.log(row);
        }
    }
    if (document.getElementById("selectFilter").value == "new") {

        cityArr.sort(function (a, b) {
            return parseFloat(a.likes) - parseFloat(b.likes);
        })
        for (i in cityArr) {
            var row = i + 1;
            document.getElementById(cityArr[i].Country).style.gridRow = row;
            row++;
            console.log(row);
        }
        document.getElementById("Indonesia").style.gridrow = 1;
    }

}

function checkboxChecked(boxID) {
    var checkedBox = document.getElementById(boxID);

    if (checkedBox.checked == true) {
        filterChecked.push(boxID);
        console.log(boxID + "checked");
    }
    else {

        filterChecked = filterChecked.filter(e => e !== boxID);
        console.log("filtered: " + boxID + "array: " + filterChecked);
    }
    console.log(filterChecked);
}

function applyFilter() {


    if (filterChecked.includes("beach", "shopping", "beer")){
        document.getElementById("Norway").style.display = "none";
        document.getElementById("Czech").style.display = "block";
        document.getElementById("Indonesia").style.display = "block";
        document.getElementById("Japan").style.display = "block";
        document.getElementById("England").style.display = "block";
        console.log("hideBergen");

    }


    else if (filterChecked.includes("beach", "shopping", "beer", "hiking")) {
        document.getElementById("Norway").style.display = "block";
        document.getElementById("Czech").style.display = "block";
        document.getElementById("Indonesia").style.display = "block";
        document.getElementById("Japan").style.display = "block";
        document.getElementById("England").style.display = "block";
        console.log("displayAll");
    }

    else {
        document.getElementById("Norway").style.display = "block";
        document.getElementById("Czech").style.display = "block";
        document.getElementById("Indonesia").style.display = "block";
        document.getElementById("Japan").style.display = "block";
        document.getElementById("England").style.display = "block";
    }
}
