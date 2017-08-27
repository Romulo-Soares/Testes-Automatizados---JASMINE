describe("03 - Função de Atribuição", function(){
	
	it("Método atribuiConceito(7,7)", function(){
		expect("C").toBe(atribuiConceito(7,7));
	});
	
	it("Método atribuiConceito(8,8.5)", function(){
		expect("B").toBe(atribuiConceito(8,8.5));
	});
	
	it("Método atribuiConceito(9,10)", function(){
		expect("A").toBe(atribuiConceito(9,10));
	});
	
	it("Método atribuiConceito(9,8.7)", function(){
		expect("B").toBe(atribuiConceito(9,8.7));
	});
	
});
