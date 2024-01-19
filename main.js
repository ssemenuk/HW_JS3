                              //while

// Завдання 1
let count = prompt("Введіть кількість разів для виведення #:");
let i = 0;
while (i < count) {
    alert("#");
    i++;
}

// Завдання 2
let userInput = prompt("Введіть число:");
let j = userInput;
while (j >= 0) {
    alert(j);
    j--;
}

// Завдання 3
let base = prompt("Введіть число:");
let exponent = prompt("Введіть ступінь:");
let result = 1;
let k = 0;
while (k < exponent) {
    result *= base;
    k++;
}
alert("Результат: " + result);

// Завдання 4
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let commonDivisors = [];
let l = 1;
while (l <= num1 && l <= num2) {
    if (num1 % l === 0 && num2 % l === 0) {
        commonDivisors.push(l);
    }
    l++;
}
alert("Спільні дільники: " + commonDivisors);

// Завдання 5
let factorialInput = prompt("Введіть число для обчислення факторіалу:");
let factorial = 1;
let m = 1;
while (m <= factorialInput) {
    factorial *= m;
    m++;
}
alert("Факторіал " + factorialInput + ": " + factorial);


                     //do while

// Завдання 1
let userAnswer;
do {
    userAnswer = prompt("Розв'яжіть приклад 2 + 2 * 2:");
} while (userAnswer != 6);
alert("Вірно!");

// Завдання 2
let divisionCount = 0;
do {
    let result = 1000 / 2;
    divisionCount++;
} while (result >= 50);
alert("Отримане число: " + result + "\nКількість поділів: " + divisionCount);


//    for

// Завдання 1
let multiple = prompt("Введіть число для перевірки кратності:");
for (let n = 1; n <= 100; n++) {
    if (n % multiple === 0) {
        alert(n);
    }
}

// Завдання 2
let minRange = prompt("Введіть мінімальне значення діапазону:");
let maxRange = prompt("Введіть максимальне значення діапазону:");

for (let i = minRange; i <= maxRange; i++) {
    if ((i - minRange + 1) % 4 === 0) {
        alert(i);
    }
}

// Завдання 3
let userNumber = prompt("Введіть число для перевірки:");
let isPrime = true;

for (let j = 2; j < userNumber; j++) {
    if (userNumber % j === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    alert(userNumber + " - просте число.");
} else {
    alert(userNumber + " - не є простим числом.");
}