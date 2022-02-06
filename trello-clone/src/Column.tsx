import React, { PropsWithChildren } from "react";
import { map } from "lodash";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
interface ColumnProps {
  text: string;
  index: number;
}
export const Column = ({ text, index }: ColumnProps) => {
  const { state } = useAppState();
  const { lists } = state;
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {map(lists[index].tasks, (task, index) => {
        return <Card text={task.text} key={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
