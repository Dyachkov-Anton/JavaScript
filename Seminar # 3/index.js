/*Задание 1
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)

function user_info (user_name, user_family, age) {
    return `Привет ${user_name} ${user_family} с возрастом ${age}`
}
console.log(user_info('Иван', 'Петров', '17'));
/*2. Создайте функцию которая возводит переданное число в
квадрат

function number_kvadrat (user_number) {
    return Math.pow(user_number,2);
}
user_number = prompt('Введите число');
alert(`Квадрат числа ${user_number} ----- ${number_kvadrat(user_number)}`);


3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.


function number_unknown (user_number) {
    if (user_number > 0) {
       return '+++';
    } else {return "---"};  
}
user_number = prompt('Введите число');
alert(number_unknown(user_number));

*/

/*
Задание 2 
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.


2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;


function number_summa (param1, param2, param3) {
    return param1 + param2 + param3;
}
console.log(number_summa (1, 2, 3));

1. Дана фукнция

function func(num = 5) {
console.log(num * num);
}
func();

/*Расскажите, каким будет результат каждого из вызовов функции.
func(2); // 4
func(3); //9
func();  //25

*/

/*
Задание 3
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.



function number_kvadrat(num) {
    return Math.sqrt(num);
}
user_number1 = number_kvadrat(3);
user_number2 = number_kvadrat(4);
summa_numbers = user_number1 + user_number2;
console.log(summa_numbers);


2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции

function number_min (user_number1, user_number2) {
    return Math.min(user_number1, user_number2);
}
user_number1 = prompt('Введите первое число');
user_number2 = prompt('Введите второе число');
console.log(number_min(user_number1, user_number2));

*/

/*
Задание 4
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.


function day_week(user_number) {
    switch(user_number) {
        case 1 : 
            return 'Понедельник';
        case 2 : 
            return 'Вторник';
        case 3 : 
            return 'Среда';
        case 4 : 
            return 'Четверг';
        case 5 : 
            return 'Пятница';
        case 6 : 
            return 'Суббота';
        case 7 : 
            return 'Воскресенье';
        default :
            return 'Неверное число';
    } 
    
}
user_number = Number(prompt('Введите число'));
alert(day_week(user_number));


2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)


function my_name (name) {
    const hour = new Date().getHours();
    if (hour >= 23 & hour <= 4) {
        return `Доброй ночи, ${name}`;
    }
    else if (hour >= 5 & hour <= 10) {
        return `Доброе утро, ${name}`;
    }
    else if (hour >= 11 & hour <= 16) {
        return `Добрый день, ${name}`;
    }
    else if (hour >= 17 & hour <= 22) {
        return `Добрый вечер, ${name}`;
    }
}
console.log(my_name('Антон'));

*/