import './App.css';
import Typography from "./components/Typography";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Typography
        isItalic={true}
        isFontWeightBold={true}
        text="learn more about error boundaries"
        >
      </Typography>
        <Button
            onClick={() => document.getElementById("container-text").classList.toggle("hidden")}
            displayInfo="clicked"
            btn="btn-primary"
        >
        </Button>
        <ListItem
            id="my-super-list"
            onClick={() => document.getElementById("container-text").classList.toggle("hidden")}
            isActive={true}
            text="Little list element"
        >
        </ListItem>
        <div id="container-text" className="hidden">Toggle</div>
    </div>
  );
}

export default App;
