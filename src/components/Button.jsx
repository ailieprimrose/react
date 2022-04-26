const Button = (props) => {

    return (
        <button className={`btn ${ props.btn }`} onClick={props.onClick}>
            button
            {props.children}
        </button>
    );
}
export default Button;