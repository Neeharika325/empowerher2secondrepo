import { Routes,Route } from "react-routing-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/AboutUs";
import AboutUs from "./pages/Todos";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";

function App(){
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route path="/todos" element={<Todos />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;

