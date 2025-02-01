// import { useState } from "react"

function App() {
  // const [price, setPrice]=useState(0);
  // const incrise=()=>{
  //   setPrice(price+1);
  // }
  // const decrise=()=>{
  //   setPrice(price-1);
  // }
  const user={
    firstName:'Rafi',
    lastName: {
      name:'ashrafi',
      address:{
        location:'dhaka uddan',
      },
    },
  }
  const {firstName,lastName:{name},lastName:{address:{location}}}=user;
  return (
    <>
    <h1>Hello i am {firstName} . this is my last name {name} here is my location {location}</h1>
    {/* <h2>Count {price}</h2>
    <button onClick={incrise}>incrise</button>
    <button onClick={decrise}>decrise</button> */}
    </>
  )
}
export default App;