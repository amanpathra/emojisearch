import React, { useState } from 'react'

const EmojiButton = (props) => {

    const {title, symbol} = props

    const [copyText, setCopyText] = useState('Copy')

    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    const copyFunc = () => {
        navigator.clipboard.writeText(symbol)
        setCopyText('Copied!')
        setTimeout(() => {
            setCopyText('Copy')
        }, 2500);
    }

    return (
        <div className='emojiBtn'>
            <img src={src} alt="" width='50px'/>
            <span className='emojiTitle'>{title}</span>
            <span className='copyBtn' onClick={copyFunc}>{copyText}</span>
        </div>
    )
}

export default EmojiButton