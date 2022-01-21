import React from "react";

const styles = {
    main:{
        width:'100%',
        height:'100%',
        margin:'0',
    },
    menu:{
        background: '#3FEEE6',
        padding: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10%',
        height:'50%',
        width:'50%',
        borderRadius: '20px',
    },
    name:{
        fontSize:'24px',
        textAlign:'center',
        padding:'10px',
        color:'#1A1A1D',
    },
    btn:{
        padding: '10px',
        width: '90%',
        background: '#FC4445',
        borderRadius: '15px',
        marginTop:'10px',
        marginBottom:'10px',
        marginLeft:'5%',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    listView:{
        height: '100%',
        listStyleType: 'none',
        paddingLeft: 0,
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
    const {exit} = props;
    return(
        <div style={styles.main}>
            <div style={styles.menu}>
                <p style={styles.name}>🆂🅽🅰🅺🅴 🆂🅴🅰🆂🅾🅽 🐍</p>
                <ul style={styles.listView}>
                    <li><button onClick={startGame} style={styles.btn}>sᴛᴀʀᴛ</button></li>
                    <li><button onClick={openSetting} style={styles.btn}>sᴇᴛᴛɪɴɢs</button></li>
                    <li><button onClick={openRecords} style={styles.btn}>ʀᴇᴄᴏʀᴅs</button></li>
                    <li><button onClick={exit} style={styles.btn}>ᴄʟᴏsᴇ ɢᴀᴍᴇ</button></li>
                </ul>
            </div>
            <video className="video" poster="./Assets/snake.jpg">
                <source src="../Assets/snake.mp4" type="video/mp4"></source>
            </video>
        </div>


    );
}
export default Menu;