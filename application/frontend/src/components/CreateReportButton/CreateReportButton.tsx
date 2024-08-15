import React from "react"

import { Button } from "@mui/material"

interface CreateReportButtonProps {
  onClick?: () => void
}

export const CreateReportButton: React.FC<CreateReportButtonProps> = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Create Report
    </Button>
  )
}

export default CreateReportButton
