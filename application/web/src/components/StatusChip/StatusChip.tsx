import React from "react"

import { StatusChip } from "./StatusChip.styled"

interface StatusChipComponentProps {
  status: "Error" | "Success" | "In Progress"
}

export const StatusChipComponent: React.FC<StatusChipComponentProps> = ({ status }) => {
  return <StatusChip status={status} label={status} />
}

export default StatusChipComponent
