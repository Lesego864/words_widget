const analyzeBtn = document.querySelector('.analyzeElem');
const outputElem = document.querySelector('.outputElem');
const wordInputElem = document.querySelector('.wordInputElem');
const wordCount = document.querySelector('.wordCount');
const messageElem = document.querySelector('.message');
const hideWordsElem = document.querySelector('.hide');



let sentenceButton = () => {
    const wordVal = wordInputElem.value;
    let words = wordVal.split(" ");
    for (let i = 0; i < words.length; i++) {
        let elem = words[i];

        if (elem.length > 4) {
            outputElem.innerHTML += `<mark style = "background: lightblue ">` + elem + `</mark>` + " ";
        } else {
            outputElem.innerHTML += elem + " ";
        }
        wordCount.innerHTML = `There are <strong> ${words.length} </strong> words in a sentence.`
    }


}

analyzeBtn.addEventListener('click', sentenceButton);

let checkButton = () => {
    const wordVal = wordInputElem.value;
    let words = wordVal.split(" ");
    let sent = " ";
    if (hideWordsElem.checked == true) {
        for (let i = 0; i < words.length; i++) {
            let elem = words[i]
            if (elem.length >= 5) {
                sent += `<mark>${elem} </mark> `
            }
        }
        outputElem.innerHTML = sent;
    } else {
        outputElem.innerHTML = " ";
        sentenceButton();
    }
}


hideWordsElem.addEventListener('click', checkButton);