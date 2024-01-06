import emojiList from './emojiList.json'

const filterEmoji = (serachInput, maxResult=20) => {
    return emojiList.filter(emoji => {
        if(emoji.title.toLowerCase().includes(serachInput.toLowerCase())){
            return true;
        }
        if(emoji.keywords.toLowerCase().includes(serachInput.toLowerCase())){
            return true;
        }
        return false;
    }).slice(0, maxResult)
}

export default filterEmoji;