import React from "react"

import { MenuItem, Select } from "@mui/material"

import { StatusCircle, StyledFormControl } from "./StatusSelector.styled"

interface StatusSelectorProps {
  value: string
  onChange: (value: string) => void
}

export const StatusSelector: React.FC<StatusSelectorProps> = ({ value, onChange }) => {
  const statusOptions = [
    { value: "Error", color: "red" },
    { value: "Warning", color: "orange" },
    { value: "Success", color: "green" },
    { value: "None", color: "gray" },
  ]

  return (
    <StyledFormControl>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        displayEmpty
        variant="outlined"
        inputProps={{ "aria-label": "Status Selector" }}
      >
        {statusOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <StatusCircle sx={{ backgroundColor: option.color }} />
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  )
}

export default StatusSelector
