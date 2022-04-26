import Typography from "./Typography";
import Button from "./Button";
const ListItem = (props) => {
    const textToDisplay = props.text;
    const canBeRegularFont = props.isActive;

    return (
        <div>
            <Typography
                isItalic={true}
                isFontWeightBold={canBeRegularFont ? false : true}
                text={textToDisplay}
            >
            </Typography>
            <Button
                >
                clicked from ListItem
            </Button>
        </div>
    );
}
export default ListItem;