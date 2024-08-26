import React from "react"

import { TableBody, TableHead, TableRow } from "@mui/material"

import { StatusSelector } from "../StatusSelector"
import {
  CustomTextField,
  StyledTable,
  StyledTableCell,
  StyledTableRow,
  TableContainer,
} from "./GoalsTable.styled"

interface Goal {
  title: string
  status: string
  description: string
}

interface GoalsTableProps {
  goals: Goal[]
  onGoalChange: (index: number, field: keyof Goal, value: string) => void
}

export const GoalsTable: React.FC<GoalsTableProps> = ({ goals, onGoalChange }) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>Название</StyledTableCell>
            <StyledTableCell>Статус</StyledTableCell>
            <StyledTableCell>Описание</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goals.map((goal, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                <CustomTextField
                  fullWidth
                  value={goal.title}
                  onChange={(e) => onGoalChange(index, "title", e.target.value)}
                  variant="outlined"
                />
              </StyledTableCell>
              <StyledTableCell>
                <StatusSelector
                  value={goal.status}
                  onChange={(value) => onGoalChange(index, "status", value)}
                />
              </StyledTableCell>
              <StyledTableCell>
                <CustomTextField
                  fullWidth
                  multiline
                  rows={2}
                  value={goal.description}
                  onChange={(e) => onGoalChange(index, "description", e.target.value)}
                  variant="outlined"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

export default GoalsTable
