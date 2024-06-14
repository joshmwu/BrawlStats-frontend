import React from 'react';
import Player from './Player';

const App = () => {
    const playerTag = '#PCGRRYQQ'; // Example player tag

    return (
        <div className="App">
            <header className="App-header">
                <h1>Brawl Stars Player Info</h1>
                <Player playerTag={playerTag} />
            </header>
        </div>
    );
};

export default App;