//////////////////////////version 1

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <div>
//       <h1>Test</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={Dashboard} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

////////version dos
////TEST
// App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <div>
//       <h1>Test</h1>
//       <Router>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

////////version tres
// App.jsx
// App.jsx
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Router>
//         <Routes>
//           {/* Ruta de inicio */}
//           <Route path="/" element={<Home />} />

//           {/* Ruta para Dashboard */}
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de inicio por defecto */}
        <Route path="/" element={<Home />} />

        {/* Ruta para Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



