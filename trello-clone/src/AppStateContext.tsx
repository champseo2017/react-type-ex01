import React, {
  createContext,
  PropsWithChildren,
  useReducer,
  useContext,
} from "react";

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
}
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);
export const useAppState = () => {
  return useContext(AppStateContext);
};
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
      return { ...state };
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
  return <Provider value={{ state: appData }}>{children}</Provider>;
};
