import React from 'react';
import HOC from '../../shared/hoc';

const Todos = ({ data }) => {
  return (
    <div>
      <h2>Todos HOC Component</h2>
      {data &&
        data
          .slice(0, 10)
          .map((todos) => <div key={todos.id}>{todos.title}</div>)}
    </div>
  );
};

const SearchTodos = HOC(Todos, 'todos');
export default SearchTodos;
