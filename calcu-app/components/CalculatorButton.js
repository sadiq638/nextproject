// Write a button

export default function CalculatorButton(props) {
    return (
        <button
        className={props.className}
        onClick={()=>props.setValue(props.value + Math.random())}
        value={props.value}
        >
        {props.value}
        </button>
    );
}