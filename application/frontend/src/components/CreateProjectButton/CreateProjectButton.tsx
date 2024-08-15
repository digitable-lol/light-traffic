import React from "react"

import { StyledButton } from "./CreateProjectButton.styled"

interface CreateProjectButtonProps {
  onClick: () => void
}

export const CreateProjectButton: React.FC<CreateProjectButtonProps> = ({ onClick }) => {
  return (
    <StyledButton variant="contained" color="primary" onClick={onClick}>
      Create Project
    </StyledButton>
  )
}

export default CreateProjectButton
