var topics = [
  "Will Ferrell",
  "Squidward",
  "Simone Biles",
  "Buddy the elf",
  "Khalid"
];
console.log("working");

function getBtns(){
   
    $("#buttons-view").empty();
    for(i=0; i < topics.length; i++){
        var btns = $("<button>");
        btns.addClass("gif");
        btns.attr("data-name", topics[i])
        btns.text(topics[i]);
        $("#buttons-view").append(btns);
    }

}


$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    topics.push(gif);
    getBtns();
  });

getBtns();

$(document).on("click", ".gif", function() {
    $("#gifs-go-here").empty();
    var person = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          var rating = results[i].rating;
          var p = $("<p>").text("Rating: " + rating);
          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url); 
          personImage.attr("other", results[i].images.fixed_height_still.url)
          personImage.attr("class", "dynamicImage")
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);
          $("#gifs-go-here").prepend(gifDiv);
        }
      });
  });

  $(document).on("click", ".dynamicImage", function() {
      var srcCheck = $(this).attr("src");
      var otherCheck = $(this).attr("other"); 
    $(this).attr("src", otherCheck);
    $(this).attr("other", srcCheck); 

  });

