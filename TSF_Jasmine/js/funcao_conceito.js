function atribuiConceito(nota1, nota2){
	
	var notaMedia = (nota1 + nota2)/2;
	
	if(notaMedia >= 9 && notaMedia <= 10) return "A";
	else if(notaMedia >= 7.5 && notaMedia <= 8.9) return "B";
	return "C";
	
	
};
