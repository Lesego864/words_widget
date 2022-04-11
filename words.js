let WordCounter = (sentence) => {

    // const words = sentence.split(" ");
    // const row = 1;
    const sentenceArray = [];
    // const sentenceObject = {
    //     sentence,
    //     totalWords,
    //     countWords,
    //     averageLength
    // }
    let getSentenceArray = () => {
        return sentenceArray
    }
    let addSentenceObject = () => {
        sentenceArray.push(sentence);
    }


    let getWords = (input) => {
        // console.log(input);
        const words = input.split(" ");

        const wordlist = words.map(word => {
            return {
                word,
                length: word.length,
                type: word.length > 4 ? "longer" : ""
            }
        });
        //console.log(wordlist);
        let longestWord = {
            length: 0
        };
        wordlist.forEach((word, index) => {
            if (word.length > longestWord.length) {
                longestWord = {...word, index }
            }
        });
        wordlist[longestWord.index].type = "longest";

        const longestWords = wordlist.filter(word => word.length === longestWord.length).forEach(word => word.type = "longest");
        return wordlist;
    }

    let longerWords = () => {
        return getWords().filter(word => word.length >= 5);
    }
    let test = () => {
            console.log("hello");
        }
        // let displayDetails = () => {
        //     const newRow = keepTrackElem.insertRow(row);
        //     var cell1 = newRow.insertCell(0);
        //     cell1.innerHTML = words;
        //     row++;

    // }
    return {
        getWords,
        longerWords,
        test,
        getSentenceArray,
        addSentenceObject
        // displayDetails
    }
}