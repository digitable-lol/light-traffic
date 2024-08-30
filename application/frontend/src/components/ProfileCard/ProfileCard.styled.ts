import { Card } from "@mui/material"
import { styled } from "@mui/material/styles"

export const ProfileCardContainer = styled(Card)({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  cursor: "pointer",
  transition: "0.3s",
  flexDirection: "row",
  width: "100%",
  "&:hover": {
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
})

export const Avatar = styled("div")<{ color: string }>(({ color }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginRight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color,
  fontSize: "20px",
  color: "#fff",
}))

export const ProfileName = styled("div")({
  flexGrow: 1,
  fontSize: "18px",
  fontWeight: "bold",
})

export const ArrowIcon = styled("div")({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
})
