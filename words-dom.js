const wordInputElem = document.querySelector(".wordInputElem");
const wordCountElem = document.querySelector(".wordCount");
const maxWordCountElem = document.querySelector(".maxWordCountElem");
const errorMessageElem = document.querySelector(".message");
const outputElem = document.querySelector(".outputElem");
const analyzeBtn = document.querySelector(".analyzeElem");
const hideWordsElem = document.querySelector(".hide");
// const keepTrackElem = document.querySelector(".keepTrack");
const lastSentenceElem = document.querySelector(".lastSentence");



let sentenceEntered = (words) => {
    const wordElements = words.map(word => {
        return `<span class="word ${word.type}">${word.word}</span>`
    });
    outputElem.innerHTML = wordElements.join("");
    wordCountElem.innerHTML = `There are <strong> ${words.length} </strong> words in this sentence.`;
    // localStorage.setItem('wordWidgetSentences', JSON.stringify(sentenceEntered));
}


const wordCounter = WordCounter();
analyzeBtn.addEventListener('click', () => {


    wordCounter.addSentenceObject();
    const sentenceArray = wordCounter.getSentenceArray();
    // console.log(sentenceArray);

    if (wordInputElem.value.trim().length === 0) {
        outputElem.innerHTML = " ";
        wordCountElem.innerHTML = 0;
        return;

    }
    // console.log(wordInputElem.value.trim());

    const wordCounter = WordCounter(wordInputElem.value);
    const words = wordCounter.getWords();
    const test = wordCounter.test();
    // const display = wordCounter.displayDetails();

    sentenceEntered(words);


});
// const myArr = [];
hideWordsElem.addEventListener('click', (event) => {
    // event.preventDefault();

    const wordCounter = WordCounter(wordInputElem.value);
    const words = event.target.checked ? wordCounter.longerWords() : wordCounter.getWords(wordInputElem.value);
    sentenceEntered(words);
});

lastSentenceElem.addEventListener('click', (event) => {
    return wordInputElem.value = event.target.textContent;

})