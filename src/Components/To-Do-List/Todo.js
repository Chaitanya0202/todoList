import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./todo.css";
const Todo = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTassk, setmainTassk] = useState([]);
  const subhand = (e) => {
    e.preventDefault();
    setmainTassk([...mainTassk, { title, desc }]);
    settitle("");
    setdesc("");
    // console.log(mainTassk); 
  };
  const delhand = (i) => {
    let copytask = [...mainTassk];
    copytask.splice(i, 1);
    setmainTassk(copytask);
  };
  let renderTask = <h2>No Task Available</h2>;
  renderTask = mainTassk.map((t, i) => {
    return (
      <li key={i}>
        <div className="task">
          <h5>{t.title}</h5>
          <h4>{t.desc}</h4>
          <button className="btn btn-danger" onClick={() => {delhand(i)}} >Delete</button>
        </div>
      </li>
    );
  });

  return (
    <>
      <h2>Chetan's To-Do List</h2>
      <form onSubmit={subhand}>
        <input
          type="text"
          placeholder=" Enter Title Here"
          className="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder=" Enter Descreption Here"
          className="desc"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <br></br>
        <button type="submit" className="button">
          Add Task
        </button>
      </form>
      <hr></hr>
      <div>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};
export default Todo;
