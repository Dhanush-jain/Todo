import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>Add</button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => toggleComplete(index)} style={styles.text}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '5px',
  },
  addButton: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '5px',
    cursor: 'pointer',
  },
  text: {
    flex: '1',
    textAlign: 'left',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px',
    cursor: 'pointer',
  },
};

export default TodoApp;
