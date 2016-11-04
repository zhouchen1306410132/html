						var a=18;
						function funi02(){
							 // i2.onclick=function(){
								 var gallery = document.getElementById("imagegallery");
								  var links = gallery.getElementsByTagName("a");
								  	if(a>=1){
								  			var j=links.length;
								  			for(var i=links.length-1;i>-1;i--){
								  				links[j]=links[i];
								  				links[j].setAttribute("href",links[i].getAttribute("href"));
								  				j--;
								  			}
								  			var showtp1=document.getElementById("a001");
								  			var source = 'img/'+a+'.jpg';
								  			showtp1.setAttribute("href",source);
								  			a--;
								 		}else{
								 			a=18;
								 		}
								  	// a--;	
						}
							var b=18;
						function funi03(){
								 var gallery = document.getElementById("imagegallery");
								  var links = gallery.getElementsByTagName("img");
								  if(b>=2){
								  		// b=b-4
								  			// for ( var i=0; i < links.length; i++) {
								  			var j=links.length;
								  			for(var i=links.length-1;i>-1;i--){
								  				links[j]=links[i];
								  				links[j].setAttribute("src",links[i].getAttribute("src"));
								  				j--;
								  			}
								  			var showtp1=document.getElementById("showtp1");
								  			var source = 'img/'+b+'.jpg';
								  			showtp1.setAttribute("src",source);
								  			b--;
								 		}else{
								 			b=18;
								 		}
						}
						function funi04(){
								var showtp=document.getElementById("showtp1").getAttribute("src");
								var showtp1 =document.getElementById("placeholder");
								showtp1.setAttribute("src",showtp);

						}

						function funi01(){
								var i1=document.getElementById("i1");
								// i1.addEventListener("click",funi02);
								i1.addEventListener("click",funi03);
								i1.addEventListener("click",funi04);
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
						
					addLoadEvent(funi01);