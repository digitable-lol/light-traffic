import React from "react"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { MenuItem, MenuProps, Select } from "@mui/material"

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

  const MenuProps: Partial<MenuProps> = {
    PaperProps: {
      sx: {
        borderRadius: "50px",
        padding: "0px 0px 8px 0px",
        boxShadow: "0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
      },
    },
  }

  return (
    <StyledFormControl>
      <Select
        value={value || "None"}
        onChange={(e) => onChange(e.target.value as string)}
        displayEmpty
        variant="outlined"
        inputProps={{ "aria-label": "Status Selector" }}
        IconComponent={ExpandMoreIcon}
        MenuProps={MenuProps}
        sx={{
          "& .MuiSelect-select": {
            padding: "8px",
            border: "none",
            height: "auto",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
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
