import {Suspense} from "react";
import './assets/styles/main.scss';
import AppRoutes from "./routes";
import MainLoader from "./components/loaders/MainLoader";

function App() {
  return (
      <>
          <Suspense fallback={<MainLoader />}>
              <AppRoutes />
          </Suspense>
      </>
  );
}

export default App;
