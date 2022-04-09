// //This is question 1
// let arr = [6, 2, 8, 9, 0, 1];
// let arr1 = [15, 2, 7, 8, 5, 11];
// let arr2 = [0, 16, 5, 14, 7, 10];
// let sum = 0; avg = 0; x = []

// function arrayavg(x) {

//     for (let i = 0; i < x.length; i++) {
//         sum += x[i];
//     }

//     avg = sum / x.length;
//     return avg;
// }

// console.log(arrayavg(arr));
// console.log(arrayavg(arr1));
// console.log(arrayavg(arr2));


//------------------------------------------------------------------
// //This is question 2
// let arr = [6, 2, 8, 9, 0, 1];
// let arr1 = [15, 2, 7, 8, 5, 11];
// let arr2 = [0, 16, 5, 14, 7, 10];
// let min = x[0]; x = [];

// function arrayMin(x) {

//     for (let i = 0; i < x.length; i++) {

//         if (x[i] <= min)
//             min = x[i];

//     }
//     return min;
// }
// console.log(arrayMin(arr));
// console.log(arrayMin(arr1));
// console.log(arrayMin(arr2));

//-------------------------------------------------------------------
//This is question 3
// let arr=["How","are","you","?"];
// let arr1=["I'm","good"];
// let arr2=["thanx","you"];
// let Maximum=long[0];

// function array_Length(long) {
//     for(let i=0; i< long.length ;i++){
// if (long[i].length>Maximum){
//     Maximum=long[i].length;
// }
// return Maximum;
//     }

// }
// console.log(array_Length(arr));
// console.log(array_Length(arr1));
// console.log(array_Length(arr2));

//--------------------------------------------------------------
//This is question 4



//----------------------------------------------------------------
//This is question 5
// let arr = [12, 16, 8, 23, 9, 15];
// let arr1 = [21, 31, 16, 3, 13, 34];
// let arr2 = [14, 21, 29, 13, 6, 14];
// let avg = 0; counter = 0; sum=0;
// function arraysum(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];


//         avg = sum / numbers.length;

//         if (numbers[i] >= avg) {
//             counter++;
//         }

//     }
//     return counter;
// }
// console.log(arraysum(arr));
// console.log(arraysum(arr1));
// console.log(arraysum(arr2));

//------------------------------------------------------------------
//This is question 6


// function arrayprime(num) {

//     for (let i = 0; i >= 0; i++) {
//         if ((num % num == 0) && (num % 1 == 0) {

//         }
//     }

//     return true;

//     {
//         return false;
//     }
// }

//------------------------------------------------------------------
//This is question 7

function arrayprime1(num1) {
    
    for (let i = 0; i < num1.length; i++) {
        
        if (arrayprime(num[i])) {
            return true;
        }
    }
    return false;
}

