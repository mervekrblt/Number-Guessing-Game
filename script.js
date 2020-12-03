const box = document.querySelector('.box')
const button = document.querySelector('button')
const text = document.querySelector('.text')
let num;


//Define speech recognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
//Binding
const recognition = new SpeechRecognition();
//interim result is false by default. If you change this variable to true, while user speaking, populating on the screen
recognition.interimResults = true

//Event Listener
recognition.addEventListener('result', function (e) {

    const transcript = Array.from(e.results) //Because this is a list not an array
        .map(result => result[0])
        .map(result => result.transcript) //gives arrays
        .join('') //turn array to string

    let isNumber = Number(transcript)

    if(isNumber==='NaN'){
        box.textContent = 'Not a Number'
    } else box.textContent = transcript

    console.log( isNumber)

})

recognition.addEventListener('end', recognition.start) //When speaking end, start again the start function

recognition.start() //Without this function we cannot see anything


//Create a function that gives a random number between 0 and 100
function randomNum() {
    return num = Math.floor(Math.random() * 100 + 1)
    //for max min,  Math.random *(max-min+1) + min
}


//start function
function startGame() {
    console.log(randomNum())
}

button.addEventListener('click', startGame)