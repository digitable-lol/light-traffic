import React from "react"
import { useTranslation } from "react-i18next"

import { Button } from "@mui/material"

interface CreateReportButtonProps {
  onClick?: () => void
}

export const CreateReportButton: React.FC<CreateReportButtonProps> = ({ onClick }) => {
  const { t } = useTranslation()

  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {t("createReport")}
    </Button>
  )
}

export default CreateReportButton
