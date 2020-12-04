const box = document.querySelector('.box')
const button = document.querySelector('.start')
const hint = document.querySelector('.hint')
const text1 = document.querySelector('.text1')
const text2 = document.querySelector('.text2')
let num;


//Define speech recognition
//Binding
//interim result is false by default. If you change this variable to true, while user speaking, populating on the screen
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();
recognition.interimResults = true


function showNum(e) {
    const transcript = Array.from(e.results) //Because this is a list not an array
        .map(result => result[0])
        .map(result => result.transcript) //gives arrays
        .join('') //turn array to string

    let isNumber = Number(transcript)

    if (Number.isNaN(isNumber)) { //dont use isNumber===NaN, use Number.isNaN()
        text1.textContent = 'Not a Number'
        box.textContent = ''
    } else {
        box.textContent = transcript
        text1.textContent = ''
    }


    if (isNumber > 100 || isNumber < 0) {
        return box.textContent = '', text1.textContent = 'Number should be between 0-100'
    }

    if (isNumber > num) {
        return text1.textContent = 'Go Lower'
    } else if (isNumber < num) {
        return text1.textContent = 'Go Higher'
    } else if (isNumber === num) {
        return text1.textContent = '🎉CONGRATULATIONS🎉', button.style.display = 'block', button.textContent = 'Play Again'
    }
}

//Create a function that gives a random number between 0 and 100
function randomNum() {
    return num = Math.floor(Math.random() * 100 + 1)
    //for max min,  Math.random *(max-min+1) + min
}


//When player click the start; create a number, hidden start button, reset hint button
function startGame() {
    randomNum()
    console.log(num)
    recognition.addEventListener('result', showNum)
    button.style.display = 'none'
    text1.textContent = ''
    box.textContent = ''
    hint.innerHTML = 'Hint!'
}

button.addEventListener('click', startGame)
recognition.addEventListener('end', recognition.start) //When speaking end, start again the start function
recognition.start() //Without this function we cannot see anything
hint.addEventListener('click', function () {
    return num === undefined ? '' : this.innerHTML = num
})