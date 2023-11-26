import "./style.css";
function TodoContainer({
  items,
  handleEditClick,
  handleDeleteClick,
  handleCompleteClick,
}) {
  return items.map((item) => (
    <li
      className="item"
      key={item.id}
      title="Double click to mark completed"
      onDoubleClick={() => handleCompleteClick(item.id)}
    >
      <span className={item.isDone ? "completed" : ""}>{item.todo} </span>
      <div>
        <button className="edit-Btn" onClick={() => handleEditClick(item)}>
          Edit
        </button>
        <button
          className="delete-Btn"
          onClick={() => handleDeleteClick(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  ));
}

export default TodoContainer;
