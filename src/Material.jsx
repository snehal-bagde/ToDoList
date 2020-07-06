import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCon from "./ListCon";

const Material = () => {
  const [item, setItem] = useState("");

  const [newItem, setNewItem] = useState([]);

  const showItem = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setNewItem((oldItems) => {
      return [...oldItems, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> TODO LIST</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={showItem}
            value={item}
          />
          <Button onClick={addItem}>
            <AddIcon className="newBtn" />
          </Button>
          <ol>
            {newItem.map((val, index) => {
              return <ListCon text={val} key={index} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Material;
