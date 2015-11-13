/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
  console.log("ready");
  $( "#one" ).show( "200000", function() {
    $( "#two" ).show("20000");
  });
    
  $( ".imgsmall" ).animate({
    opacity: "1.0",
    width: "30%",
    height: "50%"
  }, 5000, function() {
    // Animation complete.
    $('#second').show("10000");
    $( '.imgsmall2' ).animate({
    opacity: "1.0",
    width: "30%",
    delay: "2"
  }, 5000, function() {
    // Animation complete.
    $('#third').show("10000");
    $('#fourth').show("10000");
    $('#fourth').click(function(e) {
      console.log("hi");
      $('#hide').show("10000");
      $('#last').show("slow");
     });
  });
  });

  
});



