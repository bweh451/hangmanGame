//Created a Word component
export default function Word (props) {

    return(
        //Returns the state's answerLetters prop passed in as prop within this component 
        //Maps each letter to a new list item.
        //Also passed in the state's guessedLetter prop as a prop and uses a ternary statement,
        //which checks if the answerLetters prop includes the letter the user has guessed.
        //If so it return the letter else it will return and underscore "_"
        <div className="flexContainer">
            <ul>
                {props.answer.map((letter, key) => <li key={key}> <h1>{props.guessed.includes(letter) ? letter : "_"}</h1></li>)}
            </ul>
        </div>
    )

}