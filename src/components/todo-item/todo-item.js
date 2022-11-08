import PropTypes from "prop-types";

const TodoItem = ({ label, className, onTaskClick, isDone, onDeleteClick }) => {
  return (
    <li className={className}>
      <span>
        <input
          type="checkbox"
          id={label}
          onChange={onTaskClick}
          checked={isDone}
        />
        <label htmlFor={label}>{label}</label>
      </span>
      <svg
        className="trash"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 20 20"
        onClick={onDeleteClick}
        data-name={label}
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
      </svg>
    </li>
  );
};

TodoItem.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onTaskClick: PropTypes.func,
  isDone: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

export default TodoItem;
