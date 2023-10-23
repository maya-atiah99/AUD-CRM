import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowInterest from "./Pages/ShowInterest/ShowInterest";
import RegisterPage from "./Pages/Registration/RegisterPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ShowInterest />} />
        <Route path='/showInterest' element={<ShowInterest />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
