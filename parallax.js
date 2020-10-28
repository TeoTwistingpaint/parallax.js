function parallaxExec(element, distance, speed) {
  const item = $(element);
  const speedFix = parseFloat(speed) <= 0.3 && parseFloat(speed) >= 0 ? speed : 0.3;
  item.css({
    "-webkit-transform": `translateY(${distance * speedFix}px)`,
    "-moz-transform": `translateY(${distance * speedFix}px)`,
    "-ms-transform": `translateY(${distance * speedFix}px)`,
    "-o-transform": `translateY(${distance * speedFix}px)`,
    transform: `translateY(${distance * speedFix}px)`,
  });
}

function parallax() {
  $(".parallax").each(function () {
    var dataSpeed = $(this).data("speed");
    dataSpeed = typeof dataSpeed === 'undefined' ? 0.3 : dataSpeed;
    parallaxExec($(this), window.scrollY, dataSpeed);
  });
}
