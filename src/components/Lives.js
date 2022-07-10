//Created a Lives component
export default function Lives (props) {

    //Created element variable
    let element;

    //Checks if the state's livesLeft prop (passed as prop to this component as "lives"),
    //if lives greater than five
    if(props.lives > 5){

        //If so then it will return the following
        element = <span>You have <strong>{props.lives}</strong> lives left!</span>
    }
    
    //Checks if lives is greater than one
    else if(props.lives > 1){

        //If so then it will return the following
        element = <span>Be careful! You only have <strong>{props.lives}</strong> lives left!</span>
    }

    //Else it will return the following
    else{
        element = <span>Oh no! You only have <strong>{props.lives}</strong> life left!</span>
    }
    
    //Returns the element
    return(
        <div className="flextContainer livesLeft">
           {element}
        </div>
    )
}