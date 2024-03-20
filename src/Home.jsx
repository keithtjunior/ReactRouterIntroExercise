import React from 'react';
import homeBg from './assets/victoriano-izquierdo-JG35CpZLfVs-unsplash.jpg';

const Home = () => {
    return (
        <div className='snack'
            style={{
                backgroundImage: `url(${homeBg})`,
                backgroundPosition: '0% 50%'
            }}>
        </div>
    )
}

export default Home;