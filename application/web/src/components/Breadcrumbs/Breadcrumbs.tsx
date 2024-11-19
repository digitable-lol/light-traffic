import React from "react"
import { matchPath, useLocation, useParams } from "react-router-dom"

import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material"

import { RouteObject, routes } from "src/routes/routes"

import { NavButton } from "../NavButton"

export const Breadcrumbs = () => {
  const location = useLocation()
  const params = useParams()

  const pathnames = location.pathname.split("/").filter(Boolean)

  const findRoute = (routes: RouteObject[], currentPath: string): RouteObject | undefined => {
    for (const route of routes) {
      const routePath = route.path

      if (routePath && routePath.includes(":")) {
        const paramMatch = matchPath({ path: routePath, end: true }, currentPath)
        if (paramMatch) {
          return route
        }
      }

      if (routePath && matchPath({ path: routePath, end: true }, currentPath)) {
        return route
      }

      if (route.children) {
        const childRoute = findRoute(route.children, currentPath)
        if (childRoute) {
          return childRoute
        }
      }
    }
    return undefined
  }

  const getBreadcrumbText = (breadcrumb: string) => {
    return Object.keys(params).reduce(
      (text, key) => text.replace(`:${key}`, params[key] || ""),
      breadcrumb,
    )
  }

  const rootRoute = routes.find((route) => route.path === "/")

  return (
    <MUIBreadcrumbs>
      {rootRoute && rootRoute.breadcrumb && <NavButton to={"/"}>{rootRoute.breadcrumb}</NavButton>}
      {pathnames.map((_, index) => {
        const fullPath = `/${pathnames.slice(0, index + 1).join("/")}`
        const route = findRoute(routes, fullPath)

        if (!route || !route.breadcrumb) return null

        const breadcrumbText = getBreadcrumbText(route.breadcrumb)

        const customBreadcrumbText = route.getCustomBreadcrumbText
          ? route.getCustomBreadcrumbText(location, route.breadcrumb)
          : null

        return (
          <NavButton to={fullPath} state={location.state}>
            {customBreadcrumbText ?? breadcrumbText}
          </NavButton>
        )
      })}
    </MUIBreadcrumbs>
  )
}
