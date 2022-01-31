import React, {useEffect} from 'react'; 
import {Card} from 'react-bootstrap'; 
import Timer from './Timer'; 


const ScoreBoard = props => {

    useEffect(() => {
        if(props.checkIP || props.status === 'End') {
            document.getElementById('timer').style.backgroundColor = 'green';
        }
        else {
            document.getElementById('timer').style.backgroundColor = '#ff6600';
        }
    }, [props.checkIP]);

    return(
        <>
            <Card style={{ width: '25rem', height: '7rem',  alignContent: 'center', flexDirection: 'column', justifyContent: 'center',
                             display: 'flex', overflow: 'hidden', backgroundColor: 'black'}}>
                <div style={style.spreadDivs}> 
                    <div style={style.inDivs}> 
                        <div style={style.divStyle}> {props.score} </div>
                        <div style={style.textStyle}> Score </div>
                    </div >
                    <div style={style.inDivs}> 
                        <div style={style.divStyle}>  {props.lang} </div>
                        <div style={style.textStyle}> Language </div>
                    </div > 
                    <div  style={style.inDivs}> 
                        <div id='timer' style={style.divStyle}> <Timer styling={style.divStyle} time={props.time} triggerEnd={props.endTyping}/> </div>
                        <div style={style.textStyle}> Time </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

let style = {
    divStyle: {
        borderRadius: '6px', 
        backgroundColor: '#ff6600',
        color: 'white', 
        height: '3rem',
        width: '6rem', 
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column',  fontFamily: 'consolas', 
        fontSize: '17px'
    },
    spreadDivs: {
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'row',  
        alignContent: 'space-around' 
    },
    inDivs: {
        paddingLeft: '2px', 
        paddingRight: '2px', 
    },
    textStyle: {
        color: 'white', 
        fontFamily: 'consolas', 
    }
}

export default ScoreBoard; 