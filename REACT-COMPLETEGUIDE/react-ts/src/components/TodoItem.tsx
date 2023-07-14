
const TodoItem: React.FC<{ todotext: string }> = (props) =>{
    return <li>{props.todotext}</li>;
};

export default TodoItem;