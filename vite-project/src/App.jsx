import { ToastContainer } from "react-toastify";
import "./App.css";
import useRouteElements from "./routes/useRouteElements";
import ScrollToTop from "./utils/ScrollToTop";
import "@ant-design/v5-patch-for-react-19";
function App() {
  const element = useRouteElements();

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      {element}
    </>
  );
}

export default App;
