import styled from "styled-components"

import { Button } from "@mui/material"

export const StyledButton = styled(Button)`
  padding: 6px 22px;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.2);
  }
`
