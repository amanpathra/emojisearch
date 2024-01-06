import { useState } from 'react';
import './App.css';
import EmojiResults from './components/EmojiResults';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import filterEmoji from './filterEmoji';

function App() {

    const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji(''))

    return (
        <div className="App">
            <Header/>
            <SearchBar setFilteredEmoji={setFilteredEmoji}/>
            <EmojiResults emojiData={filteredEmoji}/>
        </div>
    );
}

export default App;