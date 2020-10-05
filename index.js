// H1 animation

$(window).scroll(function() {
  var topDivHeight = $(".headSection").height();
  var topDivWidth = $(".headSection").width();
  var trigger = (topDivHeight - topDivWidth * 0.25) - 100;

  if ($(window).scrollTop() >= topDivHeight) {
    $("h1").removeClass("animation");
    $("h1").css("opacity", "0");
  } else if ($(window).scrollTop() <= trigger) {
    $("h1").addClass("animation");
  }
});

// email toggle

var i = 0

while (i < $('.nameBoxCollapsed').length) {
  $('.nameBoxCollapsed')[i].addEventListener('click',function(){
    animation(this.id)
  });
  i++;
}

function animation(currentProfil){
  var activeProfil = document.getElementById(currentProfil);
  var profilClass = activeProfil.className;
  if (profilClass === "nameBoxCollapsed" ) {
    activeProfil.className = "nameBox";
  } else {
    activeProfil.className = "nameBoxCollapsed"
  }
}
