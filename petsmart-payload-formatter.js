let oldPayload = [
    {
      "profile": "ps-oss-day-30",
      "dynamicData": {
        "cardExpire": "12/2022",
        "shippingLastName": "Tyagi",
        "shippingAddressTown": "Phoenix",
        "firstName": "Abhishek1",
        "shippingAddress2": "",
        "lastName": "Tyagi1",
        "shippingAddress1": "2901 W Agua Fria Fwy",
        "subscriptionQty": "1",
        "shippingAdressState": null,
        "cardType": "Mastercard",
        "shippingAddressZip": "85027",
        "shippingFirstName": "Abhishek",
        "subscriptionProductSku": "13868",
        "subscriptionProductName": "Top Paw® Ultra Absorbency Disposable Dog Liner Pads"
      },
      "targets": [
        {
          "destination": "atyagi16@sapient.com",
          "transport": "Email"
        }
      ]
    }
  ]
  
  
  
  
  
  
  
  
  
  
  const payloadFormatter = function(oldPayload) {
    let dynamicData = oldPayload[0].dynamicData;
    let optionalDataMap = new Map();
    let nameValObj = {};
    let optionalDataArray = [];
  
    for (let key of Object.keys(dynamicData)) {
      nameValObj = {
        name: "",
        value: "",
      };
      let updatedKey = key.replace(/([A-Z])/g, '_$1')
      nameValObj.name = updatedKey.toUpperCase();
      nameValObj.value = dynamicData[key];
      optionalDataArray.push(nameValObj);
    }
  let optionalDataObj = {
    "optionalData": optionalDataArray
  }
    return JSON.stringify(optionalDataObj, undefined, 2)
  };
  
  
  
  console.log(payloadFormatter(oldPayload))