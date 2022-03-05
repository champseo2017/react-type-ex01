import React from "react";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./AppStateContext";
import { AddNewItem } from "./AddNewItem";
import CustomDragLayer from "./CustomDragLayer";

const App = () => {
  const { state, dispatch } = useAppState();
  const fetchDataTest1 = async () => {
    const { current_user_url } = await fetch("https://api.github.com").then(
      (response) => {
        return response.json() as Promise<{ current_user_url: string }>;
      }
    );
    console.log('gguser', current_user_url);
  };
  // Here I specified the return value of json() function call to be have type { current_- user_url: string }.
  fetchDataTest1()
  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};

export default App;

/* 
const {current_user_url} = await fetch("https://api.github.com")
.then((response) => {
  return response.json<{current_user_url: string}>();
})
console.log(typeof current_user_url)


*/
