import styled from "styled-components"

import { Avatar, TableCell, TableContainer, TableRow, Typography } from "@mui/material"

export const ProjectName = styled(Typography).attrs({
  variant: "body1",
  color: "primary",
})`
  font-weight: bold;
`

export const AuthorAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`

export const StyledTableCell = styled(TableCell)`
  display: flex;
  align-items: center;
  padding: 16px;
`

export const StyledTableRow = styled(TableRow)`
  &:not(:first-of-type) ${StyledTableCell} {
    border-top: 1px solid rgba(224, 224, 224, 1);
  }

  &:last-child ${StyledTableCell} {
    border-bottom: none;
  }
`

export const TableHeaderRow = styled(TableRow)`
  ${StyledTableCell} {
    border-bottom: 2px solid rgba(224, 224, 224, 1);
  }
`

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`

export const DateText = styled(Typography).attrs({
  variant: "body2",
  color: "textSecondary",
})`
  font-size: 0.875rem;
`

export const CustomTableContainer = styled(TableContainer)`
  box-shadow: none;
  border: none;
`
