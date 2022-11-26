
export default function WeatherTextbox(props) {
    return(
    <>
    <p>enter the name of the city to know the weather</p>
     <p><input type="textbox" className={props.className} onChange={props.onChange} value={props.value}/></p>
    </>);

}
