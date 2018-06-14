//setting up variables


var buttons;
var textValue;
var arrayCount = 0;
var gifCount = 10;



$(document).ready(function(){


var playerArray = ["Sidney Crosby", "Jamie Benn", "Joe Thornton", "Wayne Gretzky", "Bobby Orr",
"Mark Messier", "Mitch Marner", "Matt Martin", "Ryan Getzlaf", "Auston Mathews", "John Tavares",
"Claude Giroux", "Mike Modano", "Jack Eichel", "Bobby Ryan", "Eric Staal", "Erik Karlsson"];


//creating the buttons for the Array

function startingArray(){

    $("#buttonArea").empty();

    for(var i = 0; i < playerArray.length; i++){

        var buttons = $("<button>");

        buttons.addClass("createGif");

        buttons.attr("data-name", playerArray[i]);

        buttons.text(playerArray[i]);


        $("#buttonArea").append(buttons);

        

    }
}

startingArray();




//set up on click that creates a button
$("#submitButton").on("click", function(){

    event.preventDefault();

    var textValue = $("#searchBox").val().trim();

    playerArray.push(textValue);

    startingArray();

    $("#searchBox").val(" ");

    return false;
  
    
});



//creating click function for when added buttons are pressed
$("#buttonArea").on("click", ".createGif", function(){

    var selectedPlayer = $(this).data("name");
    
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + selectedPlayer + "&api_key=dc6zaTOxFJmzC&limit=10";
    

    $.ajax({
        url:queryUrl,
        method: "GET"
    }).then(function(response){
       
        for(var i = 0; i < response.data.length; i++){

        
            var rating = response.data[i].rating;
    
            var p = $("<p>").text("Rating: " + rating);
    
            var gifItself = $("<img>").attr( "src", response.data[i].images.original.url);
    
            $("#gifArea").append(p);
            $("#gifArea").append(gifItself);

        
        }

    });

    $("#gifArea").empty();
})
    


//set up click function for gif to only play when clicked

//set up function for gif to freeze when clicked again





});

