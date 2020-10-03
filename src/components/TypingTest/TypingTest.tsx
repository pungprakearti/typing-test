import React, { useState } from 'react'
import cx from 'classnames'
import styles from './TypingTest.module.scss'

const TypingTest = () => {
  const defText = [
    'the',
    'at',
    'there',
    'some',
    'my',
    'of',
    'be',
    'use',
    'her',
    'than',
    'and',
    'this',
    'an',
    'would',
    'first',
    'a',
    'have',
    'each',
    'make',
    'water',
    'to',
    'from',
    'which',
    'like',
    'been',
    'in',
    'or',
    'she',
    'him',
    'call',
    'is',
    'one',
    'do',
    'into',
    'who',
    'you',
    'had',
    'how',
    'time',
    'oil',
    'that',
    'by',
    'their',
    'has',
    'its',
    'it',
    'word',
    'if',
    'look',
    'now',
    'he',
    'but',
    'will',
    'two',
    'find',
    'was',
    'not',
    'up',
    'more',
    'long',
    'for',
    'what',
    'other',
    'write',
    'down',
    'on',
    'all',
    'about',
    'go',
    'day',
    'are',
    'were',
    'out',
    'see',
    'did',
    'as',
    'we',
    'many',
    'number',
    'get',
    'with',
    'when',
    'then',
    'no',
    'come',
    'his',
    'your',
    'them',
    'way',
    'made',
    'they',
    'can',
    'these',
    'could',
    'may',
    'I',
    'said',
    'so',
    'people',
    'part',
  ]

  // State
  const [curWord, setCurWord] = useState(0);

  // Shuffle array
  const shuffleText = (text: Array<string>) => {
    let currentLength = text.length - 1
    let textToShuffle = text
    let shuffledText = []
    let index = 0

    while (currentLength > 0) {
      index = Math.floor(Math.random() * currentLength)
      shuffledText.push(textToShuffle[index])
      textToShuffle.splice(index, 1)
      currentLength -= 1;
    }

  return shuffledText
  }

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }

  const words = shuffleText(defText)

  return (
    <div className={styles.Wrap}>
      <div className={cx(styles.Inner, 'container')}>
        <div className={styles.Words}>
          {words.map((word, i) => {
            return (
              <div
                className={styles.Word}
                key={i}
              >
                {word}
              </div>
            )
          })}
        </div>
        <input
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default TypingTest
