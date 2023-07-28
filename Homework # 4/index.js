/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
a = 11;
for (i=0; i<a; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i%2==0) {
        console.log(`${i} – четное число`);
    } else {
        console.log(`${i} – нечетное число`);
    }
}

/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/
const my_arr = [1, 2, 3, 4, 5, 6, 7];
my_arr.splice(3, 2);
//my_arr = [1, 2, 3, 6, 7];
//my_arr.pop();
//my_arr.pop();
//my_arr.pop();
//my_arr.pop();
//my_arr.push(6, 7);
console.log(my_arr);

/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

let randomArr = [];
for (i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random(0, 9) * 5)); 
}
console.log(`Массив из случайных элементов ${randomArr}`);
summ = 0;
for (i = 0; i < randomArr.length; i++) {
    summ += randomArr[i];
}
console.log(`Сумма элементов массива составляет ${summ}`);
console.log(`Минимальное значение элемента составляет ${Math.min.apply(null,randomArr)}`);
for (i = 0; i <=randomArr.length; i++)
if (randomArr[i] ===3) {
    console.log("Есть элемент '3'");
} else {
    console.log("Нет элемента '3'");
}
/*
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

*/

let str = '';
//console.log(str);
for (y = 1; y <= 20; y++) {
    console.log(str+='x');
}

