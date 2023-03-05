import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
import Register from "./components/register/Register";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                {/* <Route element={<PrivateComponent/>}>
      
          </Route>  */}
          {/* <Route path="/login" element={<Login/>}></Route> */}
          <Route path="/register" element={<Register/>}></Route>   

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;