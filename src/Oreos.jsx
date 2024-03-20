import React from 'react';
import oreosBg from './assets/no-revisions-tkUMZUHgDSU-unsplash.jpg';

const Oreos = () => {
    return (
        <div className='snack'
            style={{
                backgroundImage: `url(${oreosBg})`,
                backgroundPosition: '0% 60%'
            }}>
        </div>
    )
}

export default Oreos;