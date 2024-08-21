import Chip from "@mui/material/Chip"
import { emphasize, styled } from "@mui/material/styles"

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = "rgba(0, 0, 0, 0.08)"

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    display: "inline-flex",
    whiteSpace: "nowrap",
    maxWidth: "fit-content",
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  }
}) as typeof Chip
