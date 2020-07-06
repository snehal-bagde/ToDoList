import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const ListCon = (props) => {
  const [line, setLine] = useState(false);

  const deleteLine = () => {
    setLine(true);
  };

  return (
    <div className="todo_style">
      <span onClick={deleteLine}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ListCon;
