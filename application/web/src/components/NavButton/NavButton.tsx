import React from "react"

import { StyledButton } from "./NavButton.styled"

interface NavButtonProps {
  to: string
  children: React.ReactNode
}

export const NavButton: React.FC<NavButtonProps> = ({ to, children }) => {
  return <StyledButton to={to}>{children}</StyledButton>
}

export default NavButton
