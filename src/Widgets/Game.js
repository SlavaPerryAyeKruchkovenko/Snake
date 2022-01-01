import React,{useEffect} from 'react';
import Holst from "./Holst";
import Point from "../Models/Point";
import "../Models/Point";
import Proptypes from "prop-types";
import $ from "jquery";
import Snake from "../Models/snake";

let vector = new Point(-0.3, -0.7)
let weight = document.documentElement.clientWidth
let height = document.documentElement.clientHeight - 10
let foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
let radius = 20
let score = 0

const startX = rndNum(weight / 4, weight * 3 / 4)
const startY = rndNum(height / 4, height * 3 / 4)
//const snake = new Snake(20, new Point(startX, startY))

function rndNum(min,max) {return Math.floor(Math.random() * (max - min + 1) + min)}
function dropScore() {score = 0}
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
    }
}
window.$ = window.jQuery = $;
document.addEventListener("keydown", keyPush)
$(document).ready(function($) {
    $(window).resize(function() {
        weight = document.documentElement.clientWidth
        height = document.documentElement.clientHeight
        foodLoc = new Point(rndNum(10,weight-10),rndNum(10,height-10))
    })})

function Game(props) {

    const {snake} = props
    const {closeGame} = props
    const [head, setHead] = React.useState(snake.head)

    if (head.position.X >= foodLoc.X - radius && head.position.X <= foodLoc.X + radius
        && head.position.Y >= foodLoc.Y - radius && head.position.Y <= foodLoc.Y + radius) {
        snake.enlargeSnake()
        foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
        score++
    }

    snake.getBody().forEach(el => {
        if(!el.isHead && head.position.X >= el.position.X-radius && head.position.X <= el.position.X+radius
            && head.position.Y >= el.position.Y-radius && head.position.Y <= el.position.Y+radius) {
            alert('your lose')
            console.log('your lose')
            closeGame()
            // snake = new Snake(radius, new Point(startX, startY));
            // setHead(snake.head)
        }})

    useEffect(()=>{
        const interval = setInterval(()=>{
            radius = radius=== 26?20:radius+2
            setHead(snake.moveSnake(vector,1))
        },1000/15);
        return () => clearInterval(interval)
    },[])

    return(
        <div className='default'>
            <p className="scoreBar">Score: {score}</p>
            <Holst weight={weight} height={height} vector={vector}
                   radius={radius} body={snake.getBody()} foodLoc={foodLoc}/>
        </div>)
}
Game.prototype ={
    closeGame: Proptypes.function,
    weight: Proptypes.number.isRequired,
    height: Proptypes.number.isRequired,
    score: Proptypes.number.isRequired
}
export default Game
export {startX, startY, radius, dropScore}