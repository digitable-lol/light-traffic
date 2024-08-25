import styled from "styled-components"

import { Chip } from "@mui/material"

interface StatusChipProps {
  status: "Error" | "Success" | "Warning"
}

export const StatusChip = styled(Chip)<StatusChipProps>`
  background-color: ${({ status }) =>
    status === "Success"
      ? "rgba(46, 125, 50, 0.04)"
      : status === "Error"
        ? "rgba(211, 47, 47, 0.04)"
        : status === "Warning"
          ? "rgba(239, 108, 0, 0.04)"
          : "transparent"} !important;
  border: 1px solid
    ${({ status }) =>
      status === "Success"
        ? "rgba(46, 125, 50, 1)"
        : status === "Error"
          ? "rgba(211, 47, 47, 1)"
          : status === "Warning"
            ? "rgba(239, 108, 0, 1)"
            : ""} !important;
  color: ${({ status }) =>
    status === "Success"
      ? "rgba(46, 125, 50, 1)"
      : status === "Error"
        ? "rgba(211, 47, 47, 1)"
        : status === "Warning"
          ? "rgba(239, 108, 0, 1)"
          : ""} !important;
  text-transform: uppercase;
  font-weight: bold;

  .MuiChip-label {
    color: inherit;
    padding: 0 8px;
  }

  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 100px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: inherit;
    border-radius: inherit;
    pointer-events: none;
  }
`
