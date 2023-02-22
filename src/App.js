import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import SideMenu from "./components/shared/SideMenu/SideMenu";
import Contact from "./components/pages/Contact/Contact";
import ShowProduct from "./components/pages/Home/ShowProduct/ShowProduct";

function App() {
  return (
    <div className="App">
      <div className="font-sans">
        <div className="grid lg:grid-cols-4">
          <div className="col-span-1">
            <SideMenu />
          </div>
          <div className="col-span-3">
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index path="/:id" element={<ShowProduct />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
