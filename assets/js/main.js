
window.onload = function(e){
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
  
}

function scrollToElementId(elementId) {
  var element = document.getElementById(id);
  if(element) element.scrollIntoView({behavior: "smooth"});
}

function getAnchor() {
  var currentUrl = document.URL,
  urlParts   = currentUrl.split('#');
  return (urlParts.length > 1) ? urlParts[1] : null;
}
