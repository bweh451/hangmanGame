
import HangmanController from './components/HangmanController';
import Help from './components/Help';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
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
