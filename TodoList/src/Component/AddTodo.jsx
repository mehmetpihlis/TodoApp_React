import { useState } from "react";

function AddTodo({AddTask}) {

    const [input, setInput] = useState("");

    const ChangeInput = (event) => {
        setInput(event.target.value);
    }

    const HandleTodo = (event) => {
        event.preventDefault();
        AddTask(input);
        setInput("");
    }

  return (
    <div className="AddTodo">
      <div className="AddTodo-Group">
        <h1>Pıhlıs's Todo List</h1>
        <form>
          <input onChange={ChangeInput} value={input} id="AddTodo-Inp"/>
          <button onClick={HandleTodo} id="AddTodo-Btn">ADD</button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
