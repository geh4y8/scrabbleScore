describe('scrabbleScore', function() {
	it("returns the number of points for a given letter", function() {
	scrabbleScore("q").should.equal(10);
	});
  	it("returns the number of points for a given word", function() {
    scrabbleScore("desk").should.equal(9);
  	});
});
