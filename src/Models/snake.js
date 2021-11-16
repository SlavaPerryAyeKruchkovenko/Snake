import React from 'react'
import Point from './Point'

export default class Snake{
    constructor(radius,startPosition) {
        this.radius = radius
        this.head = new SnakeEl(startPosition,radius)
        this.#body.push(this.head)
        this.enlargeSnake()
        this.enlargeSnake()
    }
    #body = []
    getHead(){
        return this.head
    }

    enlargeSnake(){
        const el = this.#body.pop()
        const point = el.position
        const position = new Point(point.X,point.Y + this.radius*2)
        this.#body.push(el)
        this.#body.push(new SnakeEl(position,this.radius))
    }

    moveSnake(point){
        console.log(this.#body[0].position)
        this.#body.map( x => {
                x.position = new Point(x.position.X+point.X,
                    x.position.Y+point.Y)
        })
        return this.#body}

    getBody(){
        return this.#body
    }
}
class SnakeEl{
    constructor(position,radius) {
        this._position = position
        this.radius = radius
    }
    set position(position){this._position = position}
    get position(){return this._position}
}
