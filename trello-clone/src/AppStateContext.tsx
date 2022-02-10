import React, {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
  Dispatch,
} from "react";
import { nanoid } from "nanoid";
type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    };
interface AppStateContextProps {
  state: AppState;
  dispatch: Dispatch<any>;
}
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  text: string;
  tasks: Task[];
}
export interface AppState {
  lists: List[];
}
const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};
const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      // Reducer logic here
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      // Reducer logic here
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const { Provider } = AppStateContext;
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
