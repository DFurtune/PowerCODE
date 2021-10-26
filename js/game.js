//Координаты массива змейки
let snake = [
    {id: '5_5'},
    {id: '5_6'},
    {id: '5_7'}
];
let segmentSnake = 40;


let head = snake[0]

window[head.id].style.backgroundColor = 'red'


//Рисуем змейку
for (let i = 1; i < snake.length; i++) {
    let body = snake[i]
    window[body.id].style.backgroundColor = 'blue'
}


//Направление движения змейки
document.addEventListener("keydown", direction);

let dir
function direction(event) {
    if(event.keyCode == 65 && dir != "right")
        dir = "left";
    else if(event.keyCode == 68 && dir != "left")
        dir = "right"
    else if(event.keyCode == 83 && dir != "up")
        dir = "down";
    else if(event.keyCode == 87 && dir != "down")
        dir = "up";
}



function snakeWay() {

    console.log(dir)
    console.log(snake[0])

    let headX = head.x;//??? КАК НАЙТИ КООРДИНАТЫ X и Y
    let headY = head.y;

    snake.pop();//Удаляем хвост змейки

    let newHead = {///???непонятно как должно заработать
        x: headX,
        y: headY
    }

    snake.unshift(newHead)//Добавляем голову змеи
}

console.log(snakeWay())