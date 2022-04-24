import GlobalStyle from "GlobalStyles.style";
import { ItemList, ItemDetails, PageNotFound } from "pages";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </>,

  document.getElementById("root")
);
