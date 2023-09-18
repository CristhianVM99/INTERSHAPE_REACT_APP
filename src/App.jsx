import { RouterProvider } from "react-router-dom";
import "./App.css";
//import ScrollToTop from './components/Common/ScrollToTop';
import Loader from "./components/Elements/Loader";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
      <Loader />
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
