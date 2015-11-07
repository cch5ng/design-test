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
  var brand = document.getElementById('brand');
  var menuItems = document.getElementsByClassName('menu-item');
  var active = document.getElementsByClassName('active');
  console.log('menuItems: ' + menuItems);
  var fractionToMidBanner = (scrolledAmount / 200);
  var opacity;
  opacity = (1 - fractionToMidBanner) * 0.3;

  if (scrolledAmount > 0 && scrolledAmount <= 200) {
//                console.log('fractionToMidBanner: ' + fractionToMidBanner);
    nav.style.backgroundColor = 'rgba(50, 50, 50,' +  opacity + ')';
    brand.style.color = 'rgba(255, 255, 255,' + opacity + ')';
    Array.prototype.forEach.call(menuItems, function(menuItem) {
        menuItem.style.color = 'rgba(0, 0, 0,' + opacity + ')';
    });
    Array.prototype.forEach.call(active, function(activeItem) {
        activeItem.style.color = 'rgba(255, 255, 255,' + opacity + ')';
    });
  } else if (scrolledAmount > 200 & scrolledAmount < 400) {
    nav.style.backgroundColor = 'rgba(50, 50, 50, 0)';
    brand.style.color = 'rgba(255, 255, 255, 0)';
    Array.prototype.forEach.call(menuItems, function(menuItem) {
        menuItem.style.color = 'rgba(0, 0, 0, 0)';
    });
    Array.prototype.forEach.call(active, function(activeItem) {
        activeItem.style.color = 'rgba(255, 255, 255, 0)';
    });
    //TODO make text also transparent
  } else if (scrolledAmount >= 400) {
    nav.style.backgroundColor = 'rgba(50, 50, 50, 0.7)';
    brand.style.color = 'rgba(255, 255, 255, 1)';
    Array.prototype.forEach.call(menuItems, function(menuItem) {
        menuItem.style.color = 'rgba(0, 0, 0, 1)';
    });
    Array.prototype.forEach.call(active, function(activeItem) {
        activeItem.style.color = 'rgba(255, 255, 255, 1)';
    });
//TODO this is not getting applied b/c active is currently set at <li> level rather than internal <a> level
  }
}
