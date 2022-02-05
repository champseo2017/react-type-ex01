import React, { useReducer } from "react";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";
interface State {
  count: number;
}
interface Action {
  type: string;
}
function App() {
  const { state } = useAppState();
  console.log("state", state);
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Being to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
