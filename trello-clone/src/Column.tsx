import React, { PropsWithChildren } from "react";
import { map } from "lodash";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
interface ColumnProps {
  text: string;
  index: number;
  id: string;
}
export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const { lists } = state;
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {map(lists[index].tasks, (task, index) => {
        return <Card text={task.text} key={task.id} index={index} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
