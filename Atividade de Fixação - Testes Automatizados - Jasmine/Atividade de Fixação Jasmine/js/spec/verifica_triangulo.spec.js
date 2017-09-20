describe("04 - Verifica Triangulo", function(){
	
	describe("Verifica Exisência do Triângulo", function(){
		it("Método isTriangle(3,3,3)", function() {
		 	 expect(isTriangle(3,3,3)).toBeTruthy();
		});
		
		it("Método isTriangle(3,3,7)", function() {
		  	expect(!isTriangle(3,3,7)).toBeTruthy();
		});
		
		it("Método isTriangle(3,4,7)", function() {
			expect(!isTriangle(3,4,7)).toBeTruthy();
		});
		
		it("Método isTriangle(0,0,0)", function() {
		  	expect(!isTriangle(0,0,0)).toBeTruthy();
		});
		
	});
	
	describe("Classifica Triângulo", function(){
		it("Método classificaTriangulo(3,3,3)", function(){
			expect("Equilátero").toBe(classificaTriangulo(3,3,3));
		});
		
		it("Método classificaTriangulo(3,3,4)", function(){
			expect("Isósceles").toBe(classificaTriangulo(3,3,4));
		});
		
		it("Método classificaTriangulo(3,5,6)", function(){
			expect("Escaleno").toBe(classificaTriangulo(3,5,6));
		});
		
		it("Método classificaTriangulo(0,0,0)", function(){
			expect("Não é um triângulo válido").toBe(classificaTriangulo(0,0,0));
		});
		
	});
});
