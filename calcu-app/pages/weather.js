import Link from 'next/link'
import WeatherTextbox from "../components/WeatherTextbox";
import {useEffect,useState} from "react";
import styles from '../styles/Home.module.css'

export default function Weather(){
    const[inputValue, setinputValue]=useState('');  
const [cityValue, setCityValue]=useState('');
const [temp, setTemp]=useState('');
const [humidity, setHumidity]=useState('');
const [locerr, setLocerr]=useState('');
const [interr, setInterr]=useState('');
function typeClick(e){
    setCityValue(e.target.value)

   
}
function fetchWeather(){
    console.log(cityValue)
    const v= String(cityValue)
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=7ee8a1bbf4f9a5fab0e18f261ea1633f&units=metric`
     fetch(url)
    .then((res) => {if(res.ok){
        return res.json();}})
    .then((data) => {
        setTemp('temprature'+ ' '+ data['main']['temp']);
        setHumidity('humidity'+ ' '+data['main']['humidity']);}
    )
    .catch(err =>{ 
        var z=String(err);
        if(z.includes('Failed')){
            setInterr("no internet");
        }else{
            setLocerr("no location");
        }
    })

}
                

return(
<div>
    <WeatherTextbox className={styles.equal} onChange={typeClick} value={cityValue}/>
    <button className={styles.submit} onClick={fetchWeather}>submit</button>
    <p style={{color: "green"}}> {temp}</p>
    <p style={{color: "green"}}> {humidity}</p>
    <p style={{color: "orange"}}>{locerr}</p>
    <p style={{color: "orange"}}>{interr}</p>
    
    <p style={{color: "red"}}> <Link href='/'>back</Link></p>
    
</div>);
}
