const analyzeBtn = document.querySelector('.analyzeElem');
const outputElem = document.querySelector('.outputElem');
const wordInputElem = document.querySelector('.wordInputElem');
const wordCount = document.querySelector('.wordCount');
const hideWordsElem = document.querySelector('.hide');

analyzeBtn.addEventListener('click', () => {
    const wordVal = wordInputElem.value;
    let words = wordVal.split(" ");

    for (let i = 0; i < words.length; i++) {
        let elem = words[i];

        if (elem.length > 4) {
            outputElem.innerHTML += "<mark>" + elem + "</mark>" + " ";
        } else {
            outputElem.innerHTML += elem + " ";
        }
    }

    wordCount.innerHTML = `There are <strong> ${words.length} </strong> words in a sentence.`




});