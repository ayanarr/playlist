/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["I Miss You","Copycat","We Are Young","what do you want from me"];
var songImages=["https://bit.ly/2FCeaUw","https://bit.ly/2FCe67e","https://bit.ly/2T3oPM0","https://bit.ly/2sWOv1q"]
var artists =["Aaliyah","Billie Elish","Fun","Adam lambert"]


function displaySongInfo(){
    // BELOW Use f songs.forEach(function(song){
    songs.forEach(function(song){
      $("#songs").append("<p>"+song+"</p>");
    });

     artists.forEach(function(artist){
          $("#artists").append("<p>"+artist+"</p>");
     });
     
     songImages.forEach(function(songImage) {
         $("#images").append("< img src="+songImage+">");
     });

}

function emptySongInfo(){
    
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
