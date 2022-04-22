import { ItemList, ItemDetails} from "pages";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes, Route } from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ItemList />}/>
            <Route path="/item/:id" element={ <ItemDetails />}/>
        </Routes>
    </BrowserRouter>
, document.getElementById("root"));
