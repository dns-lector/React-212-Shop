import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Category from "./Category"
import Cart     from "./Cart"
import Home     from "./Home"
import Layout   from "./Layout"
import NotFound from "./NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
Створити сторінку "Політика конфіденційності" (Privacy)
Наповнити її контентом
** Використати рекомендовану структуру контенту
*/