import React,{useState} from 'react';
import {calculateWinner} from "./components/helper";
import Board from "./components/Board";
 const App=()=>{
const [history,setHistory] =useState([Array(9).fill(null)]);
const [step,setStep]=useState(0);
const [Xisnext,setNext] = useState(true);
const winner=calculateWinner(history[step]);
const xo=Xisnext?"X":"O"
const onClickHandler=(i)=>{
const historypoint=history.slice(0,step+1);
const current=historypoint[step];
const squares=[...current];
if(winner||squares[i])return;
squares[i]=xo;
setHistory([...historypoint,squares]);
setStep(historypoint.length);
setNext(!Xisnext);
}
function jumpto(s){
  setStep(s);
  setNext(s%2===0);
}
const renderMoves=()=>
{
  console.log(history);
  return history.map((_step,move)=>{
    const dest=move? `Go to move #${move}` : "Go to start of move";
    return(
      <li key={move}>
        <button onClick={()=>jumpto(move)}>{dest}</button>;
      </li>
    )

  })
}
return(
  <>
  <h1>Tic Tac Toe </h1>
  <Board squares={history[step]} onClick={onClickHandler}/>
  <div className="info-wrapper">
         <div>
           <h3>History</h3>
             
             {/* {console.log(history)}
              {history.map((_step,move)=>{
                const dest=move? `Go to move #${move}` : "Go to start of move";
                return(
                  <li key={move}>
                    <button OnClick={()=>jumpto(move)}>{dest}</button>;
                  </li>
                )})} */renderMoves()}
         </div>   
   <h3>{winner ? "Winner: " + winner : "Next Player: " + xo}</h3>
       </div>
  </>
);

 };
 export default App;








// import React, { useState } from "react";
// import { calculateWinner } from "./components/helper";
// import Board from "./components/Board";

// const App = () => {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [stepNumber, setStepNumber] = useState(0);
//   const [xIsNext, setXisNext] = useState(true);
//   const winner = calculateWinner(history[stepNumber]);
//   const xO = xIsNext ? "X" : "O";

//   const handleClick = (i) => {
//     const historyPoint = history.slice(0, stepNumber + 1);
//     const current = historyPoint[stepNumber];
//     const squares = [...current];
//     // return if won or occupied
//     if (winner || squares[i]) return;
//     // select square
//     squares[i] = xO;
//     setHistory([...historyPoint, squares]);
//     setStepNumber(historyPoint.length);
//     setXisNext(!xIsNext);
//   };

//   const jumpTo = (step) => {
//     setStepNumber(step);
//     setXisNext(step % 2 === 0);
//   };

//   const renderMoves = () =>
//     history.map((_step, move) => {
//       const destination = move ? `Go to move #${move}` : "Go to Start";
//       return (
//         <li key={move}>
//           <button onClick={() => jumpTo(move)}>{destination}</button>
//         </li>
//       );
//     });

//   return (
//     <>
//       <h1>React Tic Tac Toe - With Hooks</h1>
//       <Board squares={history[stepNumber]} onClick={handleClick} />
//       <div className="info-wrapper">
//         <div>
//           <h3>History</h3>
//           {renderMoves()}
//         </div>
//         <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
//       </div>
//     </>
//   );
// };

// export default App;