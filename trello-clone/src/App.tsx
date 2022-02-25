import React, { useReducer } from "react";
import { map } from "lodash";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";
import { CustomDragLayer } from "./CustomDragLayer";
interface State {
  count: number;
}
interface Action {
  type: string;
}
function App() {
  const { state, dispatch } = useAppState();
  const { lists } = state;
  return (
    <AppContainer>
      <CustomDragLayer />
      {map(lists, (list, i) => {
        return <Column id={list.id} text={list.text} key={list.id} index={i} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
