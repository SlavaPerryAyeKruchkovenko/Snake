import React from "react";

const styles = {
    menu:{
        background: 'red',
        padding: '0px',
        marginBottom: '25%',
        marginTop:'25%',
        marginLeft:'auto',
        marginRight:'auto',
        height:'50%',
        width:'50%',
        borderRadius: '20px',
    },
    name:{
        fontsize:'24px',
        textAlign:'center',
        padding:'10px',
    },
    btn:{
        padding: '10px',
        width: '90%',
        background: 'yellow',
        borderRadius: '15px',
        margin:'10px',
    },
    listView:{
        height: '100%',
    }
}
function Menu(props){
    function openSetting(){
        //todo open settings
    };
    function openRecords(){
        //todo open records
    }
    const {startGame} = props;
    return(
        <div style={styles.menu}>
            <p style={styles.name}>🆂🅽🅰🅺🅴 🆂🅴🅰🆂🅾🅽 🐍</p>
            <ul style={styles.listView}>
                <li><button onClick={startGame} style={styles.btn}>Start</button></li>
                <li><button onClick={openSetting} style={styles.btn}>Settings</button></li>
                <li><button onClick={openRecords} style={styles.btn}>Records</button></li>
            </ul>
        </div>
    );
}
export default Menu;