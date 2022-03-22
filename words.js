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
        wordCount.innerHTML = `There are <strong> ${words.length} </strong> words in this sentence.`
        console.log(words);
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
                sent += `<mark style>${elem} </mark> `;
                // sent += `<span style="display: none">${elem} </span> `;
            }
        }
        outputElem.innerHTML = sent;
    } else {
        outputElem.innerHTML = " ";
        sentenceButton();
    }
};
// let longestWord = () => {
//     length: 0
// };

let longest = () => {
    const wordVal = wordInputElem.value;
    let words = wordVal.split(" ");
    var longestWord = " ";
    let sent = " ";
    for (let i = 0; i < words.length; i++) {
        let elem = words[i];
        // if ((hideWordsElem.checked == true) && (longestWord < elem)) {
        //     longestWord = elem;
        //     // sent += `<span style="display: none">${longestWord} </span> `;
        // sent += `<mark style= background: green>${longestWord} </mark>`;
        //     sent += `<mark style= background: #CB997E>${longestWord} </mark>`;
        // } else {
        //     sent += " ";
        // }
        if (elem.length > longestWord.length) {
            longestWord = elem;
            messageElem.innerHTML = `The longest word is: <mark style = "background: lightgreen">${longestWord}</mark> `
        }
        // messageElem.innerHTML = `The longest word is ${longestWord}`;
    }
    console.log(longestWord);

    // messageElem.innerHTML = sent;

}


hideWordsElem.addEventListener('click', function() {
    checkButton();
    longest();
});