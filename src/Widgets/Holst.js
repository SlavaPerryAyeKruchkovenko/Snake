import React,{useState,useEffect} from 'react'
import Snake from '../Models/snake'
import Point from '../Models/Point'
import { Stage, Layer, Circle } from "react-konva";

const styles = {
    canvas:{
        background: 'white',
        padding: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block'
    },
}
const weight = document.documentElement.clientWidth
const height = document.documentElement.clientHeight
const startX = rndNum(weight/4,weight*3/4)
const startY = rndNum(height/4,height*3/4)
const radius = 20
const snake = new Snake(radius,new Point(startX,startY))
function rndNum(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export default function Holst(){

    const [body,setBody] = React.useState(snake.getBody())

    useEffect(()=>{
        setInterval(()=>{
                console.log("set body")
                setBody(snake.moveSnake(new Point(10,0)))
            },1000)},[body])

    return(
        <React.Fragment>
            <Stage width={weight}
                   height={height}
                   style={styles.canvas}>
                <Layer>
                    {body.map(
                        el => {
                            return <Circle
                                fill="red"
                                stroke="black"
                                x={el.position.X}
                                y={el.position.Y}
                                radius={snake.radius}
                                strokeWidht={5}
                            />
                        })}
                </Layer>
            </Stage>
        </React.Fragment>
    )
}


