import { Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./firstPage/firstPage";
import User from "./User/user";

function App() {
  return (
    <section>
      <FirstPage />
      <Routes>
        <Route path="/" elemen={<FirstPage />} />
        <Route path="/:user" elemen={<User />} />
      </Routes>
    </section>
  );
}

export default App;
