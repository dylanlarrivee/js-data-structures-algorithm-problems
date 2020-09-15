let wordString =   "Add milk and eggs, then add flour and sugar."

function isLetter(character) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
  }

  // create a function that takes a string and separates it by each word

function splitWords(wordString) {
    let wordStart = 0
    let wordLength = 0
    let wordsArr = []
    let map = new Map()

    for (let i=0;i<wordString.length;i++) {
        let currCharacter = wordString[i]
        if (isLetter(currCharacter) && i<wordString.length-1) {
            wordLength++
        } else {
            if (wordLength !==0) {
               // wordsArr.push(wordString.slice(wordStart, wordStart + wordLength))
               let word = wordString.slice(wordStart, wordStart + wordLength)
               let wordLower = word.toLowerCase();
               let wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1)

               if (map.has(word)) {
                 map.set(word, map.get(word) + 1);
               } else if (map.has(wordLower)) {
                 map.set(wordLower, map.get(wordLower) + 1);
               } else if (map.has(wordCapitalized)) {
                 map.set(wordLower, map.get(wordCapitalized) + 1);
                 map.delete(wordCapitalized);
               } else {
                map.set(word, 1);
               } 
            }
            wordStart = i +1
            wordLength = 0
        }
    }
    return map
}

// const wordMapMaker = function() {

// }


console.log(splitWords(wordString))