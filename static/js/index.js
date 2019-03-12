//Match title height
function MatchHeight() {
  $('.match')
    .matchHeight({})
  ;
}

//Functions that run when all HTML is loaded
$(document).ready(function() {
  MatchHeight(); 
});