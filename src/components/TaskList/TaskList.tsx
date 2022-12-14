import taskMock from "../../mocks/taskMock";
import { IconButton, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { BaseSyntheticEvent, Dispatch, SetStateAction, useState, useEffect } from "react";


export interface Mock {
    type: string;
    description: any;
    timeToDo?: number;
    id: number;
    date: number;
}
export interface TaskProps {
    task: Mock

}

export interface FormState {
    type: string;
    description: any;
    timeToDo?: number;
    id: number;
    date: number;
}

export interface TaskListProps {
    tasks: Mock[];
    setTasks: Dispatch<SetStateAction<Mock[]>>;
}



const ListWithAllTasks = ({ tasks, setTasks }: TaskListProps) => {

    const [formState, setFormState] = useState<FormState>({
        type: '',
        description: '',
        timeToDo: 0,
        id: Math.random(),
        date: Date.now()
    })



    const removeItem = (e: number) => {

        console.log('Event', e)

        setTasks(prevState => {
            let arr = []
            arr = [...prevState, formState]

            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i].id === e) {
                    arr.splice(i, 1);
                }
            }
            console.log(arr)
            return arr

        });
    }


    const handleSort = () => {

        setTasks(prevState => {
            let arr = []
            arr = [...prevState, formState].sort((a, b) => b.date - a.date)
            console.log('sorted', arr)
            return arr


        });
    }

    const TaskItem = ({ task, ...other }: TaskProps, { setTasks }: TaskListProps) => {

        const ItemWrapperStyled = styled('div')({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'lightgrey',
            marginBottom: 10,
            borderRadius: 15,
            boxShadow: '10px, 10px, 10px grey',
            padding: '5px 25px',
            textAlign: 'left'
        });
        return (
            <>
                <ItemWrapperStyled>
                    <p style={{ width: '20%', fontSize: 20 }}>{task.type}</p>
                    <p style={{ width: '50%' }}>{task.description}</p>
                    <p style={{ width: '20%' }}>{task.timeToDo}</p>
                    <div style={{ width: '10%' }}>
                        <IconButton
                            aria-label="close"
                            sx={{
                                color: (theme) => theme.palette.grey[500],
                            }}
                            onClick={() => removeItem(task.id)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </ItemWrapperStyled>
            </>
        )
    };

    return (
        <div>
            <HeaderWrapperStyled>
                <div>
                    <h5>Sort</h5>
                    <select onChange={() => handleSort()} name="" id="" disabled>
                        <option value="0"></option>
                        <option value="1">Sort by date</option>
                    </select>
                </div>
                <p style={{ width: '20%' }}>Type</p>
                <p style={{ width: '50%' }}>description</p>
                <p style={{ width: '20%' }}>Time to do</p>
                <div style={{ width: '10%' }}></div>
            </HeaderWrapperStyled>
            {

                !!tasks.length && tasks.sort((a, b) => b.date - a.date).map((task, index) => {

                    return (
                        <TaskItem key={index} task={task} />
                    )


                })}
        </div>
    )
}

const HeaderWrapperStyled = styled('div')({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'flex-start',
    padding: '5px 25px',
});

export default ListWithAllTasks;