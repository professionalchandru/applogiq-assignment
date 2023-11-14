import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AppLayout from "./Components/AppLayout";
import Setup from "./Pages/Setup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="setup" element={<Setup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
