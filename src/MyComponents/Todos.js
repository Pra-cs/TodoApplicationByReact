import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  if (!props.todos) return <p className=" my-3">Loading todos...</p>; // ✅ Prevents `undefined` errors

  let myStyle = {
    minHeight: '70vh',
    margin: '10px auto',
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            </>
          );
        })
      )}
    </div>
  );
};
