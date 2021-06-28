// **импорты
import React from "react";
import "./Cell.css";

// **функционал
function Cell(props) {
  return (
    <div
      className="Cell"
      style={{
        gridArea: props.cell.area,
        backgroundColor: props.cell.back,
        fontSize: props.cell.size,
        color: props.cell.color,
      }}
    >
      {props.cell.number}
    </div>
  );
}

// **экспорт
export default Cell;
