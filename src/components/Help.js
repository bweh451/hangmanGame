//Imported the following from react-bootsrap
import {Popover, OverlayTrigger} from 'react-bootstrap';

//Created a help component
export default function Help (){

    //Created a popover element with information relating to the rules of the game
    const popover = (

          <Popover id="popover-contained">
          <Popover.Header><h1>How to play</h1></Popover.Header>
            <Popover.Body>
              <p>Hangman is a simple word guessing game.</p>
              <p>You, the player, have to try and figure out an unknown word by guessing letters.</p> 
              <p>If too many letters which do not appear in the word are guessed, the player is hanged (and loses).</p>
            </Popover.Body>
          </Popover>

    );
    
    return (
        
        //Returns an OverlayTrigger component with a button
        //When button is presses the popover component will display
        <div className='flexContainer helpBtn'>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <div><button>Help</button></div>
          </OverlayTrigger>
        </div>
    )
}