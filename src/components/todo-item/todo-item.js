import { ReactComponent as TrashIcon } from "../../assets/svg/trash.svg";

const TodoItem = ({ label, clazz, makeDone, isDone, onDelete }) => {
  return (
    <li className={clazz}>
      <span>
        <input
          type="checkbox"
          id={label}
          onChange={makeDone}
          checked={isDone}
        />
        <label htmlFor={label}>{label}</label>
      </span>
      <TrashIcon data-name={label} onClick={onDelete} className="trash" />
    </li>
  );
};

export default TodoItem;
