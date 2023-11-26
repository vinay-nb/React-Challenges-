import React, { useEffect, useState } from "react";
import "./style.css";
import TodoContainer from "./TodoContainer";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const [editInfo, setEditInfo] = useState(null);
  const initialRender = React.useRef(true);

  useEffect(() => {
    const data = localStorage.getItem("items");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (todo) => {
    setItems((prevItems) => [
      ...prevItems,
      { todo, id: new Date().getTime(), isDone: false },
    ]);
  };

  const updateItem = (newValue) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editInfo.id ? { ...item, todo: newValue } : item
      )
    );
  };

  const handleCompleteClick = (id) => {
    console.log("compelete");
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleEditClick = ({ id, todo }) => {
    console.log(id, todo);
    setTodo(todo);
    setEditInfo({ id, todo });
  };

  const handleDeleteClick = (id) => {
    if (editInfo?.id === id) {
      setTodo("");
      setEditInfo(null);
    }
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editInfo) {
      updateItem(todo);
    } else {
      addItem(todo);
    }
    setTodo("");
  };

  const handleCancel = () => {
    setTodo("");
    setEditInfo(null);
  };

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-todo"
          type="text"
          value={todo}
          placeholder="enter your todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="todobtn-container">
          <button type="submit" disabled={!todo}>
            {" "}
            Submit
          </button>
          <button
            type="reset"
            onClick={handleCancel}
            disabled={!(todo || editInfo)}
          >
            {" "}
            Cancel
          </button>
        </div>
        <div>
          <i className="status-holder">
            Double click on todo to toggle completion status
          </i>
        </div>
        <TodoContainer
          items={items}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          handleCompleteClick={handleCompleteClick}
        />
      </form>
    </div>
  );
}

export default TodoList;
