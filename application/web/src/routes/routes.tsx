import { useTranslation } from "react-i18next"
import { Location, RouteObject as ReactRouteObject, useRoutes } from "react-router-dom"

import { Layout } from "src/components/Layout/Layout"
import { NavbarTypes } from "src/components/Navbar"
import { Home } from "src/pages/Home"
import { ProjectPage } from "src/pages/Project"
import { ReportsPage as ProjectReportsPage } from "src/pages/Project/Reports"
import { ReportPage } from "src/pages/Report"

export type RouteObject = ReactRouteObject & {
  breadcrumb?: string
  getCustomBreadcrumbText?: (location: Location, breadcrumbText: string) => string
  children?: Array<RouteObject>
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/projects",
        breadcrumb: "Список проектов",
        children: [
          { index: true, element: <ProjectPage /> },
          {
            path: "/projects/:id",
            breadcrumb: 'Проект ":id"',
            element: <ProjectReportsPage />,
            getCustomBreadcrumbText: (location, breadcrumb) => {
              const { state } = location

              return breadcrumb.replace(":id", state?.name)
            },
          },
        ],
      },
      { path: "reports", breadcrumb: "Репорты", element: <ReportPage /> },
    ],
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]

export const useNavigationRoutes = (): Array<NavbarTypes.Tab> => {
  const { t } = useTranslation()

  return [
    {
      label: t("home"),
      to: "/",
    },
    {
      label: t("projects"),
      to: "/projects",
    },
    {
      label: t("reports"),
      to: "/reports",
    },
  ]
}

export const AppRouter = () => {
  const application = useRoutes(routes)
  return <>{application}</>
}
