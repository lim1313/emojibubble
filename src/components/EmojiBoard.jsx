import React, { useState, useEffect } from 'react';
import Emoji from './Emoji';
import EmojiButton from './EmojiButton';
import EmojiBoardWrapper from './EmojiBoardWrapper';
import EmojiBubble from './EmojiBubble';
import AutoExpire from './AutoExpire';

const EmojiBoard = () => {
  const emojis = [
    { label: 'Thumbs Up', symbol: '👍' },
    { label: 'Cat', symbol: '😸' },
    { label: 'Smiley Poo', symbol: '💩' },
    { label: 'Moon', symbol: '🌕' },
    { label: 'Korea', symbol: '🇰🇷' },
  ];

  const [emojiQueue, setEmojiQueue] = useState([]);

  useEffect(() => {
    console.log(emojiQueue);
  }, [emojiQueue]);

  // 26:14
  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomPosOrNeg = (max, min) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

    return randomNumber;
  };

  const handleEmojiClick = (label, symbol) => {
    setEmojiQueue([
      ...emojiQueue,
      {
        label,
        symbol,
        size: randomNumber(3, 2),
        left: randomNumber(100, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50),
        id: Date.now(),
      },
    ]);
  };

  const handleEmojiKeydown = (e, label, symbol) => {
    if (e.key === 'Enter') {
      setEmojiQueue([
        ...emojiQueue,
        {
          label,
          symbol,
          size: randomNumber(3, 2),
          left: randomNumber(100, 0),
          one: randomPosOrNeg(200, 50),
          two: randomPosOrNeg(200, 50),
          id: Date.now(),
        },
      ]);
    }
  };

  return (
    <>
      <div>
        <EmojiBoardWrapper>
          {emojis.map(({ label, symbol }, i) => (
            <EmojiButton
              key={i}
              onClick={() => handleEmojiClick(label, symbol)}
              onkeydown={(e) => handleEmojiKeydown(e, label, symbol)}
            >
              <Emoji label={label} symbol={symbol} size='3rem' />
            </EmojiButton>
          ))}
        </EmojiBoardWrapper>
        <div>
          {emojiQueue.map(({ id, label, symbol, size, left, one, two }) => (
            <AutoExpire>
              <EmojiBubble
                key={id}
                label={label}
                symbol={symbol}
                size={size}
                left={left}
                one={one}
                two={two}
              />
            </AutoExpire>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmojiBoard;
