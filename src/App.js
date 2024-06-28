import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input onChange={(e) => setText(e.target.value)} />
      <ul>
        {todos.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
      {/* dispatch(addTask(text)) */}
      <button onClick={() => alert(text)}>Create todo</button>
    </div>
  );
}

export default App;
