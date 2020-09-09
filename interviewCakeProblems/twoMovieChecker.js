const twoMovieChecker = function(flightLength, movieLengths) {
    let map = new Map()

    for (let i=0;i<movieLengths.length;i++) {
        let diff = movieLengths.length - movieLengths[i]
        if (map.has(diff)) {
            return true
        } else {
            map.set(diff, i)
        }
    }
    return false
}


const twoMovieChecker = function(flightLength, movieLengths) {
    let set = new Set()

    for (let i=0;i<movieLengths.length;i++) {
        let diff = movieLengths.length - movieLengths[i]
        if (set.has(diff)) {
            return true
        } else {
            set.add(diff)
        }
    }
    return false
}