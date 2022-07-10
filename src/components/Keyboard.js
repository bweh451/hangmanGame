export default function Keyboard (props) {
    let element;

    //Created a string containing all letter of the alphabet (included the dash "-" character as well)
    const letters = "abcdefghijklmnopqrstuvwxyz-";

    //Created a character array where each letter is an array item
    const letterArr = Array.from(letters);

    //Passed in the state's guessedLetter prop as a prop within this component
    let guessedLetters = props.guessed;
    
    //If the result is equal to win or lose 
    if(props.result === "win" || props.result === "lose"){

        //The following element gets created (the onClick function is removed for safety even though the button will be disabled when clicked)
        element = (
            <div className="buttons">
                {/* Mapped each letter in the array to a button */}
                {letterArr.map((letter, key) => <button key={key} value={letter}  disabled={guessedLetters.includes(letter) ? true : false}> {letter} </button>)}
            </div>
        )
    }
    
    //Else if return the following element which includes the onClick function
    else{
        element = (
            <div className="buttons">
                {/* Mapped each letter in the array to a button */}
                {letterArr.map((letter, key) => <button key={key} value={letter} onClick={props.func} disabled={guessedLetters.includes(letter) ? true : false}> {letter} </button>)}
            </div>
        )
    }

    return(
        <div className="flexContainer keyboard">
            {element}
        </div>
    )
}