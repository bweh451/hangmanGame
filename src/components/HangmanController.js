
import React, { Component } from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import Lives from './Lives';
import Images from './Images';
import Result from './Result';
import Dictionary from '../assets/dictionary/dictionary.txt';


export default class HangmanController extends Component {

    constructor() {

      super();
    
      this.state = this.getInitialState();

    }


    getInitialState = () => ({
        answerLetters: [],
        result: "",
        guessedLetters: [],
        correctGuesses: 0,
        failedState: 0,
        livesLeft: 10

    });


       

    componentDidMount = () => {
        fetch(Dictionary)
        .then(res => res.text())
        .then(text => {
            let wordArr = text.split("\n");
    
            wordArr = wordArr.slice(wordArr.indexOf("A"), wordArr.length);
         
            let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

            randomWord = randomWord.toLowerCase();
    
            let randomWordLetters = Array.from(randomWord);

            return randomWordLetters;

            
        })
        .then(answer => this.setState({answerLetters: answer}))
    }
    

    resetGame = () => {
        this.setState(this.getInitialState())
        this.componentDidMount();
    }
    
    handleEvents = (e) => {
        let guessedLetters = this.state.guessedLetters;
        guessedLetters.push(e.target.value);
        this.setState({guessedLetters});
        
        if(this.state.answerLetters.includes(e.target.value)){

            this.countCorrectGuesses(e.target.value);
        }

        else{
            this.incrementFailedAttandLivesLeft();
        }

    }

    countCorrectGuesses = (chosenLetter) => {
        let letterArr = this.state.answerLetters;
        let correctGuessCount = 0;
        for(let i = 0; i < letterArr.length; i++){

            if(letterArr[i] === chosenLetter){
                correctGuessCount++;
            }
        }

        this.setState(prevState =>
            ({
            correctGuesses: prevState.correctGuesses + correctGuessCount
        }),() =>  this.setResults());
    }

    incrementFailedAttandLivesLeft = () => {

        if(this.state.failedState !== 10 && this.state.livesLeft !== 0){

            this.setState(prevState => 
                ({
                    failedState: prevState.failedState + 1,
                    livesLeft: prevState.livesLeft - 1
                }), () =>  this.setResults());
        }
    }

    setResults = () => {
        let result = "";

        if(this.state.correctGuesses === this.state.answerLetters.length){
            result = "win";
        }
        else if(this.state.livesLeft === 0){
            result = "lose";
        }
        else{
            result = "";
        }

        this.setState({result: result});
    }

    render() {
        return (
            <div className='flexContainer'>
                <div className='game'>
                    <div className='flexContainer'><Images stateNum={this.state.failedState}/></div>
                    <div className='flexContainer'><Lives lives={this.state.livesLeft}/></div>
                    <div className='flexContainer'><Word answer={this.state.answerLetters} guessed={this.state.guessedLetters} /></div>
                    <div className='flexContainer'><Keyboard func={this.handleEvents} guessed={this.state.guessedLetters} result={this.state.result}/></div>
                    <div className='flexContainer resetBtn resetAndHelp'><button onClick={this.resetGame}>Reset game</button></div>
                    <div className='flexContainer'><Result result={this.state.result} answer={this.state.answerLetters} func={this.resetGame}/></div>
                </div>
            </div>
        )
    }
}

