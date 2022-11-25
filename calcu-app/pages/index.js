import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CalculatorButton from "../components/CalculatorButton";
import {useEffect,useState} from "react";



 function Home() {
  
  const [inputValue, setInputValue] = useState('');
  const [clickedValue,setClickedValue] = useState('')


  function buttonClick(e){
    //console.log('clicked')
    setClickedValue(e.target.value)
    console.log(clickedValue)
  }

  useEffect(() => {
    console.log('value changed')
    setInputValue(String(inputValue) + String(clickedValue))    
  }, [clickedValue]);

  return (
    <>
      <Head>
        <title>Calculator app</title>
        <meta name="description" content="its a basic calculator app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='../dist/ouput.css' rel="stylesheet" />
        </Head>

      
      <div className={styles["div"]+'  '+styles["c"]} id="result">{inputValue}</div>

        <CalculatorButton className={'h-50 w-50 bg-red '} value="1" 
        // onClick={buttonClick} 
        setValue = {setClickedValue}
        />
        {/* <CalculatorButton className={'h-50 w-50 bg-red '} value="2" onClick={buttonClick} />
        <CalculatorButton className={'h-50 w-50 bg-red '} value="3" onClick={buttonClick} /> */}
            
      

      
    </>
  )
  }
export default Home