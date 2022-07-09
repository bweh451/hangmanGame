import {Modal, Button} from 'react-bootstrap';
export default function Result (props) {

    let title;
    let body;
    let show = false;

    if(props.result === "win"){
        title = <strong>Congratulations, you've won!</strong>
        body = (
          <div>
             <p>Well done on winning the game! Let's see if you can do it again!</p>
             <p>Click the button to reset the game and to give it another go!</p>
          </div>
        )
        show = true;
    }

    else if (props.result === "lose"){
        title = <strong>Unfortunately, you've lost!</strong>
        body = (
          <div>
            <p>Don't worry, some of the words are tough!</p>
            <p>The word was: <strong>{props.answer.join("")}</strong></p>
            <p>Click the button to reset the game and to give it another go!</p>
          </div>
        )
        show = true;
    }

    return (
        <>
        <Modal show={show} backdrop="static" centered={true}> 

          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>{body}</Modal.Body>

          <Modal.Footer>
            <Button  onClick={props.func}>Reset game</Button>
          </Modal.Footer>

      </Modal>
      </>
    )
}
 