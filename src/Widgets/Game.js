import React, {useEffect} from 'react';
import Holst from "./Holst";
import Point from "../Models/Point";
import "../Models/Point";
import Proptypes from "prop-types";

let vector = new Point(-0.3, -0.7)
let weight = document.documentElement.clientWidth
let height = document.documentElement.clientHeight - 10
let foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
let foodRadius = 20
let score = 0

const maxRadius = 26;
const time = 1000 / 15
const startX = rndNum(weight / 4, weight * 3 / 4)
const startY = rndNum(height / 4, height * 3 / 4)

function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function dropScore() {
    score = 0
}

function checkBodyOnCollision(snake, objLoc, radius, anotherFunc = null) {

    let col = false
     snake.getBody().forEach(el => {
        if (!col && (anotherFunc == null || anotherFunc(el)) && checkOnCollision(objLoc, el.position, radius)) {
            col = true
        }
    })
    return col
}

function checkOnCollision(loc, secondLoc, radius) {
    return loc.X >= secondLoc.X - radius && loc.X <= secondLoc.X + radius
        && loc.Y >= secondLoc.Y - radius && loc.Y <= secondLoc.Y + radius
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            if (vector.X !== 1) vector = new Point(-1, 0);
            break
        case 38:
            if (vector.Y !== 1) vector = new Point(0, -1);
            break
        case 39:
            if (vector.X !== -1) vector = new Point(1, 0);
            break
        case 40:
            if (vector.Y !== -1) vector = new Point(0, 1);
            break
        default:
            break
    }
}

window.addEventListener("keydown", keyPush)
window.addEventListener("resize", function () {
    weight = document.documentElement.clientWidth
    height = document.documentElement.clientHeight
    foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
})

function Game(props) {
    const {snake} = props
    const {closeGame} = props
    const [head, setHead] = React.useState(snake.head)
    let isPlay = true;

    if (checkOnCollision(head.position, foodLoc, foodRadius)) {
        snake.enlargeSnake();
        if (checkBodyOnCollision(snake, foodLoc, maxRadius)) {
            foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
        } else {
            const body = snake.getBody()
            const x = body[body.length - 1].position.X
            const y = body[body.length - 1].position.Y + snake.radius
            foodLoc = new Point(x, y)
        }
        score++
    }
    if (checkBodyOnCollision(snake, head.position, snake.radius, (el) => !el.isHead)) {
        alert('your lose')
        closeGame()
        foodRadius = 20
        score = 0;
        vector = new Point(-0.3, -0.7)
        isPlay = false;
    }
    useEffect(() => {
        if (isPlay) {
            const interval = setInterval(() => {
                foodRadius = foodRadius === maxRadius ? 20 : foodRadius + 2
                setHead(snake.moveSnake(vector, 1))
            }, time);
            return () => clearInterval(interval)
        }
    }, [head, isPlay, snake])


    return (
        <div className='default'>
            <p className="scoreBar">Score: {score}</p>
            <Holst weight={weight} height={height} vector={vector}
                   foodRadius={foodRadius} body={snake.getBody()} foodLoc={foodLoc}/>
        </div>)
}

Game.prototype = {
    closeGame: Proptypes.func,
    weight: Proptypes.number.isRequired,
    height: Proptypes.number.isRequired,
}
export default Game
export {startX, startY, dropScore}