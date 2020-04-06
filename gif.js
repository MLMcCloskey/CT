// var topics = ["Daffy Duck", "Wile E Coyote", "Homer Simpson", "Krusty The Clown", "Milhouse", "Meatwad", "Master Shake", "Scooby Doo", "Brak", "Randy Marsh", "Mickey Mouse", "Spongebob"]
// var newCharacter = "";

// $("#characterCreation").on("click", function(){
//     if ($("#newChar").val() != ""){
//         newCharacter = $("#newChar").val();
//         console.log(newCharacter);
//         topics.push(newCharacter);
//         $("#buttons").append("<button class= 'buttons' data-character="+"'"+ newCharacter +"'" +">" + newCharacter + "</button>");
//         $("#newChar").val("");
//     }
// })

// for (i = 0; i < topics.length; i++){
    $(".buttons").append("<button class= 'buttons' data-character="+"'"+"Work It"+"'" +">" + "Work It" + "</button>")
// }



$(".buttons").on("click", function(){
    console.log("Work It!");
    $(".gif").html("")

    // var character = $(event.target).attr("data-character");

    var queryURL = "https://api.giphy.com/v1/gifs/random?"+ "api_key=uj63N4A8soZFVNYGMNyVY3Wmysk0GwAf&tag=lsp&limit=1";

    // console.log(character);
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
        var results = response.data;
        console.log(results);
        // for (var j = 0; j < results.length; j++){
            var characterDiv = $("<div id='anim'>");
            // var title = $("<p>").text("Title: "+ results[j].title);
            // var rating = $("<p>").text("Rating: " + results[j].rating);
            var characterImage = $("<img>");
            characterImage.attr({
                "src": results.images.fixed_height.url, 
                "class": 'animation',
                "data-state": 'animate',
                "data-still": results.images.fixed_height_still.url,
                "data-animate": results.images.fixed_height.url,
            });
            if (results != "undefined"){
                characterDiv.append(characterImage);
                // characterDiv.append(title);
                $(".gif").html(characterDiv);
            }
        // }
    })
})

$(".gif").on("click", function(event){
    var state = $(event.target).attr("data-state");
    console.log(event.target);
    if (state === "still"){
        $(event.target).attr("src", $(event.target).attr("data-animate"));
        $(event.target).attr("data-state", "animate");
    } else {
        $(event.target).attr("src", $(event.target).attr("data-still"));
        $(event.target).attr("data-state", "still");
    }
})