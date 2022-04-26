const Typography = (props) => {

    const italic = props.isItalic ? 'italic warning' : ''
    const bold = props.isFontWeightBold ? 'bold' : ''
    const classes = `${italic} ${bold}`
    return (
        <p className={classes}>
            {props.text}
        </p>
    );
}
export default Typography;