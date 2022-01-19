import { connect } from "react-redux";

import { onIncrement, onDecrement } from "./redux/counter/counter.actions";

import ButtonCounter from "./components/ButtonCounter/button-counter.component";
import NumberCounter from "./components/NumberCounter/number-counter.component";

function App(props) {
  const { number, increment, decrement } = props;

  console.log(number);

  return (
    <div className="App">
      <NumberCounter number={number} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonCounter func={"subtract"} handleOnClick={decrement} />
        <ButtonCounter func={"plus"} handleOnClick={increment} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(onIncrement()),
  decrement: () => dispatch(onDecrement()),
});

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
