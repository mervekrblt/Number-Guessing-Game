const box = document.querySelector('.box')
const button = document.querySelector('button')
const text1 = document.querySelector('.text1')
const text2 =  document.querySelector('.text2')
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

    if(Number.isNaN(isNumber)){ //dont use isNumber===NaN, use Number.isNaN()
      {text1.textContent = 'Not a Number', box.textContent=''}
    } else {box.textContent = transcript, text1.textContent = ''}

    
    if(isNumber>num){
       return text1.textContent = 'Go Lower'
    }else if(isNumber<num){
        return text1.textContent = 'Go Higher'
    } else if(isNumber===num)
        return text1.textContent = 'Congratulations'
     

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