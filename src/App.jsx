import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    <div>

      <Slots val1="A" val2="A" val3="A" />
      <Slots val1="A" val2="A" val3="L" />


      {/* <Heading color="magenta" text="Welcome !" fontSize="20px" />
      <Heading color="teal" text="Boo !" fontSize="46px" />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors = {["red", "pink", "purple", "teal"]} />
      <ColorList colors = {["olive", "orangered", "slategrey"]} /> */}

      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <Greeter person="Bill" from="Alex" />
      <Greeter person="Ted" />
      <Greeter person="Rosa" from="Edgar" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;
