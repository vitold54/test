// Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
/*
Модуль 4 задание 8
function number(x){
    let arr = [];
    for (let i = 0; i < x; i++){
    arr.push(prompt("Введите число",""))
    }
    let max = (Math.max(...arr));
    alert(max);
}

number(+prompt("Введите кол-во чисел", ""));
*/


//Написать функцию, которая вычисляет факториал переданного ей числа.
/*
Модуль 4 задание 12
function factorial(n){

let result = 1;
for(let i = 0; i < n; i++ ){
    result *= (n - i);
}
alert(result);

}

factorial(+prompt("Введите целое число", ""));
*/



/*Написать функцию, которая реализует работу оператора % .
  Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй.
  В функции использовать только + - * /, оператор % не использовать.
*/
/*
Модуль 4 задание 6

function ostatok(a, b){
    let a,b;
    if (a > b) {
        let c = a - Math.floor(a / b) * b;
        alert(c);
        
    } else {
        alert ("Первое число должно быть больше второго.")
    }
}

ostatok(+prompt("Введите первое число",""), +prompt("Введите второе число", ""));

*/


//Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки «дд.мм.гггг».
// Проверку на високосный год желательно написать отдельной функцией.

/*function next(day, month, years) {
    if (day === 31) {
        day = 1;
    }
    if (month === 12) {
        years1 = years + 1;
    }




    alert(day + month + years1);



}

next(+prompt("Введите день рождения", ""), +prompt("Введите месяц рождения", ""), +prompt("Введите год рождения", ""));
*/

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("True...");
}
