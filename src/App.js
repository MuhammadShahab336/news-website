import {Suspense} from "react";
import './assets/styles/main.scss';
import AppRoutes from "./routes";
import MainLoader from "./components/loaders/MainLoader";
import {Toaster} from "react-hot-toast";

function App() {
  return (
      <>
          <Toaster
              position="top-center"
              reverseOrder={false}
          />
          <Suspense fallback={<MainLoader />}>
              <AppRoutes />
          </Suspense>
      </>
  );
}

export default App;
