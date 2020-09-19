// fetch data from api
import config from "./config";
import axios from "axios";
import React from "react";
import ReactDomServer from "react-dom/server";

import App from "./src/components/App";

// cannot use relative path because this is not front-end
// should read from config
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`).then((resp) => {
    return ReactDomServer.renderToString(
      <App initialData={resp.data} />
    );
  });
export default serverRender;
