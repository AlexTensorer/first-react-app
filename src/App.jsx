import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

function App() {
  return (
    <div>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      {/* <ListPicker values={[1,2,3]}/>
      <ListPicker values={["a","b","c"]}/> */}
      {/* <ListPicker values={{a: 1, b: 2, c: 3}}/> */}
      {/* <Greeter person="Bill" from="Alex" />
      <Greeter person="Ted" />
      <Greeter person="Rosa" from="Edgar" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;
