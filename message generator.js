const nounArr = ['book', 'table', 'chair', 'computer', 'piano'];
const verbArr = ['go', 'paint', 'play', 'wear'];
const adjArr = ['pretty', 'sleepy', 'fast', 'cool', 'sweet', 'green'];

function randomIndex(arr) {
    return Math.floor(Math.random()*arr.length)
}

function generateMessage () {
    const noun = nounArr[randomIndex(nounArr)];
    const verb = verbArr[randomIndex(verbArr)];
    const adj = adjArr[randomIndex(adjArr)];
    return `I want to ${verb} but my ${adj} ${noun} is not around`;
}

console.log('This is my message generator project');
console.log(generateMessage());