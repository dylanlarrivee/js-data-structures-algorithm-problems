const response = await https.get(url, res => {
    //res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
        // body = JSON.parse(body)
        // var movieArr = []
        // for (let i=0; i<body.data.length;i++) {
        //     movieArr.push(body.data[i].Title)
        // }
        // console.log("movieArr", movieArr);
        // return movieArr
    });
    res.on("end", () => {
        var movieArr = []
        body = JSON.parse(body);
        for (let i=0; i<body.data.length;i++) {
            movieArr.push(body.data[i].Title)
        }
        console.log("movieArr", movieArr);
        return movieArr 
    });    
});  
return response; 