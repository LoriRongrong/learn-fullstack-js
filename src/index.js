import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from "axios";
// console.log(Data);
axios
  .get("/api/contests")
  .then((resp) => {
    ReactDOM.render(
      <App initialData={resp.data} />,
      document.getElementById("root")
    );
  })
  .catch(console.error);

// setTimeout(()=>{
//     ReactDOM.render(
//         <h2>what are you looking at???</h2>,
//         document.getElementById('root')
//     );
// },4000);
