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
  border-bottom: none;
`

export const StyledTableRow = styled(TableRow)`
  &:first-child ${StyledTableCell} {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }

  &:not(:first-child) ${StyledTableCell} {
    border-bottom: none;
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
`
