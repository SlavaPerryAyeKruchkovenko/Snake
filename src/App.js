import './App.css';
import React from 'react'
import Game from "./Widgets/Game"

function App() {
    const [play, setPlay] = React.useState(true)

    function closeGame() {
        setPlay(false)
    }
    return (
        play ? <Game closeGame={closeGame} /> : <div/>);
}

export default App;
