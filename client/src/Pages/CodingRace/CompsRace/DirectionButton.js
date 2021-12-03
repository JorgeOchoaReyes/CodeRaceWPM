import React from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md'
import { GiLaurelCrown } from "react-icons/gi";

const redirectButton = props => {

    return (
        <> 
            <div onClick={props.clickHandle}>
                <div style={styles.font}>
   
                    <GiLaurelCrown size={45}/> 
                    <div style={{paddingLeft: '10px', paddingRight: '10px'}}> Leaderboard </div>
                    <GiLaurelCrown size={45}/> 
           
                </div>
                <div > <MdKeyboardArrowDown size='50'/> </div>
            </div> 
        </> 
    )
}

let styles = {
    font: {
        display: 'flex',
        alignContent: 'center',
        fontFamily: 'consolas', 
        fontSize: '30px',
        color: '#ff6600', 
        fontWeight: 'bold',

      
    }
}

export default redirectButton;