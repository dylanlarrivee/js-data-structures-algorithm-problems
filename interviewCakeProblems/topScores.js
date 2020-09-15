    
const unsortedScores = [37, 89, 41, 65, 91, 53, 44, 44, 100];
const HIGHEST_POSSIBLE_SCORE = 100;

const sortScores = function(unsortedScores, HIGHEST_POSSIBLE_SCORE) {
  let map = new Map()
  let finalArr = []
  for (let i=0; i<unsortedScores.length; i++) {
    if (map.has(unsortedScores[i])) {
      map.set(unsortedScores[i], map.get(unsortedScores[i] + 1))
    } else {
      map.set(unsortedScores[i], 1)
    }
  }

  for (let j=0; j<=HIGHEST_POSSIBLE_SCORE;j++) {
    if (map.has(j)) {
      for (let k=0;k<map.get(j);k++) {
        finalArr.push(j)
      }
    }
  }

  return finalArr
  // map.forEach((value, key, map) => {

  // })

}

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));