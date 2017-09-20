describe("02 - Retorna Dia da Semana", function(){
	
	it("Método retornaDiaSemana(1)", function(){
		expect("Domingo").toBe(retornaDiaSemana(1));
	});
	
	it("Método retornaDiaSemana(8)", function(){
		expect("inválido").toBe(retornaDiaSemana(8));
	});
	
	it("Método retornaDiaSemana(2)", function(){
		expect("Segunda").toBe(retornaDiaSemana(2));
	});
	
	it("Método retornaDiaSemana(9)", function(){
		expect("inválido").toBe(retornaDiaSemana(9));
	});
	
	
});
