import { RouteObject, useRoutes } from "react-router-dom"

import { Layout } from "src/components/Layout/Layout"
import { Home } from "src/pages/Home"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]

export const AppRouter = () => {
  const application = useRoutes(routes)

  return <>{application}</>
}
