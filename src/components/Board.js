
import React from "react";
import Square from "./Square";
import classes from "./Board.module.css";
const Board=({squares,onClick})=>
  ( <div className={classes.Board}>
    {squares.map((square, i) =>(
      <Square key={i} value={square} onClick={()=>onClick(i)}></Square>
      ))} 
   </div>
  )


export default Board;