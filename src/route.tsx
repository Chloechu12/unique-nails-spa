import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/root-layout";
import HomePage from "./pages/home";
import ServicePage from "./pages/services";
import GalleryPage from "./pages/gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicePage /> },
      { path: "gallery", element: <GalleryPage /> },
    ],
  },
]);