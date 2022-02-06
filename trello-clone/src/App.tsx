import React, { useReducer } from "react";
import { map } from "lodash";
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
  const { lists } = state;
  return (
    <AppContainer>
      {map(lists, (list, i) => {
        return <Column text={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;
