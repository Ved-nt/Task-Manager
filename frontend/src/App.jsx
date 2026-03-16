import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"         element={<Home />}    />
            <Route path="/tasks"    element={<Tasks />}   />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;