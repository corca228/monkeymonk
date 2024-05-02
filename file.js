let text1 = "Быстро и ловко печатаю на клавиатуре, улучшая свои навыки каждый день. С каждой минутой я становлюсь все более уверенным в своей печатной скорости и точности. Клавиатура не является для меня барьером, а инструментом для самовыражения и удовольствия."
let text2 = "Печать – это навык, который требует постоянной практики и усердной работы. Я постоянно улучшаю свою печатную скорость и точность, потому что я знаю, что он будет полезен во многих аспектах моей жизни. Будущее мое – за монитором и клавиатурой!"
let text3 = "Я улучшаю свои навыки печати, так как понимаю, что это умение будет полезным в мире компьютеров и интернета. Я нацелен на постоянное совершенствование, поэтому каждый день провожу тренировки. Моя печать становится более быстрой и точной с каждым днем."
let text_eng1 = "I am improving my typing skills every day, aiming to type faster and with greater accuracy. Each keystroke brings me closer to my goal of effortless, efficient typing. With each practice session, I feel more confident and capable at the keyboard. Typing is not just a skill, but a gateway to productivity and self-expression."
let text_eng2 = "My fingers fly across the keyboard as I dedicate myself to mastering the art of typing. I recognize that speed and precision are crucial in today's digital age. With each passing day, I am honing my typing abilities, ensuring that I can effortlessly and accurately communicate via the keyboard. Typing is not just a task, but an essential skill in our modern world."
let text_eng3 = "I am committed to becoming a proficient typist, understanding the value of this skill in the computer-centric world we live in. I focus on consistent improvement, dedicating myself to daily practice. With each session, I notice my typing becoming swifter and more precise. I embrace typing as a valuable skill that will serve me well in numerous aspects of my life."

let split_text1 = text1.split("")
let split_text2 = text2.split("")
let split_text3 = text3.split("")
let split_text_eng1 = text_eng1.split("")
let split_text_eng2 = text_eng2.split("")
let split_text_eng3 = text_eng3.split("")
    // example.textContent = text1

let heading = document.querySelector('.printed')
let lang = document.querySelector('.bar')
let eng = document.getElementById('eng')
let rus = document.getElementById('rus')
let main = document.querySelector('.main')
let example = document.querySelector('.example')

let screen_text = []

function getRandomInt() {
    return Math.floor(Math.random());
}
const russian_text = ['split_text1', 'split_text2', 'split_text3']
const english_text = ['split_text_eng1', 'split_text_eng2', 'split_text_eng3']
const rondom = getRandomInt(3)
const result = russian_text[rondom]
const result_eng = english_text[rondom]
console.log(result)


for (let index = 0; index < split_text1.length; index++) {
    const element = `<span>${split_text1[index]}</span>`
    screen_text.push(element)
}


let i = 0
let language = 'russ'
let number = split_text1[i]
lang.addEventListener('click', function() {
    if (language == 'russ') {
        language = 'eng'
        eng.style.color = 'red'
        rus.style.color = 'black'
        number = result_eng
        console.log(number)
    } else {
        language = 'russ'
        rus.style.color = 'red'
        eng.style.color = 'black'
        number = result
        console.log(number)
    }
})


heading.innerHTML = screen_text.join('')
heading.style.color = 'gray'

let children = heading.children // получение массива символов, обернутых в span
children[0].classList.add('current')

function trackKeyboardActivity() {
    document.addEventListener('keydown', function(event) {
        // Get the key that was pressed
        const keyPressed = event.key;
        // Get the code of the key that was pressed
        const keyCode = event.code;

        console.log('Key pressed: ' + keyPressed);
        console.log('Key code: ' + keyCode);
        if (number == keyPressed) {
            children[i].style.color = 'white'
            i = i + 1
            number = split_text1[i]
            children[i - 1].classList.remove('current') // удаление каретки для предыдущего символа
            children[i].classList.add('current')
        } else {
            children[i].style.color = 'red'
            console.log('ERROR!' + number)
        }
    });
}


trackKeyboardActivity('.printed');
