// 1
let hamburger = 4;
let fries = 1;


if (hamburger >= 4 && fries >= 1 )
{
    console.log("Ми поїли")
}
else {
    console.log("Ми йдемо в інше кафе")
}

// 2
let price = 1200;

if (price >= 1000 && price <= 1900 )
{
    console.log("Значення ціни між 1000 та 1900 включно");
}
else {
    console.log("Значення більше або менше ніж в умавах");
}

//3_1

let price2 = 1200;

if (!(price2 >= 1000 && price2 <= 1900 ))
{
    console.log("Значення ціни між 1000 та 1900 включно");
}
else {
    console.log("Значення не знаходиться між 1000 та 1900 включно");
}

//3_2

let price3 = 1200;

if (price3 <= 1000 || price3 >= 1900 )
{
    console.log("Значення ціни не знаходиться між 1000 та 1900 включно");
}
else {
    console.log("Значення знаходиться між 1000 та 1900 включно");
}

// 4
 let season = 4;

 if(season == 1) {
    console.log('Winter season');
}else if (season == 2) {
    console.log('Spring season');
} else if (season == 3) {
    console.log('Summer season');
} else if (season == 4) {
    console.log('Autumn season');
}

//5
let a = 5;
let b = 2;
let c = 10;

if (a > b) {
    if (b > c) {
        console.log(`${b} Середнє значення `);
    } else if (a > c) {
        console.log(`${c} Середнє значення `);
    } else {
        console.log(`${a} Середнє значення `);
    }
    } else {
        if (a > c) {
            console.log(`${b} Середнє значення `);
        } else if (b > c) {
            console.log(`${c} Середнє значення `);
        } else {
            console.log(`${a} Середнє значення `);
        }
    }

//6
let dayOfWeek = 3;

switch(dayOfWeek){
    case 1: 
        console.log('Понеділок');
        break;
    case 2: 
        console.log('Вівторок');
        break;
    case 3: 
        console.log('Середа');
        break;
    case 4: 
        console.log('Четвер');
        break;
    case 5: 
        console.log('Пятниця');
        break;
    case 6: 
        console.log('Субота');
        break;
    case 7: 
        console.log('Неділя');
        break;
          
    default:
        console.log('Не валідний номер дня');
        break;  
}

//7

let mathOperator = "*";
let digit1 = 2;
let digit2 = 6;
let result;

switch(mathOperator){
    case "+": 
        console.log(result = digit1+digit2);
        break;
    case "-": 
        console.log(result = digit1-digit2);
        break;
    case "*": 
        console.log(result = digit1*digit2);
        break;
    case "/": 
        console.log(result = digit1/digit2);
        break;

    default:
        console.log('Не валідний параметр');
        break;  
}

//9

let meters = 32;

if (meters >= 0) {
    console.log( meters / 1000 +  '  Кілометри') 
}