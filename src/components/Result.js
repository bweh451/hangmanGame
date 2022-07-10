//Imported the following from react-bootstrap
import {Modal, Button} from 'react-bootstrap';

//Created a Result component that will display if the user has won or lost
export default function Result (props) {

    //Created the following variables for use below
    let title;
    let body;
    let show = false;

    //The state's result prop gets passed as prop to this component,
    //the following statement checks if the result is set to "win"
    if(props.result === "win"){

        //If so the following to variables gets set to the following
        title = <strong>Congratulations, you've won!</strong>

        body = (
          <div>
             <p>Well done on winning the game! Let's see if you can do it again!</p>
             <p>Click the button to reset the game and to give it another go!</p>
          </div>
        )

        show = true;
    }

    //Checks if the result is set to "lose"
    else if (props.result === "lose"){

        //If so the following to variables gets set to the following
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

    //Returns the following with the varaibles created above passed into the relevant components
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
 