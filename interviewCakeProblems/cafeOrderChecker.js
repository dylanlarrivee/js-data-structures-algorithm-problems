const orderChecker = function(takeOutOrders, dineInOrders, servedOrders) {
    let takeOutPointer = 0
    let dineInPointer = 0

    for (let i=0; i<servedOrders.length;i++) {
        if (servedOrders[i] == takeOutOrders[takeOutPointer]) {
            takeOutPointer++
        } else if (servedOrders[i] == dineInOrders[dineInPointer]) {
            dineInPointer++
        } else return false
    }
}
    
// }


