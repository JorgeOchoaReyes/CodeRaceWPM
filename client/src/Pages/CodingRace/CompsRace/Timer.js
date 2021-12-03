import React from 'react'; 
import { useState, useEffect } from 'react';

const Timer = (props) => {  
    const [seconds, setSeconds ] =  useState(props.time);

    useEffect(() => {
        setSeconds(props.time); 
    },[props.time])

    useEffect(()=>{
        let myInterval = setInterval(() => {
                if(seconds === -2);
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    props.triggerEnd(); 
                    
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
    });

    return (
        <div >
        { seconds === -2 || seconds === 0
            ? <div style={styles.font}> 60 </div>
            : <div style={styles.font}> {seconds < 10 ?  `0${seconds}` : seconds}</div> 
        }
        </div>
    )
}

let styles = {
    font: {
        color: 'white', 
        fontSize: '17px', display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column',
    }
}

export default Timer;