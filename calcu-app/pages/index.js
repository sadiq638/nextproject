import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Buton(props){
  
  
  return(
    <>
    <button className={styles["button"]+' '+styles["button:active"]}></button>
    <button className={styles["button"]+' '+styles["button:active"]}></button>
    <button className={styles["button"]+' '+styles["button:active"]} ></button>
    <button className={styles["button"]+' '+styles["button:active"]}></button>
    </>
  )
}

 function Home() {
  
  
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
            <Buton  />
       </div>  
        
             <div className={styles.div}>
             <Buton />
             </div>

            <div className={styles.div}>
            <Buton />
            </div>
           <div className={styles.div}>
           <Buton />


           </div> 
      </main>

      
    </div>
  )
  }
export default Home