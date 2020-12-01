//Player tries to guess num
let num;

//Select the box
const box = document.querySelector('.box')

//Select the button
const button = document.querySelector('button')


//Create a function that gives a random number between 0 and 100
function randomNum(){
return  num = Math.floor(Math.random()*100 + 1)
//for max min,  Math.random *(max-min+1) + min
}

//When player write his or her own guesses, show true 
box.addEventListener('input', function(){
    if(box.value==num){
    alert(`Correct, it was ${num}`)
}
})

//start function
function startGame(){
    console.log(randomNum())
}

button.addEventListener('click', startGame)
