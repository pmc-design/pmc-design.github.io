scrollToElementId(getAnchor());

document.addEventListener('DOMContentLoaded', (event) => {
  lightGallery(document.getElementById('animated-thumbnails'), {
    thumbnail:true,
    download:false
  });
})

document.addEventListener('click', function (event) {
    // click on a header link
    if( event.target.matches('.header a') ) {
      // Don't follow the link
      event.preventDefault();

      var id = event.target.attributes.href.value.slice(1);
      scrollToElementId(id);
    }
    
    // click on a contact link
    if( event.target.matches('a.contact-link') ) {
      // Don't follow the link
      event.preventDefault();

      var id = event.target.attributes.href.value.slice(1);
      scrollToElementId(id);
    }
  
    // click on gallery expand button
    if( event.target.matches('#gallery-expand-button') ) {
      // Don't follow the link
      event.preventDefault();

      var gallery = document.getElementById('animated-thumbnails');
      if (gallery.classList.contains('full')) {
        gallery.classList.remove('full');
      } else {
        gallery.classList.add('full');
      }
    }

    // other click to manage ...
    
}, false);

/**************
*  Functions  *
**************/
function scrollToElementId(elementId) {
  var element = document.getElementById(elementId);
  if(element) element.scrollIntoView({behavior: "smooth"});
}

function getAnchor() {
  var currentUrl = document.URL,
  urlParts = currentUrl.split('#');
  return (urlParts.length > 1) ? urlParts[1] : null;
}
