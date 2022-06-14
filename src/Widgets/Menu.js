import React from "react";
import SnakeMp4 from "../Assets/snake.mp4";
import SnakeJpg from "../Assets/snake.jpg";

const styles = {
    main: {
        width: '100%',
        height: '100%',
        margin: '0',
    },
    menu: {
        background: '#3FEEE6',
        padding: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50%',
        height: '70%',
        width: '70%',
        borderRadius: '20px',
    },
    name: {
        fontSize: '24px',
        textAlign: 'center',
        padding: '10px',
        color: '#1A1A1D',
    },
    btn: {
        padding: '10px',
        width: '90%',
        background: '#FC4445',
        borderRadius: '15px',
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '5%',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    listView: {
        height: '100%',
        listStyleType: 'none',
        paddingLeft: 0,
    }
}

function Menu(props) {
    function openSetting() {
        //todo open settings
    }

    function openRecords() {
        //todo open records
    }

    const {startGame} = props;
    const {exit} = props;
    return (
        <div style={styles.main}>
            <div style={styles.menu}>
                <p style={styles.name}>🆂🅽🅰🅺🅴 🆂🅴🅰🆂🅾🅽 🐍</p>
                <ul style={styles.listView}>
                    <li>
                        <button onClick={startGame} style={styles.btn}>sᴛᴀʀᴛ</button>
                    </li>
                    <li>
                        <button onClick={openSetting} style={styles.btn}>sᴇᴛᴛɪɴɢs</button>
                    </li>
                    <li>
                        <button onClick={openRecords} style={styles.btn}>ʀᴇᴄᴏʀᴅs</button>
                    </li>
                    <li>
                        <button onClick={exit} style={styles.btn}>ᴄʟᴏsᴇ ɢᴀᴍᴇ</button>
                    </li>
                </ul>
            </div>
            <video className="video" loop autoPlay muted
                   poster={SnakeJpg}>
                <source src={SnakeMp4} type="video/mp4"/>
            </video>
        </div>


    );
}

export default Menu;