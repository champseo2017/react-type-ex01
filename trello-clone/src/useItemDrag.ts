import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";

export const useItemDrag = (item: DragItem) => {
  console.log("item", item);
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 1 : 1,
    }),
    begin: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: item }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  });
  return { drag };
};
