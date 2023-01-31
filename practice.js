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
    let prop = arr[1];
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
        return "YES";
    } else {
        return "NO";
    }
}
console.log(deleteProperty([{fname:'John',},'fname']))
//solution
function average(arrOfMarks) {
    let sum = 0;
    for (let arrOfMark of arrOfMarks) {
        sum += arrOfMark
    }
    return parseFloat((sum / arrOfMarks.length).toFixed(2));

}
console.log(average([75.25, 65, 80, 35.45, 99.50]))
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
console.log(getLetter('khafd'))