function ConversorTmp(temperatura){
	
	this.celsiusToFahrenheit = function(){
		return (1.8 * temperatura + 32);
	};
	
	this.fahrenheitToCelsius = function(){
		return ((temperatura - 32)/1.8);
	};
	
	this.celsiusToKelvin = function(){
		return (temperatura + 273.15);
	};
	
	this.kelvinToCelsius = function(){
		return (temperatura - 273.15);
	};
	
}
