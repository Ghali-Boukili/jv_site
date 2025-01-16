
function nouveauJeu(x,y){
	fond.style.display = "block";
	fond.style.left = x + "px";
	fond.style.top = y + "px";

	flecheHaut.style.display="block";
	flecheDroite.style.display="block";
	flecheGauche.style.display="block";


	narrationCase(x,y);
}
