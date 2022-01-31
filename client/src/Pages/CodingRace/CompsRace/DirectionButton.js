import React from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md'
import { GiLaurelCrown } from "react-icons/gi";

import {Button} from 'react-bootstrap'; 

const redirectButton = props => {

    return (
        <> 
            <div style={{background: 'black'}} onClick={props.clickHandle}>
                <div style={styles.font}>
   
                    <GiLaurelCrown size={45}/> 
                    <div style={{paddingLeft: '10px', paddingRight: '10px'}}> Leaderboard </div>
                    <GiLaurelCrown size={45}/> 
           
                </div>
                <div> <MdKeyboardArrowDown color='gold' size='50'/> </div>
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
        color: 'gold', 
        fontWeight: 'bold',
      
    }
}

export default redirectButton;