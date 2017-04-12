/* It doesn't matter what you call your variable, or what you call your id in your html as long as they correspond with each other */

var chair = $("#bob").attr("src");
/* hover over the video and it starts playing */
$("#bob").mouseover(function(){
  $("#bob").attr("src",chair+"&autoplay=1");
});
/* move the mouse away and it stops */ 
$('#bob').mouseout(function(){
$('#bob').attr('src',chair);
});
