import React,{useState} from "react";

const Header = () => {
    const[task,setTask]=useState("");
    const[todo,setTodo]=useState([]);
 
    const setHandler = e  => {
       setTask(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();
        const newTodo = [...todo,task];
        setTodo(newTodo);
        setTask('');
    }

    const deleteHandler = (indexvalue) => {
        const newTodos = todo.filter ((todo,index) => index !== indexvalue)
        setTodo(newTodos);
    }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">To do Management application</h5>
            <form onSubmit={submitHandler}>
                <input className="form-controll "  type="text" name="task" value={task} onChange={setHandler} /> &nbsp; &nbsp;
                <input type="submit" name="Add"  value="Add" />
             </form>
             <div>
                {
                    todo.map((item,index) => 
                     <div key={index}>
                        <h5>{item} &nbsp; <button className="btn btn-danger" onClick={()=>deleteHandler(index)}>Delete</button> &nbsp;<button>Update</button></h5>
                    </div> 
                )
                }
             </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Header;
