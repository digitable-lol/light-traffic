import React from "react"

import { StyledButton } from "./NavButton.styled"
import { LinkProps } from "react-router-dom"

export const NavButton: React.FC<LinkProps> = ({ to, children, ...props }) => {
  return <StyledButton to={to} {...props}>{children}</StyledButton>
}

export default NavButton
