scrollToElementId(getAnchor());

document.addEventListener('click', function (event) {
    // click on a header link
    if( event.target.matches('.header a') ) {
      // Don't follow the link
      event.preventDefault();

      var id = event.target.attributes.href.value.slice(1);
      scrollToElementId(id);
    }

    // other click to manage ...

}, false);

/**************
*  Functions  *
**************/
function scrollToElementId(elementId) {
    console.log(elementId);
  var element = document.getElementById(elementId);
    console.log(element);
  if(element) element.scrollIntoView({behavior: "smooth"});
}

function getAnchor() {
  var currentUrl = document.URL,
  urlParts = currentUrl.split('#');
  return (urlParts.length > 1) ? urlParts[1] : null;
}
