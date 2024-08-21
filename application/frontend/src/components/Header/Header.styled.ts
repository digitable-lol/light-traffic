import styled from "styled-components"

import { Box, IconButton } from "@mui/material"

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.2);
`

export const LeftSection = styled(Box)`
  display: flex;
  align-items: center;
`

export const RightSection = styled(Box)`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  margin-right: 16px;
`

export const NavButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const IconButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const Switches = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
