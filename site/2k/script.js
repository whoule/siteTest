$(document).ready( function () {
  
  $('#form1').on('submit', function (event) {

    // prevents the event's default behaviour from executing.
    event.preventDefault();

    //If the form is complete, take textarea values and append into body tag
    if(validate()) {
      var points = parseInt($('#adjective1').val());
      var fgPercent = parseInt($('#adjective2').val());
      var threePointers = parseInt($('#plural-noun').val()) * 3;
      var threePercent = parseInt($('#verb1').val());
      var freeThrows = parseInt($('#edible-object').val());
      var ftPercent = parseInt($('#monster1').val());
      var fastBreaks = parseInt($('#adjective3').val()) * 4;
      var assists = parseInt($('#monster2').val()) * 4;
      var totalRebounds = parseInt($('#verb2').val()) * 6;
      var steals = parseInt($('#steals').val()) * 6;
      var blocks = parseInt($('#blocks').val()) * 6;
      var postmoves = parseInt($('#postmoves').val()) * 5;

      points = points - (threePointers + freeThrows);
      points = points * 2;
      var myTeam = (points + fgPercent + threePointers + threePercent + freeThrows + ftPercent);
      myTeam = myTeam + (fastBreaks + assists + totalRebounds + steals + blocks + postmoves);

      $('#content').append(
        '<div id="para">' +
          '<p>Estimated earnings: ' + myTeam + '</p>' +
        '</div>'
        );
    }
});

//Checks each textarea for input and if it is empty, adds a red border around the box
//If it has a value, it removes the style attribute (thanks Stack Overflow!)
function validate() {
    
  var success = true;

  $('.input').each(function(i, item) {
      if ($(item).val() === "") 
      {
         console.log("Missing textarea input");
         success = false;
         $(item).attr("style","border:1px solid red;");
         //add style to item
      }
      else
      {
         $(item).removeAttr('style')
         // to remove border 
      }
   });

  return success;
}
});