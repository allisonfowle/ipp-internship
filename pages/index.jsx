import { useState } from 'react'
import styles from './index.module.scss' 
import Image from "next/image";
// counter code from https://www.youtube.com/watch?v=7nHAkKXRLkQ


const Counter = () => {
  const [count, setCount] = useState(0) //initialize count var to 0
  return (
    <div className={styles.counter}>
      <div className={styles.count}>{count}</div>
      <div className={styles.button} onClick={() => setCount(count + 1)}>+</div>
      <div className={styles.button} onClick={() => setCount(count - 1)}>-</div>
      <div className={`${styles.button} ${styles.resetButton}`} onClick={() => setCount(0)}>Reset</div>
    </div>
  )
}

export default function Home() {
  const [counters, setCounters] = useState([])
  const resetAllCounters = () => {
    const newCounters = []
    counters.forEach(() => newCounters.push(<Counter key={Math.random()}/>))
    setCounters(newCounters)
  }
  return (
   //start div
    <div>

    <title>Allison's Test Page with NextJS</title>
    <h1>Hi, I'm Allison</h1>
    <p>I am a third year at the University of Virginia studying Computer Science and Data Science.
      I am currently in an internship position as a Software Developer at UVA Development Hub. 
      This page is a tester to play around with NextJS and prepare us for an upcoming project.
      I had fun making the counter below.
      Fun fact: I am currently reading "Ends of War" by Caroline Janney, a history professor at UVA
    </p>
    <h2><img src="../public/img/me.jpg"/></h2>
   


    
    <div className={styles.container}> {/*start styles container div*/}
    {/* usingcounter components from Counter() above */}
    <div className={styles.button} onClick={() => setCounters([...counters, <Counter />])}>Add New Counter</div>
    <div className={styles.button} onClick={resetAllCounters}>Reset All</div>
    <div className={styles.counterContainer}>{counters}</div>
    </div> {/*end styles container div*/}


     {/* end div */}
    </div>
  )
}
