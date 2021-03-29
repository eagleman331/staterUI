import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] =  useState("");
    const [todo, setTodo] = useState([]);
    const [chooseTodo, setChooseTodo] = useState([])

    const updateTodo = (todo) => {
        setTodo([...todo, {todo}])
    };

    const clickTodo = (chooseTodo) => {
        setChooseTodo(chooseTodo)
    };
    return (
        <TaskContext.Provider value={{tasks,todo, updateTodo, chooseTodo, clickTodo}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;
