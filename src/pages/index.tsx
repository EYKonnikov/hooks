import {Container} from "@mui/material";
import TaskList from "../components/TaskList/TaskList";
import Form from "../components/Form/Form";
import React, {useState} from "react";
import taskMock from "../mocks/taskMock";

export interface Mock {
    type: string;
    description: any;
    timeToDo?: number;
    id: number;
    date: number;
}



const MainPage = () => {
    const [tasks, setTasks] = useState<Mock[]>(taskMock)

    

    return(
        <Container sx={{pt:5, textAlign:'left'}}>
            <h2>Add Task</h2>
            <Form setTasks={setTasks}/>
            <h2>Tasks List</h2>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </Container>
    )
}

export default MainPage