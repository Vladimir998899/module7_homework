// JavaScript Практика Задание 2.

/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false. */


const animals = {
    elefant: 'big',
    mouse: 'litle',
    giraffe: 'long',
    lion: 'strong'
};
function tabProps(str, obj) {
    return console.log(str in obj);
}
tabProps('elefant', animals);










