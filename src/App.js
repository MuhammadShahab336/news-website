import {Suspense} from "react";
import './assets/styles/main.scss';
import AppRoutes from "./routes";

function App() {
  return (
      <>
          <Suspense fallback={<>Loading...</>}>
              <AppRoutes />
          </Suspense>
      </>
  );
}

export default App;
