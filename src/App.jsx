import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Task from "./components/Task";
import Setting from "./components/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
