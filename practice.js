const myDays=50;
const first1To10Days=500;
const second11To20Days=300;
const third21ToAnyDays=100;

if(myDays<=10){
    const totalCost=myDays*500;
    console.log(totalCost);

}else if(myDays>11&&myDays<=20){
    
    const first1To10Days=10*500;
    const remaingDays=myDays-10;
    const totalDaysCost=remaingDays*300;
    const total11To20DaysCost=first1To10Days+totalDaysCost;
    console.log(total11To20DaysCost);

}else{
    const first1To10Days=500*10;
    const second11To20Days=300*10;
    const remaingDays=myDays-20;
    const thirdInfinity=remaingDays*100;
    const totalAbove20Days=first1To10Days+second11To20Days+thirdInfinity;
    console.log(totalAbove20Days);

}