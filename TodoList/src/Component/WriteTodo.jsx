import { FaRegWindowClose } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa';
import Axios from "axios";
import { useEffect } from 'react';

function WriteTodo({todo}) {

    useEffect(() => {
        UseConfirm();
    }, [todo]);

    const UseConfirm = async () => {
         
        if(todo.TodoConfirm == true) {
            document.getElementById(todo.id).className = "todo";
        }      
    }

    const GetTask = async () => {
        todo = await Axios.get("http://localhost:3000/todo");
    }

    const HandleConfirm = async () => {
        await Axios.put(`http://localhost:3000/todo/${todo.id}`, {
        "TodoName": todo.TodoName,    
        "TodoConfirm": true
        });
        
        todo = await Axios.get(`http://localhost:3000/todo/${todo.id}`)
        UseConfirm();
    }

    const HandleDelete = () => {
        Axios.delete(`http://localhost:3000/todo/${todo.id}`);

        window.location.reload();
    }

    return ( <div className="WriteTodo">

        <p id={todo.id}>{todo.TodoName}</p>
        
        <button onClick={HandleDelete} className='BtnDelete'><FaRegWindowClose /></button>
        <button onClick={HandleConfirm} className='BtnConfirm'><FaCheckSquare /></button>  

    </div> );
}

export default WriteTodo;