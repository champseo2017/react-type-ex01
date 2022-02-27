import React, { PropsWithChildren, useRef } from "react";
import { isHidden } from "./utils/isHidden";
import { useDrop } from "react-dnd";
import { map } from "lodash";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
import { useItemDrag } from "./useItemDrag";
import { DragItem } from "./DragItem";
interface ColumnProps {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
}
export const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
  drag(drop(ref));
  const { lists } = state;
  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
      isPreview={isPreview}
    >
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
