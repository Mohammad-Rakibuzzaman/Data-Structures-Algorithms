function getAverage(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    let average = sum / scores.length;

    return average;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));