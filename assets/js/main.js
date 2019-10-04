
window.onload = function(e){
  document.addEventListener('click', function (event) {
    // click on a header link
    if( event.target.matches('.header a') ) {
      // Don't follow the link
      event.preventDefault();

      var id = event.target.attributes.href.value.slice(1);
      var element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth"});
    }
    
    // other click to manage
    
  }, false);
  
}
