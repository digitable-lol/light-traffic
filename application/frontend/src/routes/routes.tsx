import { Layout } from "~components/Layout/Layout"
import { Home } from "~pages/Home"
import { ProjectPage } from "~pages/project"
import { ReportPage } from "~pages/report"

import React from "react"
import { RouteObject, useRoutes } from "react-router-dom"

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
