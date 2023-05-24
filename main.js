// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());

//task1
// function halloween(date){
//     if(date.getMonth() === 9 && date.getDate() === 31){
//         return "Bonfire toffee";
//     }
//     else return "toffee"
// }    
//     console.log(halloween(new Date("2013/10/31")));




//task2
// function centuryFromYear(year){
//     return Math.ceil(year/100);
// } console.log(centuryFromYear(1950));



//task3

// function monthName(numOfMonth){
//     let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return month[numOfMonth-1];
// } console.log(monthName(12));


//task4
// function afterNMonths(year,month){
// return year + Math.floor(month/12);
// } console.log(afterNMonths(2020, 24));  //2022


//task5
// function formatDate(str){
//     return str.split("/").reverse().join("");
// } console.log(formatDate("12/31/2019"));


//task6
function hasFriday13(month,year){

    return new Date(year, month-1, 13).getDay() === 5;

} console.log(hasFriday13(3, 2020));   //true