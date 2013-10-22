window.onload =  bootUpFunction;
function bootUpFunction()
{
	loadInsetShadowLine();
	loadOutsetShadowLine();
}
function loadInsetShadowLine()
{
	var shadowHtml = document.getElementById("shadow-inset-line");
	console.log(shadowHtml.innerHTML);
	var shade1 = "rgb(248, 249, 251)";
	var shade2 = 'rgb(187, 188, 189)';
	var shade1depth = 50;
	var shade2depth = 100;
	var styleProperty = "";
	var gradientDepth = 1;
	var divCount = 100/gradientDepth;
	var shade1Amount = 100;
	styleProperty = styleProperty+"width:"+(gradientDepth)+"%;float:left;";
	var gradientVariation = (100 - shade1depth)/(divCount/2);
	var gradientDirection = 1;
	var insideHtml = "";
	for(var i=0; i<divCount; i++){
		if(i >= divCount/2){
			gradientDirection = -1;
		}
		stylePropertyComputed = styleProperty + "background: -webkit-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%, "+shade2+" "+shade2depth+"%);"+
							"background: -o-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2depth+"%);"+ 
							"background: -ms-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2depth+"%);"+
							"background: -moz-linear-gradient(bottom, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2depth+"%);"+
							"background: linear-gradient(to top, "+shade1+" "+shade1Amount+"%,  "+shade2+" "+shade2depth+"%);"; 
		shade1Amount = (shade1Amount - (gradientVariation * gradientDirection));	
		console.log("<div style = \""+stylePropertyComputed+"\">&nbsp</div>");	
		insideHtml += "<div style = \""+stylePropertyComputed+"\">&nbsp</div>";	
	}
	shadowHtml.innerHTML = insideHtml+"<div style='clear: both;'>&nbsp;</div>";
	
}
function loadOutsetShadowLine()
{
	var shadowHtml = document.getElementById("shadow-outset-line");
	console.log(shadowHtml.innerHTML);
	var shade1 = 'rgb(187, 188, 189)';
	var shade2 = "rgb(248, 249, 251)";
	var shade1depth = 0;
	var shade2depth = 50;
	var styleProperty = "";
	var gradientDepth = 1;
	var divCount = 100/gradientDepth;
	var shade2Amount = 0;
	styleProperty = styleProperty+"width:"+(gradientDepth)+"%;float:left;";
	var gradientVariation = (100 - shade1depth)/(divCount/2);
	var gradientDirection = 1;
	var insideHtml = "";
	for(var i=0; i<divCount; i++){
		if(i >= divCount/2){
			gradientDirection = -1;
		}
		stylePropertyComputed = styleProperty + "background: -webkit-linear-gradient(bottom, "+shade1+" "+shade1depth+"%, "+shade2+" "+shade2Amount+"%);"+
							"background: -o-linear-gradient(bottom, "+shade1+" "+shade1depth+"%,  "+shade2+" "+shade2Amount+"%);"+ 
							"background: -ms-linear-gradient(bottom, "+shade1+" "+shade1depth+"%,  "+shade2+" "+shade2Amount+"%);"+
							"background: -moz-linear-gradient(bottom, "+shade1+" "+shade1depth+"%,  "+shade2+" "+shade2Amount+"%);"+
							"background: linear-gradient(to top, "+shade1+" "+shade1depth+"%,  "+shade2+" "+shade2Amount+"%);"; 
		shade2Amount = (shade2Amount + (gradientVariation * gradientDirection));	
		console.log("<div style = \""+stylePropertyComputed+"\">&nbsp</div>");	
		insideHtml += "<div style = \""+stylePropertyComputed+"\">&nbsp</div>";	
	}
	shadowHtml.innerHTML = insideHtml+"<div style='clear: both;'>&nbsp;</div>";
	
}
