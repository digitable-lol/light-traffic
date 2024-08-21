import * as React from "react"

import { StyledBreadcrumb } from "./NavButton.styled"

interface NavButtonProps {
  to: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export const NavButton: React.FC<NavButtonProps> = ({ to, children, icon }) => {
  return <StyledBreadcrumb component="a" href={to} label={children} icon={icon} />
}

export default NavButton
