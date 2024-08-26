import { Box, Breadcrumbs } from "@mui/material"
import { styled } from "@mui/system"

export const Container = styled(Box)`
  padding: 16px;
  padding-left: 48px;
  padding-right: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const NavButtonContainer = styled(Box)`
  margin-top: 39px;
`

export const HeaderSection = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 49px;
`

export const TitleSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`

export const StyledTitle = styled("h1")`
  font-size: 34px;
  font-weight: 600;
  color: rgba(29, 27, 32, 1);
  margin-left: 8px;
`

export const SearchBarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
  width: 100%;
`

export const ReportListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 31px;
`

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  margin-bottom: 16px;
  font-size: 14px;
  color: #555;
`
