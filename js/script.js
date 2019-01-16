/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["I Miss You","Copycat","We Are Young","what do you want from me"];
var songImage=["https://bit.ly/2FCeaUw","https://bit.ly/2FCe67e","https://bit.ly/2T3oPM0"]
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
