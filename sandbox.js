
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
    
const stockPrices = [10, 8, 8, 8, 7, 4];

function getMaxProfit(stockPrices) {
  let maxProfit = stockPrices[1] - stockPrices[0];
  let tempProfit = 0;

  for (let i=1;i<stockPrices.length;i++) {
    if (stockPrices[i] >= stockPrices[i-1]) {
      tempProfit = tempProfit + (stockPrices[i] - stockPrices[i-1])
      if (tempProfit > maxProfit) {
        maxProfit = tempProfit
      }
    } else {
      tempProfit = 0
    }
  }
return maxProfit
}

console.log(getMaxProfit(stockPrices));
// Returns 6 (buying for $5 and selling for $11)