export default function Word (props) {

    return(
        <div className="flexContainer">
            <ul>
            {props.answer.map((letter, key) => <li key={key}> <h1>{props.guessed.includes(letter) ? letter : "_"}</h1></li>)}
            </ul>
        </div>
    )

}