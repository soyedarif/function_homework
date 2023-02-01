const myDays = 50;
const first1To10Days = 500;
const second11To20Days = 300;
const third21ToAnyDays = 100;

if (myDays <= 10) {
    const totalCost = myDays * 500;
    // console.log(totalCost);

} else if (myDays > 11 && myDays <= 20) {

    const first1To10Days = 10 * 500;
    const remaingDays = myDays - 10;
    const totalDaysCost = remaingDays * 300;
    const total11To20DaysCost = first1To10Days + totalDaysCost;
    // console.log(total11To20DaysCost);

} else {
    const first1To10Days = 500 * 10;
    const second11To20Days = 300 * 10;
    const remaingDays = myDays - 20;
    const thirdInfinity = remaingDays * 100;
    const totalAbove20Days = first1To10Days + second11To20Days + thirdInfinity;
    // console.log(totalAbove20Days);

}
//solution
const solution = (letter) => {
    letter = letter.toLowerCase();
    if ((letter == 'a') || (letter == 'e') || (letter == 'i') || (letter == 'o') || (letter == 'u')) {
        return 'VOWEL';
    }
    else {
        return 'CONSONANT';
    }
};
const myLetter = solution('E');
//   console.log(myLetter)
//solution
const totalCost = (products) => {
    let price = 0;
    for (let product of products) {
        price += product.price;
    }
    return price;

};
const myCart = [{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200 }, { name: 'Fresh Sugar', price: 300 }]
const myCost = totalCost(myCart);

// console.log(myCost);
//sollution
function temperatureConverter(valNum) {
    return parseFloat(((valNum - 32) / 1.8).toFixed(2));
}
//  console.log( temperatureConverter(103))
//solution
const deleteProperty = (arr) => {
    let obj = arr[0];
    console.log(obj)
    let prop = arr[1];
    console.log(prop)
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return "YES";
    } else {
        return "NO";
    }
}
const myArr = [{ fname: 'John', }, 'fname']
console.log(deleteProperty(myArr))
//solution
function average(arrOfMarks) {
    let sum = 0;
    for (let arrOfMark of arrOfMarks) {
        sum += arrOfMark
    }
    return parseFloat((sum / arrOfMarks.length).toFixed(2));

}
// console.log(average([75.25, 65, 80, 35.45, 99.50]))
//solution
function getLetter(s) {
    let letter;
    let stringLower = s.toLowerCase()
    switch (stringLower.charAt(0)) {
        case "a": case "e": case "i": case "o": case "u":
            letter = 'A';
            break;
        case "b": case "c": case "d": case "f": case "g":
            letter = "B";
            break;
        case "h": case "j": case "k": case "l": case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }

    return letter;
}
// console.log(getLetter('khafd'))
// solution
function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
    if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
        return "Jim";
    } else if (marksOfDela > marksOfChinku) {
        return "Dela";
    } else {
        return "Chinku";
    }
}
const marks = JimOrDelaOrChinku(84, 99, 77);
// console.log(marks)
//Solution
function findGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return "A"
    } else if (marks >= 60 && marks < 80) {
        return "B"
    } else if (marks >= 50 && marks < 60) {
        return "C"
    } else if (marks >= 40 && marks < 50) {
        return "D"
    } else {
        return "F"
    }
}
console.log(findGrade(915))
//solution Is it Isosceles??
function checkTriangle(side1, side2, side3) {
    if (side1 ===side2 && side1 ==side3) {
        return "No";
    } else if(side1===side2||side2===side3||side3===side1){
        return "Yes"
    }
    else {
        return "No"
    }
}
// console.log(checkTriangle(9,9,9));
//solution
function tallestFriend ( numbers ) {
    let smallest= numbers[0];
      for(let x of numbers){
        if(x<smallest){
          smallest=x;
        }
      }
      return smallest
    }
    const arrr=[157 , 134,  188     ]
    // console.log(tallestFriend(arrr))
//solution leap Year
function findLeapYear(arrOfYears){
    const leapYear=[]
    for(let year of arrOfYears){
        if(year%4===0 && year%100!==0 || year%400===0){
            leapYear.push(year);
        }
    }
    return leapYear;
}
const years=[2023,2024,2025,2028,2030]
// console.log(findLeapYear(years));
//solution second largest
function secondLargest ( numbers ) {
    let first=0;
    let second=0;
    for (let num of numbers){
        if(num>first){
            second=first;
            first=num;
            console.log(first)
        }else if(num>second && num<first){
            second=num;
        }
    }
    return second;
}
secondLargest([10,33,66,5,99,100,6])
//solution
/* Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string. */
function countZeros ( binary_num ) {
    const numString= binary_num.toString();
    const numSplit=numString.split("");
    let count=0;
    let zeroString='';
    for(let num of numSplit){
        if(num==='0'){
            zeroString+=num;
            console.log(zeroString)
            count++;
        }
    }
    return count;
}
console.log(countZeros(10101))