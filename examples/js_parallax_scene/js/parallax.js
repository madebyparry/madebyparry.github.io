window.addEventListener('scroll', function(e) {

  const target = document.querySelectorAll('.parallaxscroll');

  var scrolled = (window.pageYOffset/10);

  console.log(window.pageYOffset);

  var index = 0, length = target.length;

  for (index; index < length; index++) {
    var rate = scrolled * target[index].dataset.parallax;

    var pos = window.pageYOffset * target[index].dataset.parallax;

    target[index].style.transform = 'translate3d(0px, '+rate+'px, 0px)';

    console.log(target[index]);
  }


});

window.addEventListener('scroll', function(e) {

  const target = document.querySelectorAll('.parallaxscrollL2R');

  var scrolled = window.pageYOffset;

  console.log(window.pageYOffset);

  var index = 0, length = target.length;

  for (index; index < length; index++) {
    var rate = scrolled * target[index].dataset.parallax;

    var pos = window.pageXOffset * target[index].dataset.parallax;

    target[index].style.transform = 'translate3d('+rate+'px, 0px, 0px)';

    console.log(target[index]);
  }


});
