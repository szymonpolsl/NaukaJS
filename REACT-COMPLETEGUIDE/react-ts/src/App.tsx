import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import NowyKomponent from "./components/NowyKomponent";
import styled, { ThemeProvider } from "styled-components";

interface IThemes {
  background: string;
  color: string;
}

const H1 = styled.h1<{ theme: IThemes }>`
  color: ${(props: { theme: IThemes }) => props.theme.color};
  background-color: ${(props: { theme: IThemes }) => props.theme.background};
`;

const baseTheme = {
  background: "#fff",
  color: "#00e81b",
};
const darkTheme = {
  background: "#222",
  color: "#00b0eb",
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [theme, setTheme] = useState("ciemny");

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo); //concat tworzy nową tablice
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme === "ciemny" ? darkTheme : baseTheme}>
        {" "}
        {/* jeśli theme z use state bedzie równe ciemy to ustawiamy darktheme a jak nie to base theme */}
        <H1>siema</H1>
        <button
          onClick={() =>
            theme === "ciemny" ? setTheme("jasny") : setTheme("ciemny")
          }
        >
          Zmiana motywu
        </button>
        <NowyKomponent onAddTodo={addTodoHandler} className="klasa1" />
        <Todos items={todos} />
      </ThemeProvider>
    </div>
  );
};

export default App;

