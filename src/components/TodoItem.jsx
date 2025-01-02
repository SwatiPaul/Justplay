import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoItem = () => {
  const [todo, setTodo] = useState("");
  const [edit,setEdit] = useState(null);
  const [editVal,setEditVal] = useState('')
  const dispatch = useDispatch();

  const todolist = useSelector((state) => state.todo.todos);
  console.log(todolist);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch({ type: "Add_Todo", payload: todo });
      setTodo("");
    }
  };
  const deleteTodo = (item) => {
    dispatch({ type: "Remove_Todo", payload: item });
  };
  const editTodo = (id,editVal)=>{
    dispatch({type:'Edit_Todo', payload: {id,updatedVal:editVal}});
    setEdit(null);
  }
  return (
    <>
      <div className="todo_content">
        <ul>
          {todolist?.map((item, index) => {
            return (
              <li key={index}>
                {edit === index ?
                <>
                <div className="form-group">
                    <label htmlFor="">Edit Todo</label>
                    <input type="text" name="edit" id="edit"  value={editVal} className="form-control" onChange={(e)=>setEditVal(e.target.value)}/>
                </div>
                <button className="btn btn-warning"  onClick={()=>editTodo(item.index,editVal)}>Save</button>
                <button className="btn btn-danger"  onClick={()=>setEdit(null)}>Cancel</button>

                </>
                :
                <>
                 <span></span> {item}
                <p>
                <button className='btn btn-success' onClick={()=>{setEdit(index); setEditVal(item)}}>Edit</button>
                <button className='btn btn-danger' onClick={()=>deleteTodo(item)}>Delete</button>
                </p>
                
                </>

          }
                
              </li>
            );
          })}
        </ul>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Add Todo</label>
              <input
                type="text"
                name="todo"
                id="todo"
                value={todo}
                className="form-control"
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
            <button className="btn btn-success" type="submit">
              Add Todo
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
