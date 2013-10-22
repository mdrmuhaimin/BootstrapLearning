window.onload =  loadShadowLine;
function loadShadowLine()
{
	var sline = document.getElementById("shadow-line");
	console.log(sline.innerHTML);
	var shade1 = "rgb(248, 249, 251)";
	var shade2 = 'rgb(187, 188, 189)';
	var shade1Amount = 50;
	var shade2Amount = 100;
	var styleProperty = "";
	var gradientDepth = 5;
	var divCount = 100/gradientDepth;
	//shade1Amount = 100;
	styleProperty = styleProperty+"width:"+(gradientDepth)+"%;float:left;";
	var gradientVariation = (100 - shade1Amount)/(divCount/2);
	var gradientDirection = 1;
	var insideHtml = "";
	for(var i=0; i<divCount; i++){
		if(i >= divCount/2){
			gradientDirection = -1;
		}
		stylePropertyComputed = styleProperty + "background: -webkit-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%, "+shade2+" "+shade2Amount+"%);"+
							"background: -o-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"+ 
							"background: -ms-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"+
							"background: -moz-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"+
							"background: linear-gradient(to top, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"; 
		shade1Amount = (shade1Amount + (gradientVariation * gradientDirection));	
		console.log("<div style = \""+stylePropertyComputed+"\">&nbsp</div>");	
		insideHtml += "<div style = \""+stylePropertyComputed+"\">&nbsp</div>";	
	}
	sline.innerHTML = insideHtml;
	
}
	// background: -webkit-linear-gradient(bottom, rgb(248, 249, 251) 80%, rgb(187, 188, 189) "+shade2Amount+"%);
	// background: -o-linear-gradient(bottom, rgb(248, 249, 251) 80%,  rgb(187, 188, 189) 100%);
	// background: -ms-linear-gradient(bottom, rgb(248, 249, 251) 80%,  rgb(187, 188, 189) 100%);
	// background: -moz-linear-gradient(bottom, rgb(248, 249, 251) 80%,  rgb(187, 188, 189) 100%);
	// background: linear-gradient(to top, rgb(248, 249, 251) 80%,  rgb(187, 188, 189) 100%);
function slnehtml(){
	var shade1 = "rgb(248, 249, 251)";
	var shade2 = 'rgb(187, 188, 189)';
	var shade1Amount = 50;
	var shade2Amount = 100;
	var styleProperty = "";
	var gradientDepth = 5;
	var divCount = 100/gradientDepth;
	styleProperty = styleProperty+"width:"+(gradientDepth)+"%;float:left;";
	var gradientVariation = (100 - shade1Amount)/(divCount/2);
	var gradientDirection = 1;
	for(var i=0; i<divCount; i++){
		if(i >= divCount/2){
			gradientDirection = -1;
		}
		styleProperty += "background: -webkit-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%, "+shade2+" "+shade2Amount+"%);"+
							"background: -o-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"+ 
							"background: -ms-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"+
							"background: -moz-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"+
							"background: linear-gradient(to top, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2Amount+"%);"; 
		shade1Amount = shade1Amount + (gradientVariation * gradientDirection);					
		sline.innerhtml = "<div style = "+styleProperty+">&nbsp</div>";
	}
}
