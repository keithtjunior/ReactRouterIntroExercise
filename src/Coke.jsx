import React from 'react';
import cokeBg from './assets/mikael-stenberg-cJeGGOI8eE0-unsplash.jpg';

const Coke = () => {
    return (
        <div className='snack'
            style={{
                backgroundImage: `url(${cokeBg})`,
                backgroundPosition: '0% 40%'
            }}>
        </div>
    )
}

export default Coke;