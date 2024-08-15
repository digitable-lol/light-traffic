import styled from "styled-components"

import { Grid, IconButton, TextField } from "@mui/material"

export const SearchContainer = styled(Grid)`
  margin-bottom: 32px;
  align-items: center;
`

export const SearchInput = styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    border-bottom: 1px solid #ccc;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
  .MuiInputBase-input {
    padding: 8px;
  }
  .MuiInput-underline:before {
    border-bottom: none;
  }
  .MuiInput-underline:after {
    border-bottom: none;
  }
`

export const ClearButton = styled(IconButton)`
  padding: 8px;
  color: #999;
  &:hover {
    color: #000;
  }
`

export const ViewToggleButton = styled(IconButton)`
  margin-left: 16px;
`
