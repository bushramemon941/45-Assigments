// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.


let guestArr : string[]= ['fatima', 'zara',' sanober', 'noor'];
 let canNotAttend : string ='zara'
 let newGuest : string = ' manal'
  guestArr[guestArr.indexOf(canNotAttend)] =newGuest;
  console.log(guestArr)
//   guestArr.map((item)=>
//   console.log(`Dea ${item}, I found  a bigger dinner table  so iam invited more peoples.`))
// part 2
 let guestBeg : string = ' ayat'
 guestArr. unshift(guestBeg);
//  console.log(guestArr)
//  par 3
let middleGuest : string = 'bushra'
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)
// part4
guestArr.push('ayesha')
// console.log(guestArr)
// part5
guestArr.map((items)=>
console.log(`Dear ${items}, you are invited in the more peopl categroy on dinner`));