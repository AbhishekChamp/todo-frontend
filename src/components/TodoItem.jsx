import PropTypes from "prop-types";

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <li>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        </li>
    );
};

export default TodoItem;

TodoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
};
