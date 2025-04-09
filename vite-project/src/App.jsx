import { ToastContainer } from "react-toastify";
import "./App.css";
import useRouteElements from "./routes/useRouteElements";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  const element = useRouteElements();

  return (
    <>
      
      <ScrollToTop />
      {element}

    </>
  );
}

export default App;
