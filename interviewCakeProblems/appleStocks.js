

const stockPrices = [10, 8, 8, 8, 7, 4];

// function getMaxProfit(stockPrices) {
//   let maxProfit = stockPrices[1] - stockPrices[0];
//   let tempProfit = 0;

//   for (let i=1;i<stockPrices.length;i++) {
//     if (stockPrices[i] >= stockPrices[i-1]) {
//       tempProfit = tempProfit + (stockPrices[i] - stockPrices[i-1])
//       if (tempProfit > maxProfit) {
//         maxProfit = tempProfit
//       }
//     } else {
//       tempProfit = 0
//     }
//   }
// return maxProfit
// }

// Work your way through the array and find the difference between the min and max point
// Need at least 2 points to calculate this. Do we care about negative returns?
function getMaxProfit(stockPrices) {
  if (stockPrices.length<2) return "Need more than 2 prices"
  
  let maxProfit = stockPrices[1] - stockPrices[0];
  let minPrice = stockPrices[0];

  for (let i=1;i<stockPrices.length; i++) {
    let currentPrice = stockPrices[i]
    let potentialProfit = currentPrice - minPrice
    maxProfit = Max(maxProfit, potentialProfit)

    minPrice = Min(minPrice, currentPrice)

  }

return maxProfit
}

console.log(getMaxProfit(stockPrices));
// Returns 6 (buying for $5 and selling for $11)

// Work your way through the array and find the difference between the min and max point

function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
    }
  
    // We'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];
  
    // Start at the second (index 1) time
    // We can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // If we started at index 0, we'd try to buy *and* sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be *negative*--we'd return 0.
    for (let i = 1; i < stockPrices.length; i++) {
      const currentPrice = stockPrices[i];
  
      // See what our profit would be if we bought at the
      // min price and sold at the current price
      const potentialProfit = currentPrice - minPrice;
  
      // Update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  
      // Update minPrice so it's always
      // the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);
    }
  
    return maxProfit;
  }