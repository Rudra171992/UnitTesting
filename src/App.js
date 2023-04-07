import FormData from "./Components/FormData";

import { useState } from "react";
import ShowDetails from "./Components/ShowDetails";



function App() {
  const[users,setUsers]=useState([])
  
  const userAdd =(user) =>{
    setUsers([...users,user])
  }
  return (
    <div>
      <FormData userAdd={userAdd} />
      <hr />
      <ShowDetails users={users} />
    </div>
  );
}

export default App;
