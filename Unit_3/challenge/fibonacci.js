// Create the `series` variable

const series =[0,1]

while (series.length < 10) {
    let lastElement = series.pop()
    let secondLastElement = series.pop()
    series.push(secondLastElement, lastElement, lastElement +secondLastElement)

};

console.log(series);


let magicWord = 'abracadabra'

let counter = 0;
while (counter < 10) {
    console.log(magicWord[counter]) // magicWord at position [0]
    counter++ // counter=1
}

// structure
// set a variable as a counter
// conditional determines if that counter has reached or exceeded some number
// code to run if the conditional evaluates to true.









// var series = [0, 1];
// let i = 0

//     while(let i = 0; i < 50; i =- 2) {
//         let series = fibArray[i];
//         let result = series + fibArray[i+1];
//         fibArray.push(result);
//         i++;
//     }
//     console.log(`${fibArray}`);



//     var series = [0,1];

//     while()





// while (i = 0; i < 10; i++) {
//   series.push(i);
// }

// console.log(series);

// for(let i = 0; i < 101; i++) {
//     numArray.push(i); // this is adding all of the numbers to the array.
// }



// // Print the Fibonacci sequence to the console
// console.log(series);
// // the first ten numbers should be
// // 0 1 1 2 3 5 8 13 21 34