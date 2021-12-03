import React, { useEffect, useState } from 'react'; 
import {Card} from 'react-bootstrap';
import { GiLaurelCrown } from "react-icons/gi";

const BoxScore = props => {
    return(
       <div>
            <div style={styles.box} > <p> {props.list.name} </p> <p> {props.list.score} </p> <p> {props.list.lang} </p> </div>
            <br />
        </div>
    )
}

//Only store the top 25

const LeaderBoard = props => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/leaderboard/`).then(response => response.json()).then(response => {
            setScores(response);  
          }).catch(err => console.error('An error occured')); 
    }, [])

    return(
        <>
           <div style={styles.board}> 
                <div>
                    <Card style={{ width: '50rem',  boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)', overflow: 'hidden', border: '3px solid #0099ff', background: ''}}>
                        <p style={styles.font}> <GiLaurelCrown style={{color: 'gold'}} size={45}/> Leaderboard  <GiLaurelCrown style={{color: 'gold'}} size={45}/>  </p>
                        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-evenly', }} >
                            <div style={{display: 'flex', flexDirection: 'column'}}> 
                            <div style={styles.box1} > <p> Name: </p> <p> Score: </p> <p> Language: </p> </div>
                                {scores.map((i) => <BoxScore list={i} /> )}
                            </div>
                        </div> 
                    </Card> 
                </div>
            </div>
         
        </>
    ); 
}

let styles = {
    board: {
        height: '50rem', 
        display: 'flex',
        justifyContent: 'center',
    },
    box: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ff6600', 
        borderRadius: '20px',
        width: '750px', 
        color: 'white', opacity: '90%', fontFamily: 'consolas', 
        fontWeight: 'bold'
    },
    box1: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
        borderRadius: '20px',
        width: '750px', 
        color: 'black', fontWeight: 'bold', fontFamily: 'consolas'
    },
    font: {
        fontSize: '42px', color: '#0099ff', fontWeight: 'bold', fontFamily: 'consolas'
    }
}

export default LeaderBoard; 