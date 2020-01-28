import React, { Component } from 'react';
import MusicList from '../components/MusicList'
import Song from '../components/Song'

export class MusicBox extends Component {
constructor(props) {
    super(props);
    this.state = {
        songs: [],
        currentChartPo: 0
    }
}

componentDidMount() {
    const url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(error => console.error());
}

    render() {

        return (
            <div>
                <h2>Top 20</h2>
                <MusicList songs={this.state.songs}/>
                
            </div>
        );
    }
}

export default MusicBox;
