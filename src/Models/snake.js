import React from 'react'
import Point from './Point'
export default class Snake{
    constructor(size,startPosition) {
        this.body = []
        this.size = size
        this.head = new SnakeEl(startPosition)
        this.body.push(this.head)
        this.enlargeSnake()
        this.enlargeSnake()
    }

    getHead(){
        return this.head
    }

    enlargeSnake(){
        const el = this.body.pop()
        const point = el.position
        console.log(point)
        console.log(this.size)
        const position = new Point(point.X,point.Y + this.size*2)
        console.log(position)
        this.body.push(el)
        this.body.push(new SnakeEl(position))
    }

    moveSnake(point){
        this.body.map( x => x.position += point)
    }

    getBody() {
        return this.body
    }
}
class SnakeEl{
    constructor(position) {
        this.position = position
    }
}
