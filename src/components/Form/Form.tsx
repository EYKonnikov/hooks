import { Button, styled } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { BaseSyntheticEvent } from "react";
import { Mock } from "../TaskList/TaskList";
import React from "react";



export interface FormState {
    type: string;
    description: any;
    timeToDo?: number;
    id: number;
    date: number;
}

export interface FormProps {
    setTasks: Dispatch<SetStateAction<Mock[]>>
}

const InputStyled = styled('input')({
    display: 'block',
    border: '1px solid black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
});

const Form = ({ setTasks }: FormProps) => {

    const [formState, setFormState] = useState<FormState>({
        type: '',
        description: '',
        timeToDo: 0,
        id: Math.random(),
        date: Date.now()
    })

    const handleInputChange = (event: BaseSyntheticEvent) => {
        const target = event.target
        const name = target.name
        setFormState(prevState => ({ ...prevState, [name]: target.value }));
    }

    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        setTasks(prevState => {
            let arr = []
            arr = [...prevState, formState]
            return arr

        });
    }

    
     

    return (
        <div style={{ borderBottom: '1px solid black', marginBottom: '30px' }}>
            <form action="#" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <label htmlFor="type">
                    Task Type
                    <InputStyled value={formState.type} onChange={handleInputChange} type="text" name='type' id='type' key='type' />
                </label>
                <label htmlFor="description">
                    Description
                    <InputStyled value={formState.description} onChange={handleInputChange} type="text" name='description' />
                </label>
                <label htmlFor="timeToDo">
                    Time to do
                    <InputStyled value={formState.timeToDo} onChange={handleInputChange} type="text" name='timeToDo' />
                </label>

                <Button variant='outlined' type='submit' onClick={handleSubmit}>Add</Button>
            </form>
        </div>

    )

}

export default Form;