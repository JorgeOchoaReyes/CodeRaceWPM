import React, {useEffect} from 'react'; 
import {Modal, Button} from 'react-bootstrap';


const PopUpModal = props => {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Nice Job!
            </Modal.Title>
          </Modal.Header>

       
          <Modal.Body>
            <p>
              Your Score was: {props.score}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Try Again!</Button>
          </Modal.Footer>

  
        </Modal>
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
          btn={disable}
          show={modalShow}
          onHide={() => {
              setModalShow(false);
              props.scoreReset(); }}
        />
      </>
    );

}


export default RenderModal; 