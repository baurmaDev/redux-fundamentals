import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './actions/actions';
function App() {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    dispatch(addTask(text));
    setText("")
  }
  return (
    <div className="App">
      <input onChange={(e) => setText(e.target.value)} />
      <ul>
        {todos.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
      {/* dispatch(addTask(text)) */}
      <button onClick={handleAddTodo}>Create todo</button>
    </div>
  );
}

export default App;
