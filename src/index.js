import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from "axios";
import Data from "./testData";
// console.log(Data);
axios
  .get("/api/contests")
  .then((resp) => {
    ReactDOM.render(
      <App initialContests={resp.data.contests} />,
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
