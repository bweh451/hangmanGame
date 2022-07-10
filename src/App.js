
//Imported the following components
import HangmanController from './components/HangmanController';
import Help from './components/Help';

//Imported the following in order to style react-bootstrap components properly
import 'bootstrap/dist/css/bootstrap.min.css';

//App component
function App() {

  //Returns the following
  return (
    <div className='gridContainer'>
      <div className='content'>
        <div className='contentInner'>
          <div className='flexContainer'><h1 className='gameTitle'>HANGMAN</h1></div>
          <HangmanController />
          <Help />
        </div>
      </div>
    </div>
  );
}
export default App;
