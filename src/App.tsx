import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/sections/common/Navbar";
import Footer from "./components/sections/common/Footer";
import ArchePage from "./pages/ArchePage";
import IndustriesPage from "./pages/IndustriesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <>
          <Navbar />
          <Footer />
        </>
      }
    >
      <Route path="/" element={<LandingPage />} />
      <Route path="/arche" element={<ArchePage />} />
      <Route path="/industries" element={<IndustriesPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
