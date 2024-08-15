import styled from "styled-components"

import { Link } from "react-router-dom"

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.08);
  gap: 4px;
  border-radius: 50px;
  padding: 4px 12px 4px 8px;
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.primary};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
    color: ${(props) => props.theme.palette.text.secondary};
  }
`
