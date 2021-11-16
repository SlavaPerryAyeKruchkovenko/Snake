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

export default function Holst({weight,height,body,radius}){
    return(
        <React.Fragment>
            <Stage width={weight}
                   height={height}
                   style={styles.canvas}>
                <Layer>
                    {body.map(
                        el => {
                            return  <Circle
                                    fill="red"
                                    stroke="black"
                                    x={Math.abs(el.position.X%weight)}
                                    y={Math.abs(el.position.Y%height)}
                                    radius={radius}
                                    strokeWidht={5}>
                            </Circle>
                        })}
                </Layer>
            </Stage>
        </React.Fragment>
    )
}


