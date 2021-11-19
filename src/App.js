import './App.css';
import Holst from './Widgets/Holst'
import React, {useEffect} from 'react'
import Point from "./Models/Point";
import Snake from "./Models/snake";
import $ from 'jquery';

let weight = document.documentElement.clientWidth
let height = document.documentElement.clientHeight
const startX = rndNum(weight/4,weight*3/4)
const startY = rndNum(height/4,height*3/4)
const radius = 20
const snake = new Snake(radius,new Point(startX,startY))

let vector = new Point(-0.3,-0.7)

function rndNum(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$(document).ready(function($) {
    $(window).resize(function() {
        console.log("resize")
        weight = document.documentElement.clientWidth
        height = document.documentElement.clientHeight
    })})

function App() {
    window.$ = window.jQuery = $;
    const [head,setHead] = React.useState(snake.getBody())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setHead(snake.moveSnake(vector,1))
        },1000/15);
        return () => clearInterval(interval)
    },[])
    document.addEventListener("keydown",keyPush)

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
        <Holst weight={weight} height={height} radius={snake.radius}
          body={snake.getBody()} vector={vector}/>
  );
}

export default App;
