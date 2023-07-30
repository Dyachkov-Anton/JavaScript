/*Задание 1
Текст задания
1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”

const day_week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
console.log(day_week[2]);

2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.

const user = {
    name: 'Anton',
    surname: 'Dyachkov',
    age: '39'
}
console.log(user.surname,'-', user.name,'-',user.age);
/*
3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры


const user_ = {
    name: 'Anton',
    surname: 'Dyachkov',
    age: '39'
}
user_.middle = 'Gennadyevich';
delete user_.middle;
console.log(user_.surname,'-', user_.name, '-',user_.middle, '-',user_.age);



4. Удалите свойство surname


const user_ = {
    name: 'Anton',
    surname: 'Dyachkov',
    age: '39'
}
user_.middle = 'Gennadyevich';
delete user_.surname;
console.log(user_);
/*
Задание 2
1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:


const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const obj = {};
for (i=0; i<arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);

С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.
1. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.

const obj_ = {x: 1, y: 2, z: 3};
for (const key in obj_) {
    obj_[key] = obj_[key]**2;
}
console.log(obj_);


Задание 3

const objr = {
    key1: {
    key1: 1,
    key2: 2,
    key3: 3,
    },
    key2: {
    key1: 4,
    key2: 5,
    key3: 6,
    },
    key3: {
    key1: 7,
    key2: 8,
    key3: 9,
    },
}
let sum = 0;
for (const key in objr) {
    for(const el1 in objr[key]) {
        sum +=objr[key][el1];
    }
}
console.log(sum);
console.log(objr);
/*
Найдите сумму элементов приведенного объекта.
*/

/*
Задание 4
1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно
*/

const question = 'Зимой и летом одним цветом';
const spoiler = ['зеленая', 'колючая'];
const answer = 'елка';
const riddles = {
    question, 
    spoiler, 
    answer,
    askQuestion: function() {
        let userAnswer = prompt(this.question);
        if(userAnswer.toLowerCase().replaceAll(' ', '') === this.answer) {
            alert('good');
        } else {
            for (let hint of this.spoiler) {
                alert(hint);
                userAnswer = prompt(this.question);
                if (userAnswer.toLowerCase().replaceAll(' ', '')===this.answer) {
                    alert('good'); 
                    return;
                }
            }
            alert('bad');
        }
    },
}; 
riddles.askQuestion();