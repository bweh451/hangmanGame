//Imported all the images
import Img0 from '../assets/images/state1.GIF';
import Img1 from '../assets/images/state2.GIF';
import Img2 from '../assets/images/state3.GIF';
import Img3 from '../assets/images/state4.GIF';
import Img4 from '../assets/images/state5.GIF';
import Img5 from '../assets/images/state6.GIF';
import Img6 from '../assets/images/state7.GIF';
import Img7 from '../assets/images/state8.GIF';
import Img8 from '../assets/images/state9.GIF';
import Img9 from '../assets/images/state10.GIF';
import Img10 from '../assets/images/state11.GIF';

//Created a component that renders the images
export default function Images (props){

    //Created an empty varaible for use below
    let image = "";

    //Created the following variable which is related to the state's failedAttempts prop (passed in as a prop to this component)
    let imgNum = props.failedAttempts;

    //Switch statement that switches through the variable created above.
    //Depending on the case it will set the relevant image to the image variable created above
    switch(imgNum){
        
        case 1: 
            image = Img1;
            break;
        
        case 2: 
            image = Img2;
            break;

        case 3: 
            image = Img3;
            break;

        case 4: 
            image = Img4;
            break;

        case 5: 
            image = Img5;
            break;

        case 6: 
            image = Img6;
            break;

        case 7: 
            image = Img7;
            break;

        case 8: 
            image = Img8;
            break;

        case 9: 
            image = Img9;
            break;

        case 10: 
            image = Img10;
            break;

        default:
            image = Img0;
            break;
    }


    //Returns the image
    return (
        <div className="flexContainer images">
            <img src={image}></img>
        </div>
    );

}