const wordInputElem = document.querySelector(".wordInputElem");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCountElem");
const errorMessageElem = document.querySelector(".message");
const outputElem = document.querySelector(".outputElem");
const analyzeBtn = document.querySelector(".analyzeElem");
const hideWordsElem = document.querySelector(".hide");



let showWords = (words) => {
    const wordElements = words.map(word => {
        return `<span class="word ${word.type}">${word.word}</span>`
    });
    outputElem.innerHTML = wordElements.join("");
    wordCountElem.innerHTML = `There are <strong> ${words.length} </strong> words in this sentence.`;
}

analyzeBtn.addEventListener('click', () => {
    if (wordInputElem.value.trim().length === 0) {
        outputElem.innerHTML = " ";
        wordCountElem.innerHTML = 0;
        return;
    }

    const wordCounter = WordCounter(wordInputElem.value);
    const words = wordCounter.getWords();
    const test = wordCounter.test();

    showWords(words);

});

hideWordsElem.addEventListener('click', (event) => {

    const wordCounter = WordCounter(wordInputElem.value);
    const words = event.target.checked ? wordCounter.longerWords() : wordCounter.getWords();
    showWords(words);
});