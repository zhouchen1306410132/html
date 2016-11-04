	function showPic(whichpic) {
						  if (!document.getElementById("placeholder")) return true;
						  var source = whichpic.getAttribute("src");
						  var placeholder = document.getElementById("placeholder");
						  placeholder.setAttribute("src",source);
						  return false;
						}
						
						function prepareGallery() {
						  if (!document.getElementsByTagName) return false;
						  if (!document.getElementById) return false;
						  if (!document.getElementById("imagegallery")) return false;
						  var gallery = document.getElementById("imagegallery");
						  var links = gallery.getElementsByTagName("img");
						  for ( var i=0; i < links.length; i++) {
						    links[i].onclick = function() {
						      return showPic(this);
							}
						    links[i].onkeypress = links[i].onclick;
						  }
						}

						function addLoadEvent(func) {
						  var oldonload = window.onload;
						  if (typeof window.onload != 'function') {
						    window.onload = func;
						  } else {
						    window.onload = function() {
						      oldonload();
						      func();
						    }
						  }
						}

					addLoadEvent(prepareGallery);