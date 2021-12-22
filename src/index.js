import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

import { ThirdwebWeb3Provider} from '@3rdweb/hooks';

//Need to include which chains you want to include. Rinkeby is 4. 
//https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/
const supportedChainsIds = [4];

const connectors = {
  injected: {

  },
};

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
    connectors={connectors}
    supportedChainsIds={supportedChainsIds}
    >
    <div className="landing">
      <App />
    </div>
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
