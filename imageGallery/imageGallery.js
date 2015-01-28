/*
* The General Idea: 
*   We have a list of image descriptions inside anchor tags that have the image location as the value of their href attribute
*   We also have a single image after the description list
*   When we click on a link, we want to disable the default <a> behavior and instead make the image shown change to the image described by the link we clicked on
*   Notice that if a user has JavaScript disabled, the links will still take you to the image

* Our Approach: Event Delegation and Replacing the Src Attribute
*   Put a click handler on the list of links
*   If we click on a link, the container list will also receive the click event and all sorts of useful information about it (this is called 'event delegation').
*   The idea is to intercept the 'event' at a higher level than the link because it simplifies things (we don't have to assign an event listener to every link)
*   The event 'bubbles up' to the list where we check that the event's nodeName property is 'A'
*   If it the thing that was clicked on was an 'A', we replace the image's src attribute with the link's href
*/

// get handles for image list and initial placeholder image
var img_list = document.getElementById("image-list");
var placeholder = document.getElementById('placeholder');

// event listener on the image list 
// we put (e) inside the function call so that we can have access to the onclick event
img_list.onclick = function(e) {
  
  // prevent default behavior, i.e., make sure the link doesn't take us to that image on its own page
  e.preventDefault();
  
  // if the thing clicked on is an 'A' node, do the stuff in the code block
  if (e.target.nodeName === 'A')
  {
    var link_href = e.target.getAttribute('href');
    placeholder.setAttribute('src',link_href);
  }
}
