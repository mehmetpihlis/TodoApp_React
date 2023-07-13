import WriteTodo from "./WriteTodo";

function ListTodo({todos}) {
    return ( <div className="ListTodo">
        {todos.map((todo, index) => {
            return <WriteTodo 
            todo= {todo}
            key= {index}
            />
        })}
    </div> );
}

export default ListTodo;