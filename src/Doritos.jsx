import React from 'react';
import doritosBg from './assets/vinicius-amnx-amano-jf15-wy_Mow-unsplash.jpg';

const Doritos = () => {
    return (
        <div className='snack'
            style={{
                backgroundImage: `url(${doritosBg})`,
                backgroundPosition: '0% 55%'
            }}>
        </div>
    )
}

export default Doritos;