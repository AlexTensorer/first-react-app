export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
  
    return (
      <div>
        <h2>Double Dice</h2>
        {num1 === num2 && <h3>You win !</h3>}
        <p>Num 1 : {num1}</p>
        <p>Num 2 : {num2}</p>
      </div>
    );

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
  
//     return (
//       <div>
//         <h2>Double Dice</h2>
//         {num1 === num2 ? <h3>You win !</h3> : null}
//         <p>Num 1 : {num1}</p>
//         <p>Num 2 : {num2}</p>
//       </div>
//     );

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
  
//     return (
//       <div>
//         <h2>{num1 === num2 ? "You win !" : "You lose !"}</h2>
//         <p>Num 1 : {num1}</p>
//         <p>Num 2 : {num2}</p>
//       </div>
//     );

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   const result = num1 === num2 ? "You win !" : "You lose !";

//   return (
//     <div>
//       <h2>{result}</h2>
//       <p>Num 1 : {num1}</p>
//       <p>Num 2 : {num2}</p>
//     </div>
//   );

  // if (num1 === num2) {
  // return (
  //     <div>
  //         <h2>You win !</h2>
  //         <p>Num 1 : {num1}</p>
  //         <p>Num 2 : {num2}</p>
  //     </div>
  // );
  // }
  // return (
  //     <div>
  //         <h2>You lose !</h2>
  //         <p>Num 1 : {num1}</p>
  //         <p>Num 2 : {num2}</p>
  //     </div>
  // )
}
