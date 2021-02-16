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
        console.log(document.getElementById('bergenLikes').value);
    })


function incrementValue(city) {
    var cityHeart = document.getElementById(city + "Heart")
    var value = parseInt(document.getElementById(city + "Likes").innerHTML);
    value = isNaN(value) ? 0 : value;
    var newValue = value + 1;
    value++;
    
    document.getElementById(city + "Likes").innerHTML = value;

    if (cityHeart.style.color != "red") {
        cityHeart.style.color = "red";
    } if (cityHeart.style.color == "red") {
        cityHeart.style.color = "none";
    }



}


// function incrementValue() {
//     var bergenHeart = document.getElementById('bergenHeart')
//     var value = parseInt(document.getElementById('bergenLikes').innerHTML);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('bergenLikes').innerHTML = value;


//     if (bergenHeart.style.color != "red") {
//         bergenHeart.style.color = "red";
//     } if (bergenHeart.style.color == "red") {
//         ergenHeart.style.color = "none";
//     }


// data.destinations['Europe'][0].country   // Sentra
// data.destinations['Europe'][0].city   // Maxima
// data.destinations['Europe'][0].likes   // 2

