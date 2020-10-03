import React from 'react'
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

  // Shuffle array
  const shuffleText = (text: Array<string>) => {
    let curLen = defText.length - 1
    let shuffledText = []

    while (curLen > 0) {
      shuffledText.push(defText[Math.floor(Math.random() * curLen)])
      curLen -= 1;
    }

  return shuffledText
  }

  const words = shuffleText(defText)

  return (
    <div className={styles.Wrap}>
      <div className='container'>
        {words.map((word, i) => {
          return (
            <div
              className={styles.word}
              key={i}
            >
              {word}
            </div>
          )
        })}
        <input />
      </div>
    </div>
  )
}

export default TypingTest
