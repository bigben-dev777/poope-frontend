import { RouterProvider } from "react-router-dom";

import { AppContextProvider } from "./contexts/AppContext";
import { routes } from "./routes";
import AppTheme from "./theme/AppTheme";

import "./App.css";

function App() {
  return (
    <AppTheme>
      <AppContextProvider>
        <RouterProvider router={routes} />
      </AppContextProvider>
    </AppTheme>
  );
}

export default App;
