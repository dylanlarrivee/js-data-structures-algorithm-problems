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
    // check for any extra orders at the end of takeOutOrders or dineInOrders
    if (dineInOrdersIndex != dineInOrders.length ||
      takeOutOrdersIndex != takeOutOrders.length) {
   return false;
}
  }
  return true;
};

console.log(servedInOrderCheck(dineOutOrders,dineInOrders,servedOrders))

