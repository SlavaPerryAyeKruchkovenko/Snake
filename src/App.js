import './App.css';
import Holst from './Widgets/Holst'
import React,{useEffect} from 'react'
import Point from "./Models/Point";
import $ from 'jquery';
import Snake from "./Models/snake";

let weight = document.documentElement.clientWidth
let height = document.documentElement.clientHeight
let vector = new Point(-0.3,-0.7)
let foodLoc = new Point(rndNum(10,weight-10),rndNum(10,height-10))
let radius = 20
const startX = rndNum(weight/4,weight*3/4)
const startY = rndNum(height/4,height*3/4)
const snake = new Snake(radius,new Point(startX,startY))

$(document).ready(function($) {
    $(window).resize(function() {
        console.log("resize")
        weight = document.documentElement.clientWidth
        height = document.documentElement.clientHeight
    })})

function rndNum(min,max) {return Math.floor(Math.random() * (max - min + 1) + min)}

function App() {
    window.$ = window.jQuery = $;

    document.addEventListener("keydown",keyPush)
    const [head,setHead] = React.useState(snake.head)

    if(head.position.X >= foodLoc.X-radius && head.position.X <= foodLoc.X+radius
        && head.position.Y >= foodLoc.Y-radius && head.position.Y <= foodLoc.Y+radius){
        snake.enlargeSnake()
        foodLoc = new Point(rndNum(10,weight-10),rndNum(10,height-10))
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            radius = radius=== 26?20:radius+2
            setHead(snake.moveSnake(vector,1))
        },1000/15);
        return () => clearInterval(interval)
    },[])
    function keyPush(evt) {
        switch(evt.keyCode) {
            case 37:
                if(vector.X!==1) vector = new Point(-1,0);break
            case 38:
                if(vector.Y!==1) vector = new Point(0,-1);break
            case 39:
                if(vector.X!==-1) vector = new Point(1,0);break
            case 40:
                if(vector.Y!==-1) vector = new Point(0,1);break
        }}

  return (
      <React.Fragment>
          <Holst weight={weight} height={height} vector={vector}
                 radius={radius} body={snake.getBody()} foodLoc={foodLoc}/>
      </React.Fragment>
  );
}

export default App;
