import PropTypes from "prop-types";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Add a new todo'
            />
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default AddTodo;

AddTodo.propTypes = {
    addTodo: PropTypes.func,
};
