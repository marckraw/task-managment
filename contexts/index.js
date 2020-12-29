import TaskContextProvider from "./TaskContext";
import AuthContextProvider from "./AuthContext";

const ContextWrapper = ({children}) => (
    <AuthContextProvider>
        <TaskContextProvider>
            {children}
        </TaskContextProvider>
    </AuthContextProvider>
)

export default ContextWrapper;
