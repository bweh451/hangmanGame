export default function Keyboard (props) {
    let element;

    //Created a string containing all letter of the alphabet (included the dash "-" character as well)
    const letters = "abcdefghijklmnopqrstuvwxyz-";

    //Created a character array where each letter is an array item
    const letterArr = Array.from(letters);

    let guessedLetters = props.guessed;
    
    if(props.result === "win" || props.result === "lose"){
        element = (
            <div className="buttons">
                {/* Mapped each letter in the array to a button */}
                {letterArr.map((letter, key) => <button key={key} value={letter}  disabled={guessedLetters.includes(letter) ? true : false}> {letter} </button>)}
            </div>
        )
    }
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