import {createContext, useState} from "react";

export const TaskContext = createContext({
    actions: {
        addTask: Function()
    },
    data: null,
    setData: Function(),
});

const TaskContextProvider = (props) => {
    const [data, setData] = useState(null)

    const addTask = () => {
        console.log("adding task mate....")
    }

    return (
        <TaskContext.Provider value={{
            data,
            setData,
            actions: {
                addTask
            }
        }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider
