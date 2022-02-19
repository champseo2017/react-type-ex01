import React, { PropsWithChildren, useRef } from "react";
import { map } from "lodash";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
import { useItemDrag } from "./useItemDrag";
interface ColumnProps {
  text: string;
  index: number;
  id: string;
}
export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
  drag(ref);
  const { lists } = state;
  return (
    <ColumnContainer ref={ref}>
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
