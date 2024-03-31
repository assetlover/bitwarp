import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Dashboard from "./components/dashboard";
import Createproject from "./components/createproject";
import AllProjects from "./components/allProjects";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/createproject" element={<Createproject />}></Route>
          <Route path="/allprojects" element={<AllProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
