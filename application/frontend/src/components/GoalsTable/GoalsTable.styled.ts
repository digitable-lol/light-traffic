import styled from "styled-components"

import { Table, TableCell, TableRow, TextField } from "@mui/material"

export const TableContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(217, 217, 217, 1);
`

export const StyledTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 0;
`

export const StyledTableCell = styled(TableCell)`
  padding: 8px;
  border: none;
`

export const StyledTableRow = styled(TableRow)`
  &:not(:last-child) ${StyledTableCell} {
    border-bottom: 1px solid rgba(217, 217, 217, 1);
  }
`

export const CustomTextField = styled(TextField)`
  .MuiInputBase-root {
    border: none;
  }

  .MuiInputLabel-root {
    border: none;
  }

  .MuiOutlinedInput-root {
    border: none;
    fieldset {
      border: none;
    }
  }
`
