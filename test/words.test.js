describe("My Word Widget", function() {

    it("Should be able to find the longest word", function() {
        const wordCounter = wordCounter("The cat jumped up.");
        const words = wordCounter.getWords();
        assert.equal("longest", words[2].type)
    });
    it("Should be able to find the longer and longest word", function() {
        const wordCounter = wordCounter("The cat jumped up over the blue fence");
        const words = wordCounter.getWords();
        assert.equal("longest", words[2].type)
        assert.equal("", words[5].type)
        assert.equal("longer", words[6].type)
    });
    // it("Should be ableto return the number of words in another sentence", function(){
    // 	const wordCounter = wordCounter();
    // 	wordCounter.parseSentence("The dog ran after the cat.")
    // 	assert.equal(6,wordCounter.wordCount());
    // });

});