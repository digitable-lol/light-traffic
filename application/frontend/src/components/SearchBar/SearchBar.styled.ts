import styled from "styled-components"

import { Grid, IconButton, TextField } from "@mui/material"

export const SearchContainer = styled(Grid)`
  margin-bottom: 32px;
  align-items: center;
  width: 100%;
`

export const StandardSearchInput = styled(TextField)`
  width: 100%;
  .MuiInputBase-root {
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    gap: 4px;
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

export const OutlinedSearchInput = styled(TextField)`
  width: 100%;
  background-color: rgba(238, 238, 238, 1);
  border-radius: 28px;
  .MuiOutlinedInput-root {
    padding: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    & fieldset {
      border-color: transparent;
    }
    &:hover fieldset {
      border-color: transparent;
    }
    &.Mui-focused fieldset {
      border-color: transparent;
    }
  }
`

export const InputAdornmentIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
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
