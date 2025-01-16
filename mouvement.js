// var x = 0 ;
// var y = -1000;

function mouvement(event){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	switch (event.keyCode) {
  case 106 :
  case 74 :
    vaGauche2();
  	break;
  case 108 :
  case 76 :
    vaDroite2();
  	break;
  case 105 :
  case 73 :
    vaHaut2();
  	break;
  case 107 :
  case 75 :
  	break;
  	}

}

function vaDroite(){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	x = x - 500;
	x = Math.max(x,-1000);
	fond.style.left = x + "px";
	narrationCase(x,y);
	/* Question  L*/
}

function vaDroite2(){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	xfin = x - 500;
	xfin = Math.max(xfin,-1000);
	var mouvement = setInterval(moov,5);
	function moov(){
	if (x <= xfin) {
		clearInterval(mouvement)
	} else {
		x -= 5;
		fond.style.left = x + "px";
		}
	}
	narrationCase(xfin,y);

}

function vaHaut(){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	y = y + 500;
	y = Math.min(y,0);
	fond.style.top = y + "px";
	narrationCase(x,y);

}


function vaHaut2(){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	yfin = y + 500;
	yfin = Math.min(yfin,0);
	var mouvement = setInterval(moov,5);
	function moov(){
	if (y >= yfin) {
		clearInterval(mouvement)
	} else {
		y += 5;
		fond.style.top = y + "px";
		}
	}
	narrationCase(x,yfin);
}

function vaGauche(){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	x = x + 500;
	x = Math.min(x,0);
	fond.style.left = x + "px";
	// alert(x+"  "+y);
	narrationCase(x,y);
}

function vaGauche2(){
	x = fond.offsetLeft;
	y = fond.offsetTop;
	xfin =  x + 500;
	xfin = Math.min(xfin,0);
	var mouvement = setInterval(moov,5);
	function moov(){
	if (x >= xfin) {
		clearInterval(mouvement)
	} else {
		x += 5;
		fond.style.left = x + "px";
		}
	}
	narrationCase(xfin,y);
}
