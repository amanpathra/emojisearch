import React from 'react'
import EmojiButton from './EmojiButton'

const EmojiResults = (props) => {
    return (
        <div className='emojiResults'>
            {props.emojiData.map(emoji => {
                return <EmojiButton title={emoji.title} symbol={emoji.symbol} key={emoji.title}/>
            })}
        </div>
    )
}

export default EmojiResults
