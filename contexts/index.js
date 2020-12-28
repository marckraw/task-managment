import TaskContextProvider from "./TaskContext";

const ContextWrapper = ({children}) => (
    <TaskContextProvider>
      {children}
    </TaskContextProvider>
)

export default ContextWrapper;
