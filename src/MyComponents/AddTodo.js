import React, { useState } from 'react';
const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState(' ');
  const [desc, setDesc] = useState(' ');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Ttle or Description cant blank');
    } else {
      addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };
  return (
    <div className="container">
      <h3>Hello!! Guys Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
