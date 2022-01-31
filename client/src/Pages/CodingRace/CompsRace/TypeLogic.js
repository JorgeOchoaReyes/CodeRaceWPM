import React, {useState, useRef, useEffect} from 'react'; 
import {Card} from 'react-bootstrap'; 



const CodingRace = props => {
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]); 
   
  //Check is used to store words that were completed and see if it was typed right or not 
  const [checker, setChecker] = useState([]); 
  
  const [curWord, setCurWord] = useState(''); 
  const [curIndx, setcurIndx] = useState(0);

  const [highlight, setHighlight] = useState(); 
  const [colorStyle, setColorStyle] = useState('black'); 

  const inputRef = useRef(); 


  useEffect(() => {
    if (props.checkIP === 0) {
      document.getElementById('test-input').innerHTML = ''; 
      setLeft([]); 
      setColorStyle('black');
      setcurIndx(0); 
      setCurWord(''); 
      fetch(`https://nameless-plateau-19889.herokuapp.com/language/${props.lang}`).then(response => response.json()).then(response => {
        setRight(response); 
        setChecker(response); 
      }).catch(err => console.error('An error occured')); 
      return; 
    }
 

  }, [props.checkIP, props.lang]);

  //This is to listen for changes and change whehter the curWord is the same as the expected word 
  useEffect(() => {
    if(!highlight) {
      setColorStyle('black');
      document.getElementById('test-input').style.color = textColor;
    }
    if(highlight) {
      setColorStyle('red'); 
      document.getElementById('test-input').style.color = 'red';
    }
  } , [highlight])

  const curTypedCheck = temp => {
    //cur word is wrong so far 
    if(temp!== checker[curIndx].substring(0, temp.length )) {
      setHighlight(1)
      return; 
    }

    //cur word is right so far 
    if(temp === checker[curIndx].substring(0, temp.length )) {
      setHighlight(0)
      return; 
    }
  }

   //Logic for typing game 
   const typingHandler = e => {

    if(props.checkIP === 0) {
      props.startTyping(); 
    }

    //console.log(e.key); 

    //Backspace in case word is typed wrong
    if(e.key === 'Backspace') {
      //console.log('You have pressed backspace!');
      
      if(curWord === '') return; 

      //console.log('Entered Backspace area')
      let tempCurWord = curWord.substring(0, curWord.length - 1); 
      let tempchar = curWord.at(curWord.length - 1); 
      console.log(tempchar); 
      setCurWord(tempCurWord);

      if(colorStyle === 'black') {
        let templist = [...right]; 
        let shallow = templist[0]; 
        let res = tempchar.concat(shallow); 
        templist[0] = res; 
        setRight(templist); 
      }

      curTypedCheck(tempCurWord); 
      return; 
    }

    //Filters out trivial keys like f1 etc
    if(e.key.length !== 1) {
      if(e.key === 'Enter') {
        e.preventDefault(); 
      }
      return;
    } 

    //End Current typing by Pressing Space Bar
    if(e.key === ' ') {
      //console.log('You have ended the current string!'); 

      //Add Curword to Left 
      setLeft(c => c = [...c, curWord]);

      //Clear CurWord and Update Score 
      if(curWord === checker[curIndx]) {
        //console.log('You have typed a word Correctly!');
        //setScore(c => c = c + 1);
        props.scoreHandler(); 
      }
      setCurWord(''); 

      //Increase Index for checker 
      setcurIndx(c => c = c + 1); 

      //Remove a words from the list 
      let temp = [...right]; 
      temp.shift(); 
      setRight(temp);  
      setColorStyle('black');

      document.getElementById('test-input').innerHTML = ''; 
      return; 
    }

    //Word Is Typed Correctly
    if(e.key === right[0][0] && colorStyle === 'black'){
      //console.log('Correct char typed!');

      //Update the curWord to keep track and check later if we typed it correctly 
      let typed = curWord + e.key; 
      setCurWord(typed); 
      console.log(curWord); 

      //Update the right state, by removing
      let temp = right[0].substring(1); 
      let tempList = [...right]; 
      let shallow = tempList[0]; 
      shallow = temp; 
      tempList[0] = shallow; 
      setRight(tempList);

      curTypedCheck(typed); 

      return; 
    }

    //Char is typed incorrectly but will still be added 
    else {
      setColorStyle('red');
      let typed = curWord + e.key; 
      curTypedCheck(typed); 
      setCurWord(typed); 
      return; 
    }

  }

  const textColor = 'black';
  return (
    <>

    <Card style={{ width: '50rem', height: '5rem', boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)', overflow: 'hidden', border: '3px solid #ff6600', background: 'white'}}>
      <div  style={{display: 'flex', justifyContent: 'center'}}>

        <div onClick={() => inputRef.current.focus()} style={{display: 'flex',  flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width:'64rem'}}> 
          
          <div style={{display: 'flex', overflow: 'hidden',  flex: '1', background: '',  justifyContent: 'end'}}> 
            {left.map((i,j) => <span style={{fontSize: '3rem', paddingRight: '5px',  fontFamily: 'consolas', color: textColor}} key={j}> {i} </span>)}
          </div>

          <div id='test-input'  onKeyDown={e => typingHandler(e)} tabIndex='1' autoCorrect='off' autoCapitalize='off' contentEditable='true' ref={inputRef} 
                                                    style={{ flex: '1', paddingLeft: '4px', paddingRight: '0px', caretColor: textColor, outline: 'none',
                                                          border: '3px solid transparent', textAlign: 'right', fontSize: '3rem', color: textColor,  fontFamily: 'consolas'
                                                          }}> </div>
          
          <div style={{display: 'flex', overflow: 'hidden', flex: '2', alignContent: 'space-evenly', alignContent: 'center'}}>
            {right.map((i,j) => <span style={{paddingRight: '25px', fontSize: '3rem', color:  textColor, fontFamily: 'consolas'}} key={j}> {i} </span>)}
          </div>   

        </div> 

      </div>
            
      
    </Card>
    </>)
}

export default CodingRace;