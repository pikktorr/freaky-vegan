import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component.jsx";

import "./App.css";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Homepage />
//     </div>
//   );
// }

export default App;
