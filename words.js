let analyzeButton = document.getElementById("analyzebtn");
let outputWord = document.getElementById("outputwordtext");

analyzeButton.addEventListener('click', () => {
    let input = document.getElementById("wordinput").value.split(" ").length;
    console.log(input);
    if (input > 4) {
        outputWord.innerHTML = ""
    } else {
        outputWord.innerHTML = "There are " + input + " words in your sentence."
    }
});