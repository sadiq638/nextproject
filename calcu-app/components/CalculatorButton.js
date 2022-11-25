// Write a button

export default function CalculatorButton(props) {
    return (
        <button

        className={props.className}
        onClick={props.onClick}
        value={props.value}
        >
        {props.value}
        </button>
    );
}