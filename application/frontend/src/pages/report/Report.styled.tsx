import styled from "styled-components"

import { Grid, Typography } from "@mui/material"
import { IconButton } from "@mui/material"

export const StyledContainer = styled.div`
  padding: 16px;
`

export const Header = styled(Grid)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const Title = styled(Typography)`
  flex-grow: 1;
  text-align: center;
  margin-left: 16px;
`

export const SettingsButton = styled(IconButton)`
  margin-right: 16px;
`

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`
export const StyledTitle = styled.div`
  font-size: 34px;
  font-weight: 600;
  color: rgba(29, 27, 32, 1);
`
