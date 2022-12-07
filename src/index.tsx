import GlobalStyle from "GlobalStyles.style";
import { ItemList, ItemDetails, PageNotFound } from "pages";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Layout } from "components";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </Provider>,

  document.getElementById("root")
);
