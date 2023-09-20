// import React from "react";
// import { useState } from "react";

// const TodoList = () => {
//   const [value, setvalue] = useState("");
//   const [data, setdata] = useState([]);

//   function addActivity() {
//     setdata((data) => {
//       const updatedList = [...data, value];
//       console.log(updatedList);
//       setvalue("");
//       return updatedList;
//     });
//   }

//   function removeData(i) {
//     const updatedList = data.filter((elem, id) => {
//       return i !== id;
//     });
//     setdata(updatedList);
//   }

//   function removeAll (){
//     setdata([])
//   }

//   return (
//     <>
//       <div className="todo">
//         <h1>Todo List App</h1>
//         <input
//           type="text"
//           className="todo-input"
//           placeholder="Add the task"
//           value={value}
//           onChange={(e) => setvalue(e.target.value)}
//         />
//         <button type="submit" className="todo-btn" onClick={addActivity}>
//           Add Task
//         </button>
//       </div>

//       <div className="list">
//         <p>Here are your tasks :)</p>
//         {data?.map((element, i) => {
//           return (
//             <p key={i}>
//               <div>{element}</div>
//               <button onClick={() => removeData(i)}>Delete</button>
//               <button onClick={() => editData(i)}>Edit</button>
//             </p>
//           );
//         })}
//       </div>
//       {data.length>=1 && <button onClick={removeAll}>Remove All Task</button>}
//     </>
//   );
// };

// export default TodoList;

// import React, { useState, useEffect } from "react";

// const TodoList = () => {
//   const [value, setValue] = useState("");
//   const [data, setData] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     if (editIndex !== null) {
//       setValue(data[editIndex]);
//     }
//   }, [editIndex]);

//   function addActivity() {
//     setData((data) => {
//       const updatedList = [...data, value];
//       console.log(updatedList);
//       setValue("");
//       return updatedList;
//     });
//   }

//   function removeData(i) {
//     const updatedList = data.filter((elem, id) => {
//       return i !== id;
//     });
//     setData(updatedList);
//   }

//   function editData(i) {
//     setEditIndex(i);
//   }

//   function saveEdit() {
//     setData((data) => {
//       data[editIndex] = value;
//       setEditIndex(null);
//       setValue("");
//       return data;
//     });
//   }

//   function removeAll (){
//     setData([])
//   }
//   return (
//     <>
//       <div className="todo">
//         <h1>Todo List App</h1>
//         <input
//           type="text"
//           className="todo-input"
//           placeholder="Add the task"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button type="submit" className="todo-btn" onClick={addActivity}>
//           Add Task
//         </button>
//       </div>

//       <div className="list">
//         <p>Here are your tasks :)</p>
//         {data?.map((element, i) => {
//           return (
//             <p key={i}>
//               <div>{element}</div>
//               <button onClick={() => removeData(i)}>Delete</button>
//               {editIndex === i && (
//                 <button onClick={saveEdit}>Save</button>
//               )}
//               {editIndex !== i && (
//                 <button onClick={() => editData(i)}>Edit</button>
//               )}
//             </p>
//           );
//         })}
//       </div>
//       {data.length>=1 && <button onClick={removeAll}>Remove All Task</button>}
//     </>
//   );
// };

// export default TodoList;

import React, { useState, useEffect } from "react";

// const getLocalItems =()=>{
//   let data = JSON.parse(localStorage.getItem("todos"));
//   if(data){
//   return data
//   } else {
//     return []
//   }
// }

const TodoList = () => {
  const [value, setValue] = useState("");
  // const [data, setData] = useState(getLocalItems());
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    const daata = JSON.parse(localStorage.getItem("todos"))
  }, []);

  function addActivity() {
    if (value !== "") {
      const updatedList = [...data, value];
      setData(updatedList);
      setValue("");
    }
  }

  function removeData(i) {
    const updatedList = data.filter((elem, id) => {
      return i !== id;
    });
    setData(updatedList);
  }

  function editData(i) {
    setEditIndex(i);
    setValue(data[i]);
  }

  function saveEdit() {
    const editedData = value;
    setData(
      data.map((item, index) => {
        if (index === editIndex) {
          return editedData;
        } else {
          return item;
        }
      })
    );
    setValue("");
    setEditIndex(null);
  }

  function removeAll() {
    setData([]);
  }
  return (
    <>
      <div className="todo">
        <h1>Todo List App</h1>
        <input
          type="text"
          className="todo-input"
          placeholder="Add the task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn" onClick={addActivity}>
          Add Task
        </button>
      </div>

      <div className="list">
        <p>Here are your tasks :)</p>
        {data?.map((element, i) => {
          return (
            <p key={i}>
              <div>{element}</div>
              <button onClick={() => removeData(i)}>Delete</button>
              {editIndex === i ? (
                <button onClick={saveEdit}>Save</button>
              ) : (
                <button onClick={() => editData(i)}>Edit</button>
              )}
            </p>
          );
        })}
      </div>
      {data.length >= 1 && <button onClick={removeAll}>Remove All Task</button>}
    </>
  );
};

export default TodoList;
