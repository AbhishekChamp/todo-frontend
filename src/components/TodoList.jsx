import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
};
