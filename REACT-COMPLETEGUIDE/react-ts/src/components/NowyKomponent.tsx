import { useRef, useState } from 'react';
import styled from 'styled-components';
import { DefaultButton, ExtendedButton, Form } from './NowyKomponent.styles';


const UpdatedButton = styled(ExtendedButton)`
    padding: 4px 10px;
    background-color: violet;
    border: none;    
`

const NowyKomponent: React.FC<{ onAddTodo: (text: string) => void, className: string }> = (props) => {
    const [value, setValue] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(value);
        const enteredText = value;

        if (enteredText.trim().length === 0) {
            //throw an error
            console.warn("Input nie może być pusty")
            return;
        }

        props.onAddTodo(enteredText);
    };

    return (
        <div className={props.className}>
            <Form onSubmit={submitHandler}>
                <label htmlFor='text'>Todo text</label>
                <h1>podzroo</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <input type='text' id='text' value={value} onChange={(event) => setValue(event.target.value)} />
                <DefaultButton>Add Todo</DefaultButton>
                <UpdatedButton kolor='red'>Add Todo2</UpdatedButton>
            </Form>
        </div>
    );
};


export default NowyKomponent;