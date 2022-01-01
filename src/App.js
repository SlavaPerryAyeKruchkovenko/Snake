import './App.css';
import React,{useEffect} from 'react'
import Game, {startX, startY, dropScore} from "./Widgets/Game"
import Menu from "./Widgets/Menu"
import Snake from "./Models/snake";
import Point from "./Models/Point";
const radius = 20;
function App() {

    const [game, setGame] = React.useState(null);
    async function closeGame() {
        await setGame(null)
        dropScore()
    }

    function startGame(){
        function createSnake() { return new Snake(radius, new Point(startX, startY)) }
        setGame(<Game closeGame={closeGame} snake={createSnake()}/>)
    }
    return (
        game?? <Menu startGame={startGame}/>);
}

export default App;
