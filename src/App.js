import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResList from "./component/res-list/ResList.jsx";
import ResMenu from "./component/res-menu/ResMenu.jsx";
import Header from "./component/header/Header.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ResList />} />
        <Route path="/menu/:resId" element={<ResMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
