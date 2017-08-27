function reajustaSalario(salario){
	if(salario <= 280) return salario * 1.2;
	if(salario > 280 && salario <= 700) return salario * 1.15;
	if(salario > 700 && salario <= 1500) return salario * 1.1;
	return salario * 1.05;
};
