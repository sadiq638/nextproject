import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CalculatorButton from "../components/CalculatorButton";
import {useEffect,useState} from "react";

// function Buton(props){
//
//
//   return(
//     <>
//     <button className={styles["button"]+' '+styles["button:active"]}></button>
//     <button className={styles["button"]+' '+styles["button:active"]}></button>
//     <button className={styles["button"]+' '+styles["button:active"]} ></button>
//     <button className={styles["button"]+' '+styles["button:active"]}></button>
//     </>
//   )
// }

 function Home() {
  
  const [value, setValue] = useState(0);

  function buttonClick(e){
    setValue(e.target.value)
  }
  // useEffect(() => {
  //   console.log(value);
  // }, [value]);
  return (
    <>
      <Head>
        <title>Calculator app</title>
        <meta name="description" content="its a basic calculator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<main className={styles.main}>*/}
      <div className={styles["div"]+'  '+styles["c"]} id="result">{value}</div>
        <CalculatorButton className={'h-50 w-50 bg-red '} value="1" onClick={buttonClick} />
            
      {/*<div className={styles.div}>*/}
      {/*      <Buton  />*/}
      {/* </div>  */}
      {/*  */}
      {/*       <div className={styles.div}>*/}
      {/*       <Buton />*/}
      {/*       </div>*/}

      {/*      <div className={styles.div}>*/}
      {/*      <Buton />*/}
      {/*      </div>*/}
      {/*     <div className={styles.div}>*/}
      {/*     <Buton />*/}


      {/*     </div> */}
      {/*</main>*/}

      
    </>
  )
  }
export default Home