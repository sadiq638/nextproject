import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculator app</title>
        <meta name="description" content="its a basic calculator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles["div"]+'  '+styles["c"]} id="result">0</div>
            
            <div className={styles.div}>
            <button className={styles["button"]+' '+styles["button:active"]} id="1">1</button>
            <button className={styles["button"]+' '+styles["button:active"]} id="2">2</button>
            <button className={styles["button"]+' '+styles["button:active"]} id="3">3</button>
            <button className={styles["button"]+' '+styles["button:active"]} id="min">-</button>
            </div>
        
             <div className={styles.div}>
            <button className={styles["button"]+' '+styles["button:active"]}  id="4">4</button>
            <button className={styles["button"]+' '+styles["button:active"]} id="5">5</button>
            <button  className={styles["button"]+' '+styles["button:active"]} id="6">6</button>
            <button className={styles["button"]+' '+styles["button:active"]}  id="plus">+</button>
             </div>

            <div className={styles.div}>
            <button className={styles["button"]+' '+styles["button:active"]} id="7">7</button>
            <button className={styles["button"]+' '+styles["button:active"]}  id="8">8</button>
            <button className={styles["button"]+' '+styles["button:active"]} id="9">9</button>
            <button  className={styles["button"]+' '+styles["button:active"]} id="divide"> /</button>
            </div>
           <div className={styles.div}>
            <button className={styles["button"]+' '+styles["button:active"]} id="c">c</button>
            <button className={styles["button"]+' '+styles["button:active"]} id="ca">ca</button>
            <button className={styles["button"]+' '+styles["button:active"]}  id="mul">*</button>
            <button  className={styles["button"]+' ' +styles["equal"]} >=</button>
           </div> 
      </main>

      
    </div>
  )
  }
