// JavaScript Практика Задание 4.
/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах. Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:

Имена функций, свойств и методов должны быть информативными;
Использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
Информативные имена (а не a, b);
Четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
Использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
*/


/** Первый прибор */

function Phillips(name) {
    this.electricalAppliance = 'useful',
        this.name = name
}
Phillips.prototype.getPower = function (power) {
    console.log(`Power is ${power} watt`)
}
function brandPhillips(name, color) {
    this.name = name,
        this.color = color
}
brandPhillips.prototype = new Phillips()

const lamp = new brandPhillips(`lamp`, `black`);

lamp.getPower(50)
console.log(lamp)

/** Второй прибор */

function Intel(name) {
    this.electricalAppliance = 'useful',
        this.name = name
}
Intel.prototype.getPower = function (power) {
    console.log(`Power is ${power} watt`)
}
function brandIntel(name, color) {
    this.name = name,
        this.color = color
}
brandIntel.prototype = new Intel()

const computer = new brandIntel(`computer`, `grey`);

computer.getPower(200)
console.log(computer)
