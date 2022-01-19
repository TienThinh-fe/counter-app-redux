import CounterActionTypes from "./counter.types";

export const onIncrement = () => ({
  type: CounterActionTypes.INCREMENT,
});

export const onDecrement = () => ({
  type: CounterActionTypes.DECREMENT,
});
