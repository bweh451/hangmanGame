export default function Lives (props) {
    let element;

    if(props.lives > 5){
        element = <span>You have <strong>{props.lives}</strong> lives left!</span>
    }
    else if(props.lives > 1){
        element = <span>Be careful! You only have <strong>{props.lives}</strong> lives left!</span>
    }
    else{
        element = <span>Oh no! You only have <strong>{props.lives}</strong> life left!</span>
    }
    
    return(
        <div className="flextContainer livesLeft">
           {element}
        </div>
    )
}