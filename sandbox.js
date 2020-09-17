
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
    
let dineOutOrders = [17, 8, 24]
let dineInOrders = [12, 19, 2]
let servedOrders = [17, 8, 12, 19, 24, 2]

const servedInOrderCheck = function (
  dineOutOrders,
  dineInOrders,
  servedOrders
) {
  let dineOutOrdersPointer = 0;
  let dineInOrdersPointer = 0;
  let totalOrders = dineOutOrders.length + dineInOrders.length;

  for (let i = 0; i < totalOrders; i++) {
    if (dineOutOrders[dineOutOrdersPointer] == servedOrders[i]) {
      dineOutOrdersPointer++;
    } else if (dineInOrders[dineInOrdersPointer] == servedOrders[i]) {
      dineInOrdersPointer++;
    } else {
      return false;
    }
  }
  return true;
};

console.log(servedInOrderCheck(dineOutOrders,dineInOrders,servedOrders))