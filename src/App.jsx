import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./firstPage/firstPage";
import User from "./User/user";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/:user" element={<User />} />
      </Routes>
    </section>
  );
}

export default App;
