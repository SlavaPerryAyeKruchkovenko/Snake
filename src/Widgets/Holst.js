import React from 'react'
import Point from '../Models/Point'
import { Stage, Layer, Circle } from "react-konva";
import Head from './Head'

const styles = {
    canvas:{
        background: 'white',
        padding: '0',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'block'
    },
}

export default function Holst({weight,height,body,radius,vector}){
    function correctLoc(el){
        if(el.position.X > weight){
            console.log(el.position.X)
            el.position = new Point(0,el.position.Y)
        }
        if(el.position.Y > height){
            console.log("any")
            el.position = new Point(el.position.X,0)
        }
        if(el.position.X < 0){
            el.position = new Point(weight,el.position.Y)
        }
        if(el.position.Y < 0){
            el.position = new Point(el.position.X,height)
        }
        return el.position
    }
    function cnvrtEeysVector(loc){

    }
    return(
        <React.Fragment>
            <Stage width={weight}
                   height={height}
                   style={styles.canvas}>
                <Layer>
                    {body.map(
                        el => {
                            const x = correctLoc(el).X
                            const y = correctLoc(el).Y
                            return  el.isHead
                                ?<Head x={x} y={y} radius={radius}
                                vector={vector}/>
                                :<Circle fill="red" stroke="black"
                                    x={x}
                                    y={y}
                                    radius={radius}
                                    strokeWidht={5}/>
                        })}
                </Layer>
            </Stage>
        </React.Fragment>
    );
}


