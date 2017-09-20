describe("05 - Verifica Reajuste Salarial", function(){
	it("Método reajustaSalario(280)", function(){
		expect(336).toBe(reajustaSalario(280));
	});
	
	it("Método reajustaSalario(300)", function(){
		expect(345).toBe(reajustaSalario(300));
	});
	
	it("Método reajustaSalario(700)", function(){
		expect(805).toBe(Number(reajustaSalario(700).toFixed()));
	});
	
	it("Método reajustaSalario(710)", function(){
		expect(781).toBe(Number(reajustaSalario(710).toFixed()));
	});
	
	it("Método reajustaSalario(1500)", function(){
		expect(1650).toBe(Number(reajustaSalario(1500).toFixed()));
	});
	
	it("Método reajustaSalario(2500)", function(){
		expect(2625).toBe(Number(reajustaSalario(2500).toFixed()));
	});
	
	it("Método reajustaSalario(8400)", function(){
		expect(8820).toBe(Number(reajustaSalario(8400).toFixed()));
	});
		
});