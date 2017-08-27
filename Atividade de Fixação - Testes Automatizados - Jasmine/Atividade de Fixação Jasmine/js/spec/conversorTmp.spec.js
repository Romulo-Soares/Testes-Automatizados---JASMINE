describe("01 - ConversorTmp", function(){
	
	var conTmp = new ConversorTmp(37);
	
	it("Método celsiusToFahrenheit()", function(){
		expect(98.6).toBe(Number(conTmp.celsiusToFahrenheit().toFixed(1)));
	});
	
	it("Método fahrenheitToCelsius()", function(){
		expect(2.8).toBe(Number(conTmp.fahrenheitToCelsius().toFixed(1)));
	});
	
	it("Método celsiusToKelvin()", function(){
		expect(310.15).toBe(Number(conTmp.celsiusToKelvin().toFixed(2)));
	});
	
	it("Método kelvinToCelsius()", function(){
		expect(-236.15).toBe(Number(conTmp.kelvinToCelsius().toFixed(2)));
	});
	
});
