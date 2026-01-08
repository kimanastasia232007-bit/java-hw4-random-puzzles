let quantity = +prompt('Введите количество примеров')

function random(min,max) {
    return Math.floor((Math.random() * (max + 1 - min) + min) )
}
for(let i = 1; i <= quantity; i++) {
let num1 = random(1, 10)
let num2 = random(1, 10)
let randoom = random(1,4)
if( randoom == 1) {
let answer1 = +prompt(`${num1} + ${num2}= `)
if(answer1 == num1 + num2) {
    console.log(`Ваш ответ верный - ${answer1}`);
}
else {
    console.log(`Ваш ответ неверный - ${answer1}. Правильный ответ -  ${num1 + num2}`);
}
}
else if(randoom == 2) {
let answer2 = +prompt(`${num1} - ${num2}= `)
if(answer2 == num1 - num2) {
    console.log(`Ваш ответ верный - ${answer2}`);
}
else {
    console.log(`Ваш ответ верный - ${answer2}. Правильный ответ -  ${num1 - num2}`);
}
}
else if(randoom == 3) {
let answer3 = +prompt(`${num1} х ${num2}= `)
if(answer3 == num1 * num2) {
    console.log(`Ваш ответ верный - ${answer3}`);
}
else {
    console.log(`Ваш ответ верный - ${answer3}. Правильный ответ -  ${num1 * num2}`);
}
}
else if(randoom == 4) {
let answer1 = +prompt(`${num1} ÷ ${num2}= `)
if(answer1 == num1 / num2) {
    console.log(`Ваш ответ верный - ${answer1}`);
}
else {
    console.log(`Ваш ответ верный - ${answer1}. Правильный ответ -  ${num1 / num2}`);
}
}
}

