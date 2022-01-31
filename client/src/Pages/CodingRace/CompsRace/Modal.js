import React, {useEffect, useState} from 'react'; 
import {Modal, Button} from 'react-bootstrap';


const PopUpModal = props => {
  const [name, setName] = useState(); 
  const regularCase =     
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nice job!
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Your Score was: {props.score}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Try again for a better score!</Button>
      </Modal.Footer>

    </Modal>;

  const registerScore = async (user) => {
    try {
      await fetch(`http://localhost:3000/leaderboard/newHighScore`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: user, bound: props.bounds.score})
      })
    } catch (err) {
      console.log(err); 
    }
    
  }

  const newscoreCase = 
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nice! 
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          Your Score was: {props.score}
        </p>
      </Modal.Body>

      <p>
          Set a nickname to register your score!
      </p>
      <input  onChange={e => setName(e.target.value)}/> 
    
      <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
 
            <Button onClick={() => {
                                props.onHide();
                                registerScore({Lang: props.lang, score: props.score, name: name })
                                }}>Subtmit Scores</Button>
      </Modal.Footer>

    </Modal>;

  return (
    <>
     {props.bounds ? (props.score > props.bounds.score ? newscoreCase : regularCase) : (regularCase)}
    </>
   );
}

const RenderModal = props => {
    const [modalShow, setModalShow] = React.useState(false);
    const [disable, setDisable] = React.useState(0); 


    useEffect(() => {
        if (props.time === 0 && props.score > 0 ) {
            setModalShow(true); 
        }

    }, [props])


    return (
      <>
        <PopUpModal
          score={props.score}
          lang={props.lang}
          btn={disable}
          show={modalShow}
          bounds={props.bounds}
          onHide={() => {
              setModalShow(false);
              props.scoreReset(); }}
        />
      </>
    );

}


export default RenderModal; 