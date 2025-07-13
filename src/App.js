import "./App.css";
import React, { useState } from "react";
function App() {
  const [inputArray, setInputArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [entryObj, setEntryObj] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <p>TODO APP</p>
        <div>
          <input
            value={inputText}
            type="text"
            onChange={(e) => {
              let obj = {
                name: e.target.value,
              };
              setEntryObj(obj);
              setInputText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setInputArray([...inputArray, entryObj]);
            }}
          >
            Add Todo
          </button>
        </div>

        {inputArray.map((item, index) => (
          <div
            key={index}
            style={{
              display: " flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px", 
              margin: "0 auto",
              backgroundColor: "#666",
              marginTop: "10px",
              padding: "10px"
            }}
          >
            <h4 >{item.name}</h4>
            <div
              // style={{ width: }}
              onClick={() => {
                let empArr = [];
                for (let i = 0; i < inputArray.length; i++) {
                  if (i !== index) {
                    empArr.push(inputArray[i]);
                  }
                }
                setInputArray(empArr);
              }}
            >
              X
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setTasks([...tasks, { id: Date.now(), text: input, isDone: false }]);
//     setInput('');
//   };

//   const handleToggleDone = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, isDone: !task.isDone } : task
//     ));
//   };

//   const handleDeleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   return (
//     <div className="App">
//       <h2>To-Do List</h2>
//       <form onSubmit={handleAddTask}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id} className={task.isDone ? 'done' : ''}>
//             <span onClick={() => handleToggleDone(task.id)}>
//               {task.text}
//             </span>
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;