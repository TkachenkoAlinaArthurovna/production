let emeralds = 100;
let reward = 20;
let swordPrice = 15;
let swordCount = 4;
let players = 3;

// 1. Додай нагороду
let totalEmeralds = ___;

// 2. Порахуй вартість усіх мечів
let totalCost = ___;

// 3. Відніми витрати
let remaining = ___;

// 4. Поділи залишок між гравцями
let perPlayer = ___;

console.log("Кожен отримав " + perPlayer + " смарагдів");

let base = 5;
let containerSize = 6;

// Підносимо 5 до квадрату: 5 × 5 = 25
let crystals = base ** 2;

// Знаходимо остачу: 25 = 6 × 4 + 1
let result = crystals % containerSize;

console.log("Усього кристалів: " + crystals); // 25
console.log("Залишилося поза контейнерами: " + result); // 1
