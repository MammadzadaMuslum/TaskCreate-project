import React, { useState } from "react";
import "./Style/Task.css";

function Task({ onChange, show, handleEdit,onUpdate }) {
  const [tittle, setTittle] = useState(show ? show.tittle:'');
  const [text, setText] = useState(show ? show.text : '');
  const handleChange = (e) => {
    setTittle(e.target.value);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(handleEdit){
      onUpdate(show.id,tittle,text)
    }else{
      onChange(tittle, text);
    }
  
    setTittle("");
    setText("");
  };
 
  return (
    <div>
      {handleEdit ? (
        <div className="box">
          <h1>Task duzelis ediniz!</h1>
          <form onSubmit={handleSubmit}>
            <label>Basliq Deyisin</label>
            <input value={tittle} onChange={handleChange} />
            <label>Elavelerde Duzelis edin!</label>
            <textarea onChange={handleText} value={text}></textarea>
            <button>Duzelis edin</button>
          </form>
        </div>
      ) : (
        <div className="box">
          <h1>Task elave et</h1>
          <form onSubmit={handleSubmit}>
            <label>Basliq</label>
            <input value={tittle} onChange={handleChange} />
            <label>Elaveler</label>
            <textarea onChange={handleText} value={text}></textarea>
            <button>Elave et</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Task;
