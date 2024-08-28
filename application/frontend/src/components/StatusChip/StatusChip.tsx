import React from "react"
import { useTranslation } from "react-i18next"

import { StatusChip } from "./StatusChip.styled"

interface StatusChipComponentProps {
  status: "Error" | "Success" | "Warning"
}

export const StatusChipComponent: React.FC<StatusChipComponentProps> = ({ status }) => {
  const { t } = useTranslation()

  return <StatusChip status={status} label={t(`status.${status}`)} />
}

export default StatusChipComponent
