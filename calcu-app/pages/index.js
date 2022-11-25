import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CalculatorButton from "../components/CalculatorButton";
import {useEffect,useState} from "react";



 function Home() {
  
  const [inputValue, setInputValue] = useState('');
  const [clickedValue,setClickedValue] = useState('');


  function buttonClick(e){

    setClickedValue(e.target.value)
  
  }

  useEffect(() => {
    console.log('value changed')
    setInputValue(String(inputValue) + String(clickedValue))    
  }, [clickedValue]);

 function clearClick(){
  setInputValue(String(inputValue).slice(0,String(inputValue).length -1))
 }
 function clearallClick(){
  setInputValue('')
}
function equalClick(){
  setInputValue(eval(String(inputValue)))
}
  return (
    <>
      <Head>
        <title>Calculator app</title>
        <meta name="description" content="its a basic calculator app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='../dist/ouput.css' rel="stylesheet" />
        </Head>

      
      <div className={styles["div"]+'  '+styles["c"]} id="result">{inputValue}</div>
      <div className={styles.div}>
        <CalculatorButton className={styles.button} value="1" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="2" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="3" onClick={buttonClick} /> 
       <CalculatorButton className={styles.button} value="+" onClick={buttonClick} /> 
       </div>
       <div className={styles.div}>
        <CalculatorButton className={styles.button} value="4" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="5" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="6" onClick={buttonClick} /> 
       <CalculatorButton className={styles.button} value="-" onClick={buttonClick} /> 
       </div>
       <div className={styles.div}>
        <CalculatorButton className={styles.button} value="7" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="8" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="9" onClick={buttonClick} /> 
       <CalculatorButton className={styles.button} value="*" onClick={buttonClick} /> 
       </div>
       <div className={styles.div}>
       <CalculatorButton className={styles.button} value="c" onClick={clearClick} /> 
       <CalculatorButton className={styles.button} value="a" onClick={clearallClick} /> 
       <CalculatorButton className={styles.button} value="/" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="=" onClick={equalClick} />
       </div>

      
    </>
  )
  }
export default Home