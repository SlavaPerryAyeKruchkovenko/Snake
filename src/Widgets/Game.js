import React,{useEffect} from 'react';
import Holst from "./Holst";
import Point from "../Models/Point";
import "../Models/Point";
import Proptypes from "prop-types";
import $ from "jquery";

let vector = new Point(-0.3, -0.7)
let weight = document.documentElement.clientWidth
let height = document.documentElement.clientHeight - 10
let foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
let foodRadius = 20
let score = 0

const maxRadius = 26;
const time = 1000/15
const startX = rndNum(weight / 4, weight * 3 / 4)
const startY = rndNum(height / 4, height * 3 / 4)

function rndNum(min,max) {return Math.floor(Math.random() * (max - min + 1) + min)}
function dropScore() {score = 0}
function checkLoc(snake,location,radius,anotherFunc=null){
    return snake.getBody().some(el => {
        if((anotherFunc ==null || anotherFunc(el)) && location.X >= el.position.X-radius && location.X <= el.position.X+radius
            && location.Y >= el.position.Y-radius && location.Y <= el.position.Y+radius) {
            return true;
        }})
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
    let canMove = true;

    if (head.position.X >= foodLoc.X - foodRadius && head.position.X <= foodLoc.X + foodRadius
        && head.position.Y >= foodLoc.Y - foodRadius && head.position.Y <= foodLoc.Y + foodRadius) {

        snake.enlargeSnake();
        if(checkLoc(snake,foodLoc,maxRadius)){
            foodLoc = new Point(rndNum(10, weight - 10), rndNum(10, height - 10))
        }
        else {
            const body = snake.getBody()
            const x =body[body.length - 1].position.X
            const y =body[body.length - 1].position.Y+snake.radius
            foodLoc = new Point(x,y)
        }
        score++
    }
    if(checkLoc(snake,head.position,snake.radius,(el)=>!el.isHead)){
        alert('your lose')
        closeGame()
        foodRadius = 20;
        vector = new Point(-0.3, -0.7)
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            foodRadius = foodRadius=== maxRadius?20:foodRadius+2
            setHead(snake.moveSnake(vector,1))
        },time);
        return () => clearInterval(interval)
    },[head])


    return(
        <div className='default'>
            <p className="scoreBar">Score: {score}</p>
            <Holst weight={weight} height={height} vector={vector}
                   foodRadius={foodRadius} body={snake.getBody()} foodLoc={foodLoc}/>
        </div>)
}
Game.prototype ={
    closeGame: Proptypes.function,
    weight: Proptypes.number.isRequired,
    height: Proptypes.number.isRequired,
}
export default Game
export {startX, startY, dropScore}