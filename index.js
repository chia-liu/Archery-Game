var score = 0 
$("[class^=circle]").click(function(evt){
  var num = $(this).attr("data-label")
  // console.log(num)
  score += parseInt(num*10)
  updateGame()
})

function updateGame(){
  $(".score").text("Score: "+score)
}

function resetGame(){
  score = 0
  $(".shoot").remove()
  $(".target").removeClass("moving")
  updateGame()
}

$(window).keydown(function(evt){
  // console.log(evt.key)
  if (evt.key=="r"){
    resetGame()
  }
  if (evt.key=="k"){
    $(".target").toggleClass("moving")
  }
})

$(window).mousemove(function(evt){
  $(".mouseCircle")
    .css("left",evt.pageX+"px")
    .css("top",evt.pageY+"px")
})

$(".target").click(function(evt){
  var shoot = $("<div class=shoot></div>")
  shoot.css("left",evt.pageX-$(this).offset().left+"px")
    .css("top",evt.pageY-$(this).offset().top+"px")
  $(this).append(shoot)
})