import { BrowserRouter, Routes,Route  } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddUser from "./pages/user/AddUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
