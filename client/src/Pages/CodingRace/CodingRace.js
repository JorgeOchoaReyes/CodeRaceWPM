import React, {useState} from 'react'; 
import TypeLogic from '../CodingRace/CompsRace/TypeLogic'; 
import LangOptions from './CompsRace/LangOptions';
import ScoreBoard from './CompsRace/ScoreBoard'; 
import RegisterScore from './CompsRace/Modal'; 
import './CodingRace.css';


const CodingRace = props => {

  //Score is stored here 
  const [score, setScore] = useState(0); 
  const [currentLang, setCurLang] = useState('React.js'); 

  const [status, setStatus] = useState('Start');
  const [seconds, setSeconds ] = useState(-2);
  const [inProgress, setIP] = useState(0); 

  const langChange = e => {
    setCurLang(e.target.name);
    triggerEnd(); 
  }

  const scoreChange = () => {
    setScore(c => c = c + 1); 
  }

  const redirectHandle = () => {
    document.getElementById('leaderboard').scrollIntoView(); 
  }

  const triggerStart = () => {
    setSeconds(59); 
    setIP(1); 
    return;
  }

  const triggerEnd = () => {
    console.log('Triggered')
    setSeconds(0); 
    setIP(0); 
    setStatus('End');
    return; 
  }

  const scoreReset = () => {
    setScore(0); 
  }

  return ( 
    <>
      <RegisterScore score={score} time={seconds} lang={currentLang} scoreReset={scoreReset} status={status}/>
      <div style={{height: '28rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'space-around', paddingTop: '6rem'}}> 

        <div style={style.centerAlign, {fontSize: '50px', paddingBottom: '4rem'}}> 
          <span style={{fontFamily: 'consolas', color: 'black', fontWeight: 'bold'}}> Test </span> 
          <span style={{fontFamily: 'consolas', color: 'black', fontWeight: 'bold'}}> Your </span>
          <span style={{fontFamily: 'consolas', color: 'black', fontWeight: 'bold'}}> Coding </span> 
          <span style={{fontFamily: 'consolas', color: 'black', fontWeight: 'bold'}}> Speed! </span>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}> 
            
            <div  style={{display: 'flex', justifyContent: 'center'}}>
              <ScoreBoard score={score} lang={currentLang} checkIP={inProgress} time={seconds} endTyping={triggerEnd} />
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', }} > 
              <div> 
                <LangOptions langChangeHandle={langChange} />  
              </div>
            </div>

          </div>

          <div  style={{display: 'flex', justifyContent: 'center', paddingTop: '4rem', paddingBottom: '4rem'}}>
            <TypeLogic  lang={currentLang} status={status} scoreHandler={scoreChange} startTyping={triggerStart} checkIP={inProgress} />
          </div>

        </div>
      </div>

      {/* <div style={{height: '15rem', display: 'flex',  justifyContent: 'center', paddingTop: '7rem'}} >      
        <Redirect clickHandle={redirectHandle} />
      </div> */}
 

      {/* <div>  
        <WavesDiv />
      </div>  */}

      {/* <div id='leaderboard'> 
        <LeaderBoard />
      </div> */}

    </>
    );
}

let style = {
  centerAlign: {
    display: 'flex', justifyContent: 'center'
  }
}


export default CodingRace;