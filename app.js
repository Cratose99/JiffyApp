const topics = ["Will Ferrell","Squidward","Simone Biles","Buddy the elf","Khalid"]

$("button").on("click", function() {
    var famousPerson = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
})


function getBtns() {
    for(i=0; i < topics.length; i++){
        $("#buttons").append(b);
        var btn = $("<button>")
        btn.addClass("gif");
        btn.text(topics[i]);
        btn.attr("dataName", topics[i])
        $("#buttons").append(b);
    }
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gif = $("#gif-input").val().trim();

}
