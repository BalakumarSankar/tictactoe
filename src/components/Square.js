import React from 'react';
import classes from './Square.module.css';
function Square({value,onClick})
{
 return(<button className={classes.button} onClick={onClick}>{value}</button>) ;
};
export default Square;
// import React from "react";

// const Square = ({ value, onClick }) => {
//   const style = value ? `squares ${value}` : `squares`;

//   return (
//     <button className={style} onClick={onClick}>
//       {value}
//     </button>
//   );
// };

// export default Square;