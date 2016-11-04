var a=1;
function funi2(){
	 // i2.onclick=function(){
		 var gallery = document.getElementById("imagegallery");
		  var links = gallery.getElementsByTagName("a");
		  	if(a<20 && b>4){
		  			a=a-4;
			  		for ( var i=0; i < links.length; i++) {
			  		 	 if(a<19){
			  		 	 		links[a]=links[i];
							  	 var source = 'img/'+a+'.jpg';
					  	 		links[a].setAttribute("href",source);
					  	 		a++;
				  	 		 }else{
				  	 		 	a=5;
						  	 	break;
						  }		
			  		}
		  	}
		  	a++;	
}
	var b=1;
function funi3(){
		 var gallery = document.getElementById("imagegallery");
		  var links = gallery.getElementsByTagName("img");
		  if(b<20 && a>4){
		  		b=b-4;
		  			for ( var i=0; i < links.length; i++) {
			  			if(b<19){
			  					links[b]=links[i];
							  	 var source = 'img/'+b+'.jpg';
							  	 links[b].setAttribute("src",source);
							  	 b++;
					  	}else{
						  	b=5;
						  	break;
						  }
				  		}
		 		}else{
		 			b=5;
		 		}
			  	b++;
}
var i=1;
function funi4(){
	 var gallery = document.getElementById("imagegallery");
		  var links = gallery.getElementsByTagName("img");
		  		// for ( var i=0; i < links.length; i++) 
		  			// if(i<links.length){
		  				
			  				if(i<links.length && i<5){
								var showtp1 =document.getElementById("placeholder");
								showtp1.setAttribute("src",links[i].getAttribute("src"));
								i=i+1;
			  				}else{
			  					var showtp=document.getElementById("showtp4").getAttribute("src");
								var showtp1 =document.getElementById("placeholder");
								showtp1.setAttribute("src",showtp);
			  				}
}

function funi1(){
		var i2=document.getElementById("i2");
		i2.addEventListener("click",funi2);
		i2.addEventListener("click",funi3);
		i2.addEventListener("click",funi4);
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

addLoadEvent(funi1);