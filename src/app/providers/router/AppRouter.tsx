import { createBrowserRouter, RouterProvider } from "react-router";
import { ROUTES } from "@/shared/config";
import { HomePage } from "@/pages/home";
import { StudyPage } from "@/pages/study";
import { CatalogPage } from "@/pages/catalog";
import { ProgressPage } from "@/pages/progress";
import { NotFoundPage } from "@/pages/not-found";
import { MainLayout } from "../../layouts/main-layout";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.study, element: <StudyPage /> },
      { path: ROUTES.catalog, element: <CatalogPage /> },
      { path: ROUTES.progress, element: <ProgressPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
