import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddUser from "./pages/users/AddUser";
import ManageUser from "./pages/users/ManageUser";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_user" element={<AddUser />} />
          <Route path="/manage_user" element={<ManageUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
