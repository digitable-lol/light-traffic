import React from "react"

import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material"

import { StatusSelector } from "../StatusSelector"

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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Название</TableCell>
          <TableCell>Статус</TableCell>
          <TableCell>Описание</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {goals.map((goal, index) => (
          <TableRow key={index}>
            <TableCell>
              <TextField
                fullWidth
                value={goal.title}
                onChange={(e) => onGoalChange(index, "title", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <StatusSelector
                value={goal.status}
                onChange={(value) => onGoalChange(index, "status", value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                multiline
                rows={2}
                value={goal.description}
                onChange={(e) => onGoalChange(index, "description", e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default GoalsTable
