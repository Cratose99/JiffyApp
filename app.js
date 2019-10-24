const topics = [
  "Will Ferrell",
  "Squidward",
  "Simone Biles",
  "Buddy the elf",
  "Khalid"
];

function getBtns() {
  for (i = 0; i < topics.length; i++) {
    $("#buttons").append(b);
    var btn = $("<button>");
    btn.addClass("gif");
    btn.text(topics[i]);
    btn.attr("dataName", topics[i]);
  }
}

$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#gif-input")
    .val()
    .trim();
  topics.push(gif);
  getBtns();
});
getBtns();

$(document).on("click", ".gif", function() {
  var person = $(this).attr("dataName");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    person +
    "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(response.data);
    for (var i = 0; i < results.length; i++) {
      //for each one assiging them a new div
      var gifDiv = $("<div>");
      //grabbing the raiting of each object
      var rating = results[i].rating;
      //assigning that raiting to a new p text value
      var p = $("<p>").text("Rating: " + rating);
      //creating a new img var assigned to personImage
      var personImage = $("<img>");
      //giving that image an original src value of the giphy link through dot notation
      personImage.attr("src", results[i].images.fixed_height.url);
      //giving that image an other value of the giphy stil image link through dot notation
      personImage.attr("other", results[i].images.fixed_height_still.url);
      //giving that image a class of dyanmic image to be used later to stop or start a gif
      personImage.attr("class", "dynamicImage");
      //then perepend that all to our newly made divs
      gifDiv.prepend(p);
      gifDiv.prepend(personImage);
      //then prepend that all to the DOM
      $("#gifs-go-here").prepend(gifDiv);
    }
  });
});
//handleing the stop start click
$(document).on("click", ".dynamicImage", function() {
  //this var is to grab the animated src value
  var srcCheck = $(this).attr("src");
  //this var is to grab the still other value
  var otherCheck = $(this).attr("other");
  //this flips the value of src to the value of other
  $(this).attr("src", otherCheck);
  //this flips the value of other to src
  $(this).attr("other", srcCheck);
});
