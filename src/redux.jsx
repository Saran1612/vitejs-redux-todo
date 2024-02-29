import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  addTodo,
  deleteTodo,
  resetTodo,
  updateTodo,
} from './counterSlice';

function Page() {
  const counter = useSelector((state) => {
    console.log(state, 'satte');
    return state.counter;
  });

  const todos = useSelector((state) => state.todo);

  console.log(todos.length, 'todostodostodos');

  const dispatch = useDispatch();
  const [data, setData] = useState('');
  const [edit, setEdit] = useState(false);
  const [editedData, setEditedData] = useState('');
  const [editIds, setEditIds] = useState([]);

  const handleAddTodo = () => {
    if (data) {
      dispatch(addTodo({ id: Date.now(), text: data }));
      setData('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleRemoveTodo = () => {
    dispatch(resetTodo());
  };

  const handleEditTodo = (id) => {
    setEditIds((prevIds) => [...prevIds, id]); // Add todo ID to editIds
  };

  const handleUpdateTodo = (id) => {
    console.log(id, 'sjsjssj');
    if (editedData) {
      dispatch(updateTodo({ id: id, text: editedData }));
      setEditIds((prevIds) => prevIds.filter((editId) => editId !== id));
      setEdit(false);
      setEditedData('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <br />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul style={{ padding: 0 }}>
        {todos?.map((items, index) => (
          <li
            key={index}
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{items.text}</span>
            <div style={{ display: 'flex' }}>
              {editIds.includes(items.id) && (
                <div>
                  <input
                    type="text"
                    value={editedData}
                    style={{ margin: '0px 10px' }}
                    onChange={(e) => setEditedData(e.target.value)}
                  />
                  <button
                    style={{ margin: '0px 10px' }}
                    onClick={() => handleUpdateTodo(items.id)}
                  >
                    Update
                  </button>
                </div>
              )}
              {!editIds.includes(items.id) && ( // Check if todo is not in edit mode
                <>
                  <button
                    style={{ margin: '0px 10px' }}
                    onClick={() => handleEditTodo(items.id)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTodo(items.id)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={handleRemoveTodo}
        disabled={todos.length > 0 ? false : true}
      >
        Remove Todo
      </button>
    </div>
  );
}

export default Page;
