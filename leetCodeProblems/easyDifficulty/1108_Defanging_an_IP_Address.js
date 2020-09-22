
// 1108. Defanging an IP Address
// Easy

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // let tempArr = []
    let str = ""
    for (let i=0; i<address.length;i++){
        if (address[i] == ".") {
            // tempArr.push("[.]")
            str = str + "[.]"
        } else {
            // tempArr.push(address[i])
            str = str + address[i]
        }
    }
    
   // return tempArr.join('')
    return str
};


// One liner:
return address.split('.').join('[.]')