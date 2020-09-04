
// const decksOfCards = function(cardsArr) {
//     // 
//     let map = new Map()

//     for (let i=0; i<cardsArr.length; i++) {
//         if (map.has(cardsArr[i])) {
//             let cardAmount = map.get(cardsArr[i])
//             map.set(cardsArr[i], cardAmount + 1)            
//         } else {
//             map.set(cardsArr[i], 1)
//         }
//     }

//     if (map.size !== 52) return 0
    
    
// }
[ 'd', 'e', 'd', 'n', 'a', 'l', ' ', 's', 'a', 'h', ' ', 'e', 'l', 'g', 'a', 'e', ' ', 'e', 'h', 't' ];


const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ];

const reverseHelper = function(leftPointer, rightPointer, message) {
    while (leftPointer<rightPointer) {
        let temp = message[leftPointer]
        message[leftPointer] = message[rightPointer]
        message[rightPointer] = temp
        leftPointer++
        rightPointer--
    }
    return message
}

const reverseWords = function(message) {
    let i = 0
    let j = message.length -1

    reverseHelper(i,j,message)

    let leftPointer = 0
    let rightPointer = 0
    for (i=0;i<=message.length; i++) {
        console.log("message[rightPointer]", message[rightPointer])
        if (message[rightPointer] == ' ' || rightPointer === message.length) {
            console.log("if test")
            reverseHelper(leftPointer,rightPointer -1,message)
            leftPointer = rightPointer + 1
        }
        rightPointer++
    }
    return message
}


reverseWords(message);

console.log(message.join(''));