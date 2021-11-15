import React from 'react'
import Snake from '../Models/snake'
import Point from '../Models/Point'
import { Stage, Layer, Circle, Text } from "react-konva";

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

function rndNum(min,max){
    const num = Math.floor(Math.random()*(max-min+1)+min)
    console.log()
    return num
}

function Holst(){
    return(
        <Stage width={weight}
               height={height}
               style={styles.canvas}>
            <Layer>
                {
                    snake.getBody().map(
                        el => {
                            return <Circle
                                fill="red"
                                stroke="black"
                                x={el.position.X}
                                y={el.position.Y}
                                radius={snake.size}
                                strokeWidht={5}
                                />
                        }
                    )
                }
            </Layer>
        </Stage>
    )
}
Holst.prototype = {

}
export  default  Holst