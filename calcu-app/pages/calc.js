import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CalculatorButton from "../components/CalculatorButton";
import {useEffect,useState} from "react";



 function Calc() {
  const values =['1','2','3','+']
  const value2 =['4','5','6','-']
  const value3 =['7','8','9','*']
  
  
  const [inputValue, setInputValue] = useState('');
  const [clickedValue,setClickedValue] = useState('');
  const [clrValue, setColorValue] = useState(false);


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
  setColorValue(true)

  
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

      
      <section className={clrValue ? styles.section : styles.sectionn}>{inputValue}</section>
      <div className={styles.div}>
        {values.map((values) => <CalculatorButton className={styles.button} value={values} onClick={buttonClick} />)}
       
       </div>
       <div className={styles.div}>
       {value2.map((value2) => <CalculatorButton className={styles.button} value={value2} onClick={buttonClick} />)}
       </div>
       <div className={styles.div}>
       {value3.map((value3) => <CalculatorButton className={styles.button} value={value3} onClick={buttonClick} />)}
       </div>
       <div className={styles.div}>
       <CalculatorButton className={styles.button} value='c' onClick={clearClick} /> 
       <CalculatorButton className={styles.button} value="a" onClick={clearallClick} /> 
       <CalculatorButton className={styles.button} value="/" onClick={buttonClick} />
       <CalculatorButton className={styles.button} value="=" onClick={equalClick} />
       </div>
      <div><p style={{color: "red"}}> <Link href='/'>back</Link></p></div>
      
    </>
  )
  }
export default Calc