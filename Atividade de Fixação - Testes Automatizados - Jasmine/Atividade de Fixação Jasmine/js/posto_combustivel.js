function totalAbastecimento(quantidadeLitros, tipoCombustivel){
	var valorGasolina = 3.7;
	var valorAlcool = 3.2;
	var valorTotal = 0;
	
	if(tipoCombustivel === "A"){
		if(quantidadeLitros <= 20) 
			valorTotal = (valorAlcool * quantidadeLitros) * 0.97;
		else valorTotal = (valorAlcool * quantidadeLitros) * 0.95;
	}else if(tipoCombustivel === "G"){
		if(quantidadeLitros <= 20) 
			valorTotal = (valorGasolina * quantidadeLitros) * 0.96;
		else valorTotal = (valorGasolina * quantidadeLitros) * 0.94;
	}
	return valorTotal;
};
