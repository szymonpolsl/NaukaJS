import React from "react";

import Todo from '../models/todo';
import TodoItem from "./TodoItem";

                                    //props:{items:string[]} -> props będzie obiektem z items który będzie przechowywał tablicę

const Todos: React.FC<{ items:Todo[] }> = (props) => {    //React.FC - functional component, definicja typu
    return (                //Funkcja FC - oznacza że pierwszy argument bedzie obiektem który ma właśność potomną
        <ul>
            {props.items.map((item) => (
                <TodoItem key={item.id} todotext={item.text}/>
            ))}
        </ul>
    );
}

// console.log("string", Todos.displayName, Todos.defaultProps) // dzięki React.FC możemy się odwołać do displayName

export default Todos;

// const Funkcja = (props: {items:string[]}) =>{  // to samo co z React.FC

// }
