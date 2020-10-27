function parallaxExec(element, distance, speed) {
  const item = $(element);
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
    parallaxExec($(this), window.scrollY, 0.3);
  });
}
