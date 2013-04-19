describe("A suite", function() {
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});
});     


describe("A suit is just a function", function() {
	var a;              
	var b;
	
	it("and so is a spec", function() {
		a = true;
		b = false;
		
		expect(a).toBe(true);
		expect(b).not.toBe(true);
	});
	
	describe("Nested ")
}); 
      

describe("A suit of exceptions thrown", function() {
	var bar = function() {
		return a + 1;
	};
	 
   it("should throw an exception", function() {
   		expect(bar).toThrow(); 
   });
});
