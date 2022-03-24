import axios from "axios";
import { Suspense } from "solid-js";
import Snackbars from "./components/root/Snackbars";
import HydrogenLoader from "./components/shared/HydrogenLoader";
import useNetworkStatus from "./hooks/useNetworkStatus";
import AppRouter from "./router";

axios.defaults.baseURL = import.meta.env.VITE_ENDPOINT;
axios.defaults.withCredentials = true;

function App() {
  useNetworkStatus();
  return (
    <Suspense fallback={<HydrogenLoader />}>
      <AppRouter />
      <Snackbars />
    </Suspense>
  );
}

export default App;
