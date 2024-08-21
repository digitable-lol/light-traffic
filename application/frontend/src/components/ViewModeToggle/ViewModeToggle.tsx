import React from "react"

import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import { IconButton } from "@mui/material"

interface ViewModeToggleProps {
  viewMode: "list" | "grid"
  onToggleViewMode: () => void
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ viewMode, onToggleViewMode }) => {
  return (
    <div>
      <IconButton onClick={onToggleViewMode}>
        {viewMode === "list" ? <ViewModuleIcon /> : <ViewListIcon />}
      </IconButton>
    </div>
  )
}

export default ViewModeToggle
