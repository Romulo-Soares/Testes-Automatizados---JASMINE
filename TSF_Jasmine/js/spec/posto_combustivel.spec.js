describe("06 - Verifica Total Abastacecimento", function(){
	it("Método totalAbastecimento(20, 'A')", function(){
		expect(62.08).toBe(Number(totalAbastecimento(20, 'A').toFixed(2)));
	});
	
	it("Método totalAbastecimento(25, 'A')", function(){
		expect(76).toBe(Number(totalAbastecimento(25, 'A').toFixed(2)));
	});
	
	it("Método totalAbastecimento(20, 'G')", function(){
		expect(71.04).toBe(Number(totalAbastecimento(20, 'G').toFixed(2)));
	});
	
	it("Método totalAbastecimento(25, 'G')", function(){
		expect(86.95).toBe(Number(totalAbastecimento(25, 'G').toFixed(2)));
	});
}); 