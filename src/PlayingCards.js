import React, { Component }  from "react";
//images:
import Brentwood from './images/Brentwood.jpg'
import LemeirtPark from './images/LemeirtPark.jpg'
import LongBeach from './images/LongBeach.jpg'
import MidTown from './images/MidTown.jpg'
import TheArtsDistrict from './images/TheArtsDistrict.jpg'
import TheHuntington from './images/TheHuntington.jpg'
import WestCovina from './images/WestCovina.jpg'
import BelAir from './images/BelAir.jpg'
import CatalinaIsland from './images/CatalinaIsland.jpg'

// setup of the cards
const initialPlayingCards = [
    {
        id: 1,
        image: Brentwood,
        clicked: false 
    },
    {
        id: 2,
        image: LemeirtPark,
        clicked: false 
    },
    {
        id: 3,
        image: LongBeach,
        clicked: false 
    },
    {
        id: 4,
        image: MidTown,
        clicked: false 
    },
    {
        id: 5,
        image: TheArtsDistrict,
        clicked: false 
    },
    {
        id: 6,
        image: TheHuntington,
        clicked: false 
    },
    {
        id: 7,
        image: WestCovina,
        clicked: false 
    },
    {
        id: 8,
        image: BelAir,
        clicked: false 
    },
    {
        id: 9,
        image: CatalinaIsland,
        clicked: false 
    },

];

class PlayingCards extends Component {
    constructor(props){
        super();
        this.state = {
            cards: initialPlayingCards
        }
    }
    shuffleCards(cardsArray){
        //do the shuffle:
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = cardsArray[i]
            cardsArray[i] = cardsArray[j]
            cardsArray[j] = temp
        }

        return cardsArray
    }
    resetCards(){
        // this.setState({
        //     cards: this.state.cards.map(card => {
        //         return {...card, card.clicked:  false}})
        // })
    }
    handleClick(id){
        console.log(id);
        //loop through the cards and test conditional of which one was clicked;
        this.state.cards.forEach(card => {
            if (card.id === id) {
                //let's see if this item has been clicked before:
                if (card.clicked) {
                    //game over result
                    console.log("Game Over!");
                    //put a "game over" message and then reset the game
                    this.resetCards();
                } else {
                    //game continues, we need to increment the score

                    //we also need to update the clicked card as true
                    card.clicked = true; //update with a setState instead
                    this.setState({cards: this.state.cards});
                }
            }
        })
    }
    render(){
        const shuffledCards = this.shuffleCards(this.state.cards)
        const cards = shuffledCards.map(card => {
            return (
                <div key={card.id}>
                    <img src={card.image} className="card" alt="card" onClick={() => this.handleClick(card.id)} />
                </div>
            );
        })
        return (
            <main className="playingCards">{cards}</main>
    
    
        );
    }
    
}



export default PlayingCards;