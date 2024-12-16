import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
    const [todos, setTodos] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

    // Fetch all todos from the server on component mount
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                toast.error("There was an error fetching the todos!", error);
            });
    }, [apiUrl]);

    // Function to add a new todo
    const addTodo = async (text) => {
        try {
            const response = await axios.post(apiUrl, { text });
            setTodos([...todos, response.data]);
            toast.success("Added to do item");
        } catch (error) {
            toast.error("There was an error adding the todo!", error);
        }
    };

    // Function to delete a todo
    const deleteTodo = async (id) => {
        try {
            console.log(id);
            await axios.delete(`${apiUrl}/${id}`);
            setTodos(todos.filter((todo) => todo._id !== id));
            toast.success("Deleted items");
        } catch (error) {
            toast.error("There was an error deleting the todo!", error);
        }
    };

    return (
        <main className='App'>
            <h1>Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <Toaster />
        </main>
    );
};

export default App;
