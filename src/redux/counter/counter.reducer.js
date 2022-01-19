import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  number: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };

    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
