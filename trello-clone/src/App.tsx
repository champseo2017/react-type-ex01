import React, { useReducer } from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { AppContainer } from "./styles";
interface State {
  count: number;
}
interface Action {
  type: string;
}
// Counter Example
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
function App() {
  // useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <AppContainer>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {/* <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Being to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} /> */}
    </AppContainer>
  );
}

export default App;
