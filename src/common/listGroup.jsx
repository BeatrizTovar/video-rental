import React, { Fragment } from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <Fragment>
      <ul className="list-group">
        {items.map(item => (
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default ListGroup;
