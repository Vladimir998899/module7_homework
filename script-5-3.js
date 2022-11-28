// JavaScript Практика Задание 5.
/* 
Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/


/* Первый прибор */

class Lamp {
    constructor(power) {
        this.power = power;
    }

    /* Данные по мощности светильника берем из паспорта светильника */


    philips() {
        console.log(`Мощность светильника ${this.power} watt`);
    }
}

class Elappliance extends Lamp {
    constructor(power, maxAge) {
        super(power);
        this.maxAge = maxAge;
    }
}

class Disign extends Elappliance {
    constructor(power, maxAge, anyColor) {
        super(power, maxAge);
        this.anyColor = anyColor;
        this.inventions = [];
    }

    invent(item) {
        this.inventions.push(item);
        console.log(`Светильник имеет мощность ${this.power} watt и ${item.anyColor} цвет`);
    }
}
class Advance extends Disign {
    weakAction() {
        console.log(`Светильник потребляет ${this.power} watt и является маломощным`);
    }
}

const electricity = new Advance('50', 10, 'черный');
electricity.philips();
electricity.invent({ anyColor: 'черный' });
electricity.weakAction();

console.log(electricity instanceof Lamp)
console.log(electricity instanceof Elappliance)
console.log(electricity instanceof Disign)
console.log(electricity instanceof Advance)




/* Второй прибор */

class Computer {
    constructor(power) {
        this.power = power;
    }

    /* Данные по мощности компьютера берем из паспорта компьютера */


    intel() {
        console.log(`Мощность компьютера ${this.power} watt`);
    }
}

class Elappliance extends Computer {
    constructor(power, maxAge) {
        super(power);
        this.maxAge = maxAge;
    }
}

class Disign extends Elappliance {
    constructor(power, maxAge, anyColor) {
        super(power, maxAge);
        this.anyColor = anyColor;
        this.inventions = [];
    }

    invent(item) {
        this.inventions.push(item);
        console.log(`Компьютер имеет мощность ${this.power} watt и ${item.anyColor} цвет`);
    }
}
class Advance extends Disign {
    averageAction() {
        console.log(`Компьютер потребляет ${this.power} watt и является бытовым прибором средней мощности`);
    }
}

const electricity = new Advance('200', 3, 'серый');
electricity.intel();
electricity.invent({ anyColor: 'серый' });
electricity.averageAction();

console.log(electricity instanceof Computer)
console.log(electricity instanceof Elappliance)
console.log(electricity instanceof Disign)
console.log(electricity instanceof Advance)












