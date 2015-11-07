//js/main.js

//navbar parallax effect

$(window).scroll(function() {
    var scrolledAmount;
    scrolledAmount = $(window).scrollTop();
    //console.log('i am scrolling');
    //console.log('scrolledAmount: ' + scrolledAmount);
    if (scrolledAmount > 0 && scrolledAmount < 500) {
      navTransparent(scrolledAmount);
    }
});

function navTransparent(scrolledAmount) {
  var nav = document.getElementById('top-nav');
  var brand;
  var menuItems;
  var fractionToMidBanner = (scrolledAmount / 200);
  var opacity;
  opacity = (1 - fractionToMidBanner) * 0.3;

  if (scrolledAmount > 0 && scrolledAmount <= 200) {
//                console.log('fractionToMidBanner: ' + fractionToMidBanner);
    nav.style.backgroundColor = 'rgba(50, 50, 50,' +  opacity + ')';
    //TODO make text also transparent
  } else if (scrolledAmount > 200 & scrolledAmount < 400) {
    nav.style.backgroundColor = 'rgba(50, 50, 50, 0)';
    //TODO make text also transparent
  } else if (scrolledAmount >= 400) {
    nav.style.backgroundColor = 'rgba(50, 50, 50, 0.7)';
    //TODO make text also opaque
  }
}
