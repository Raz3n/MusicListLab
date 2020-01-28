import React, { Component } from 'react';

 const Song = ({artist, title}) => {
    
        return (
            <div className='song'>
                <h3>{artist}</h3>
                <h3>{title}</h3>
            </div>
        );
    }



export default Song;
