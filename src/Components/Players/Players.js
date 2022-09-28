import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'
const Players = ({ players, cart, setCart }) => {
    return (
        <div className='cart-container'>
            {players.map(player => <SinglePlayer key={player.idPlayer} player={player} cart={cart} setCart={setCart}></SinglePlayer>)}
        </div>
    );
};

export default Players;