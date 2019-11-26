import React, { Component }  from "react";
//images:
import Brentwood from './images/Brentwood.jpg'
import LemeirtPark from './images/LemeirtPark.jpg'
import LongBeach from './images/LongBeach.jpg'
import MidTown from './images/MidTown.jpg'
import TheArtsDistrict from './images/TheArtsDistrict.jpg'
import TheHuntington from './images/TheHuntington.jpg'
import WestCovina from './images/WestCovina.jpg'

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

];

class PlayingCards extends Component {
    constructor(props){
        super();
        this.state = {
            cards: initialPlayingCards
        }
    }
    render(){
        const cards = this.state.cards.map(card => {
            return (
                <div key={card.id}>
                    <img src={card.image} />
                </div>
            );
        })
        return (
            <main className="playingCards">{cards}</main>
    
    
        );
    }
    
}



export default PlayingCards;