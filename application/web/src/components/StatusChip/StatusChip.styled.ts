import styled from "styled-components"

import { Chip } from "@mui/material"

interface StatusChipProps {
  status: "Error" | "Success" | "In Progress"
}

export const StatusChip = styled(Chip)<StatusChipProps>`
  background-color: transparent !important;
  border: 2px solid
    ${({ status }) =>
      status === "Success"
        ? "#4caf50"
        : status === "Error"
          ? "#f44336"
          : status === "In Progress"
            ? "#ff9800"
            : ""} !important;
  color: ${({ status }) =>
    status === "Success"
      ? "#4caf50"
      : status === "Error"
        ? "#f44336"
        : status === "In Progress"
          ? "#ff9800"
          : ""} !important;
  text-transform: uppercase;
  font-weight: bold;
  .MuiChip-label {
    color: inherit;
    padding: 0 8px;
  }
  &:before {
    content: "";
    border: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
`
