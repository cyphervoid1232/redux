

const Todo = ({text, toggleTodo, completed, id, deleteTodo}) => (
    <div>
        <li onClick={toggleTodo} style={{color: completed ? 'red' : 'black'}}>{id + " "}{text} <button onClick={deleteTodo}>delete</button>  </li>
    </div>
)


export default Todo;