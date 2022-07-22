//Imported the following for use within this component
import React, { Component } from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import Lives from './Lives';
import Images from './Images';
import Result from './Result';


//Created a HangmanController class component.
//This component handles the state of the entire game
export default class HangmanController extends Component {
    constructor() {
      super();
      this.state = this.getInitialState();
    }

    //Created a a state object that represents the initial state of this component
    getInitialState = () => ({
        answerLetters: [],
        result: "",
        guessedLetters: [],
        correctGuesses: 0,
        failedAttempts: 0,
        livesLeft: 10

    });

    //Checks if this component mounted if so then it will fetch a random word from the dictionary
    componentDidMount = () => {
        fetch('./dictionary.txt')
        
        //Gets text from the dictionary
        .then(res => res.text())

        .then(text => {

            //Splits text into an array
            let wordArr = text.split("\n");
            
            //Creates a new array starting at the letter A (removing all the legal information found in the text file)
            wordArr = wordArr.slice(wordArr.indexOf("A"), wordArr.length);
            
            //Chooses a random word from the array
            let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

            //Makes that word a lowercase word
            randomWord = randomWord.toLowerCase();
            
            //Splits that word into a character array (each character is an array item)
            let randomWordLetters = Array.from(randomWord);

            //Returns the character array
            return randomWordLetters;
        })

        //Sets the state of answerLetter prop to the character array
        .then(answer => this.setState({answerLetters: answer}))

        //Catches an error and logs it to the console
        .catch(error => {
            console.log(error);
        })
    }
    
    //Created a function that resets the state to the initial state when a button it pressed
    resetGame = () => {
        this.setState(this.getInitialState())

        //Calls the following function to fetch a random word again when the state is reset
        this.componentDidMount();
    }
    
    //The following function handles all events assciated with the Keyboard component
    handleKeyboardEvents = (e) => {

        //Makes a copy of the state guessedLetters array
        let guessedLetters = this.state.guessedLetters;

        //The button the user has clicked on's value gets pushed the the array
        guessedLetters.push(e.target.value);

        //The guessed letter state variable gets set to the copied array
        this.setState({guessedLetters});
        
        //If the button's value is present in the state's answerLetter array
        if(this.state.answerLetters.includes(e.target.value)){

            //Then if will call the following function to count amount of correct guesses
            this.countCorrectGuesses(e.target.value);
        }

        //Else if will call the following function ,
        //that handles the lives the user has left and amount of failed attampts the user has made
        else{
            this.incrementFailedAttandLivesLeft();
        }

    }

    //Created the following function that counts the amount of correct guesses the user has made.
    //Lets say the user has pressed "a" and "a" appears more than once within the answer then it will count the amount of times it appears
    countCorrectGuesses = (chosenLetter) => {
        
        //Creates a copy of the state's answer array
        let letterArr = this.state.answerLetters;

        //Created variable that will keep count of the amount of correct guesses.
        let correctGuessCount = 0;

        //For loop that loop through the answer array
        for(let i = 0; i < letterArr.length; i++){

            //If the letter the user has chosen is equal to a letter within the array
            if(letterArr[i] === chosenLetter){

                //The count get incremented
                correctGuessCount++;
            }
        }

        //The state's correctGuesses prop get incremented by the count amount
        this.setState(prevState =>
            ({
            correctGuesses: prevState.correctGuesses + correctGuessCount

            //A callback gets made to the set results function
        }),() =>  this.setResults());
    }

    //Created a function that tracks the amount of lives the user has left and the amount of failed attempts the user has made
    incrementFailedAttandLivesLeft = () => {

        //Checks if the states failedAttemp and liveLeft prop are not equal to 10 or 0 respectively
        if(this.state.failedAttempts !== 10 && this.state.livesLeft !== 0){

            //If so then it will increment the failedAttemp prop and decrement the liveLeft prop
            this.setState(prevState => 
                ({
                    failedAttempts: prevState.failedAttempts + 1,
                    livesLeft: prevState.livesLeft - 1

                    //A callback gets made to the setResults function
                }), () =>  this.setResults());
        }
    }

    //Created a setResult function
    setResults = () => {

        //Created a result variable
        let result = "";

        //Checks if the state's correctGuesses prop is equal to the answerLetters prop's lenth
        if(this.state.correctGuesses === this.state.answerLetters.length){

            //If so then the result prop gets set to "win"
            result = "win";
        }

        //Checks if the state's livesLeft prop is equal to 0
        else if(this.state.livesLeft === 0){

           //If so then the result prop gets set to "lose"
            result = "lose";
        }

        //Else the result prop stays empty
        else{
            result = "";
        }

        //The result prop gets set to whatever the result variable is
        this.setState({result: result});
    }

    render() {

        return (
            <div className='flexContainer'>
                <div className='game'>
                    {/* Renders the following components with the relative state props */}
                    <div className='flexContainer'><Images failedAttempts={this.state.failedAttempts}/></div>
                    <div className='flexContainer'><Lives lives={this.state.livesLeft}/></div>
                    <div className='flexContainer'><Word answer={this.state.answerLetters} guessed={this.state.guessedLetters} /></div>
                    <div className='flexContainer'><Keyboard func={this.handleKeyboardEvents} guessed={this.state.guessedLetters} result={this.state.result}/></div>
                    <div className='flexContainer resetBtn'><button onClick={this.resetGame}>Reset game</button></div>
                    <div className='flexContainer'><Result result={this.state.result} answer={this.state.answerLetters} func={this.resetGame}/></div>
                </div>
            </div>
        )
    }
}

