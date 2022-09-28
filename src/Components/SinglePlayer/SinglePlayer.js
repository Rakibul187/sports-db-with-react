import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = ({ player, cart, setCart }) => {
    const { strPlayer, strCutout, strDescriptionEN, idPlayer } = player
    const handleAddToCart = () => {
        const info = {
            strPlayer,
            strCutout, strDescriptionEN,
            idPlayer,
            price: '115'
        };
        if (cart) {
            const newPlayer = [...cart, info];
            setCart(newPlayer)
            return
        }
        else {
            setCart([cart])
            return
        }
    }

    console.log(cart)
    return (
        <div className='cart'>
            <img className='player-img' src={strCutout
            } alt='/' />
            <h3> {strPlayer}</h3>
            <p>{strDescriptionEN ? strDescriptionEN.slice(0, 60) : 'Hi i am a good player buy me please!!!!'}</p>
            <button className='cart-btn'>Details</button>
            <button onClick={handleAddToCart} className='cart-btn'>Add to cart</button><br />
            <button className='cart-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;