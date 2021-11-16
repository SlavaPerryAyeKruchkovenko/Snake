import './App.css';
import Holst from './Widgets/Holst'
import React, {useEffect} from 'react'
import Point from "./Models/Point";
import Snake from "./Models/snake";
const weight = document.documentElement.clientWidth
const height = document.documentElement.clientHeight
const startX = rndNum(weight/4,weight*3/4)
const startY = rndNum(height/4,height*3/4)
const radius = 20
const snake = new Snake(radius,new Point(startX,startY))
function rndNum(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function App() {

  const [head,setHead] = React.useState(snake.getBody())

  useEffect(()=>{
    const interval = setInterval(()=>{
          setHead(snake.moveSnake(new Point(0,-1),1))
        },1000/15);
        return () => clearInterval(interval)
    },[])

  return (
        <Holst weight={weight} height={height} radius={snake.radius}
          body={snake.getBody()}/>
  );
}

export default App;
