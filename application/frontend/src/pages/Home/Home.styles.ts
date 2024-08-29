import { Box, Card, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const RootContainer = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100%",
})

export const ImageContainer = styled(Box)({
  width: "50%",
  backgroundImage: `url(src/assets/loginpage.svg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
})

export const ContentContainer = styled(Box)({
  width: "50%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
})

export const SearchContainer = styled(Box)({
  marginBottom: "20px",
})

export const ProfileCard = styled(Card)({
  marginBottom: "20px",
})

export const HeaderSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  marginTop: "49px",
})

export const TitleSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flex: 1,
})

export const StyledTitle = styled(Typography)({
  fontSize: "34px",
  fontWeight: 600,
})
