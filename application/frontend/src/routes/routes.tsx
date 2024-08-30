import { RouteObject, useRoutes } from "react-router-dom"

import { Layout } from "src/components/Layout/Layout"
import { Home } from "src/pages/Home"
import { ProjectPage } from "src/pages/Project"
import { ReportPage } from "src/pages/Report"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "reports", element: <ReportPage /> },
    ],
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]

export const AppRouter = () => {
  const application = useRoutes(routes)
  return <>{application}</>
}
