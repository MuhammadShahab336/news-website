import {Suspense} from "react";
import './assets/styles/main.scss';
import AppRoutes from "./routes";
import {Toaster} from "react-hot-toast";
import {MainLoader} from "./components/loaders";

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
