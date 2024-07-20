// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResList from "./component/res-list/ResList.jsx";
import ResMenu from "./component/res-menu/ResMenu.jsx";
import Header from "./component/header/Header.jsx";
import Cart from "./component/cart/Cart.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ResList />} />
          <Route path="/menu/:resId" element={<ResMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
