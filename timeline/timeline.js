 
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >=0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)*0.5&&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
 

function callbackFunc() {
  var items = document.querySelectorAll(".timeline li");
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
/*
window.addEventListener("scroll", callbackFunc);*/


var scrollPos = 0;
window.addEventListener('scroll', function(){
  var items = document.querySelectorAll(".timeline li");
  if ((document.body.getBoundingClientRect()).top > scrollPos)
    //console.log("UP");
    {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
        items[i].classList.remove("in-view");
        }
      }
    }
	else
    //console.log("DOWN");
    {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
      }
    }
	scrollPos = (document.body.getBoundingClientRect()).top;
});
