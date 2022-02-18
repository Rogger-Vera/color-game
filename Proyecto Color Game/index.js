// COLOR GAME

let numSquares = 6
let colors = []
let pickedColor
let squares = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetBtn = document.querySelector("#reset")
let botones = document.querySelectorAll(".boton")

function establecerClaseBotones(){

    for (let i = 0; i < botones.length; i++) {
        
        botones[i].addEventListener("click", function(){

            botones[0].classList.remove("selected")
            botones[1].classList.remove("selected")
            this.classList.add("selected")
            numSquares = (this.textContent == "Facil") ? 3 : 6
            reset()
        
        })
    }

}

function establecerCuadrados(){

    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function(){

            let clickedColor = this.style.background
            if(clickedColor == pickedColor){
                messageDisplay.textContent = "¡Correcto!"
                resetBtn.textContent = "¡Juega de nuevo!"
                changeColors(clickedColor)
                h1.style.background = clickedColor
            }else{
                this.style.background = "#232323"
                messageDisplay.textContent = "Intentalo Nuevamente"
            }

        })

    }

}

function reset(){

    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (let i = 0; i < squares.length; i++) {

        if(colors[i]){
            squares[i].style.background=colors[i]
            squares[i].style.display="block"
        }else{
            squares[i].style.display="none"
        }

    }
    
    h1.style.background="steelblue"
    messageDisplay.textContent=""
    resetBtn.textContent="Nuevos Colores"

}

resetBtn.addEventListener("click", reset)

function changeColors(color) {
    
    for (let i = 0; i < squares.length; i++) {
        
        squares[i].style.backgroundColor = color
        
    }

}

function pickColor () {
    
    let aleatorio = Math.floor(Math.random()*colors.length)

    return colors[aleatorio]

}

function randomColor(){

    let r = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)

    return "rgb(" + r + ", " + g + ", " + b + ")"

}

function generateRandomColors(num){

    let newArr = []
    for (let i = 0; i <num ; i++) {
        newArr[i] = randomColor()
    }

    return newArr
}

init()

function init(){

    establecerClaseBotones()
    establecerCuadrados()
    reset()

}















