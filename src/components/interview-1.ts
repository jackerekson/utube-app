

//Make a function that takes in an array of strings, and returns the array deduped
export const removeDuplicatesFromArray = (arr: string[]) => {
    let obj = {};
    arr.forEach( (elem) => {
        if( !obj[elem] ){
            obj[elem] = true;
        }
    })
    return Object.keys( obj );
}

const test1 = ['tom', 'john', 'tom', 'jim']; //expect 'tom', 'john', 'jim'
const test2 = ['ice', 'sugar', 'ice', 'milk']; //expect 'tom', 'john', 'jim'
console.log(removeDuplicatesFromArray(test1));


/**************************************************/
//Return whether or not the string is a palindrome
const isPalindrome = (str: string):boolean => 
    str === str.split('').reverse().join('')

//mom, racecar, dood, tattarrattat

const result = isPalindrome( "mom" )



const myArr = [1,2,3,4,5,6];

//map myArr and double each item 
//filter myArr and remove any item that is even
//find the first item that is a multiple of 3
//loop over myArr and console.log the value
//reduce myArr to find the sum of all the items
const doubleArr = myArr.map(e => e+e);
const filterArr = myArr.filter(e => (e%2!==0));
const item = myArr.find(e => (e%3===0))
myArr.forEach(e=> console.log(e));
const sum = myArr.reduce( (acc, e) => {
    return acc + e;
}, 0)
//myArr.some 
//myArr.every 
//myArr.sort 

