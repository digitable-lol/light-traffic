import React from "react"

import CircleIcon from "@mui/icons-material/Circle"
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material"

interface CustomMenuItemProps {
  status: string
  children: React.ReactNode
  value: string
}

const getColor = (status: string) => {
  switch (status) {
    case "Success":
      return "rgba(46, 125, 50, 1)"
    case "Error":
      return "rgba(211, 47, 47, 1)"
    case "Warning":
      return "rgba(239, 108, 0, 1)"
    default:
      return ""
  }
}

export const CustomMenuItem: React.FC<CustomMenuItemProps> = ({
  status,
  children,
  value,
  ...props
}) => (
  <MenuItem value={value} {...props}>
    <ListItemIcon>
      <CircleIcon style={{ color: getColor(status) }} />
    </ListItemIcon>
    <ListItemText primary={children} />
  </MenuItem>
)

export default CustomMenuItem
