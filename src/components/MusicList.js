import React from 'react';
import Song from './Song';

const MusicList = ({songs}) => {

    const musicEntries = songs.map(song => {
        return (
            <Song artist={song['im:artist'].label} key={song['im:name'].label} title={song['im:name'].label}></Song>
        )
    })

    
        return (
            <div className='music-list'>
                {musicEntries}                
            </div>
        );
    }


export default MusicList;
