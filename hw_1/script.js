/**
 * Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

*/
console.log('Задача №1');
const musicCollection = {
    album: [
        {
            title: "Альбом-1",
            artist: "Петров",
            year: 1990
        },
        {
            title: "Альбом-2",
            artist: "Иванов",
            year: 1957
        },
        {
            title: "Альбом-3",
            artist: "Сидоров",
            year: 1963
        }
    ]
};

musicCollection[Symbol.iterator] = function () {
    const arr = this.album;
    let item = 0;
    return {
        next() {
            if (item < arr.length) {
                return { value: arr[item++], done: false }
            }
            return { value: undefined, done: true }
        }
    };

};
for (const iterator of musicCollection) {
    console.log(`Альбом: ${iterator.title} Исполнитель:  ${iterator.artist} Год: ${iterator.year}`);

}



/**
 * // Задание 2
    Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.Клиенты приходят и делают заказы на разные блюда.
Необходимо создать систему управления этими заказами, которая позволит:
• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.В качестве ключей для клиентов используйте объекты.
Повара и их специализации:

Виктор - специализация: Пицца.
    Ольга - специализация: Суши.
        Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
    Пицца "Пепперони" - повар: Виктор.
        Суши "Филадельфия" - повар: Ольга.
            Суши "Калифорния" - повар: Ольга.
                Тирамису - повар: Дмитрий.
                    Чизкейк - повар: Дмитрий.

                        Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.

 */

console.log('\nЗадача №2');
class Client {
    id = Symbol('client');
    constructor(name, ...clientOrder) {
        this.name = name;
        this.clientOrder = clientOrder;
    };
}

const clientAlex = new Client('Alex', 'Пицца "Пеперони"', 'Тирамису');
const clientMaria = new Client('Мария', 'Суши "Калифорния"', 'Пиццу "Маргарита"');
const clientIrina = new Client('Ирина', 'Чизкейк');


const specializationCooks = new Map();
specializationCooks.set('Пицца', 'Виктор повар - специализация Пицца');
specializationCooks.set('Суши', 'Ольга повар - специализация Суши');
specializationCooks.set('Десерты', 'Дмитрий повар - специализация Десерты');
console.log('Повара и их специализации:');
console.log(specializationCooks);

console.log('\n');
const food = new Map();
food.set('Пицца Маргарита', specializationCooks.get('Пицца'));
food.set('Пицца "Пепперони"', specializationCooks.get('Пицца'));
food.set('Суши Калифорния', specializationCooks.get('Суши'));
console.log('Блюда и их повара');
console.log(food);
console.log('\n');

const orders = new Set();
orders.add(clientAlex);
orders.add(clientMaria);
orders.add(clientIrina);
console.log('Заказы');
console.log(orders);
console.log('\n');

console.log(`Клиент: ${clientAlex.name} заказал: ${clientAlex.clientOrder}. ${specializationCooks.get('Пицца')}, ${specializationCooks.get('Десерты')} `);
console.log(`Клиент: ${clientMaria.name} заказал: ${clientMaria.clientOrder}. ${specializationCooks.get('Пицца')}, ${specializationCooks.get('Суши')}`);
console.log(`Клиент: ${clientIrina.name} заказал: ${clientIrina.clientOrder}. ${specializationCooks.get('Десерты')}`);


