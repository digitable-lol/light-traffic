import styled from "styled-components"

import { Button } from "@mui/material"

export const Container = styled.div`
  padding: 16px;
  padding-left: 48px;
  padding-right: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`

export const SettingsButton = styled(Button)`
  background-color: #007dff;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  min-width: 0;
  padding: 0;

  &:hover {
    background-color: #005bb5;
  }

  svg {
    font-size: 24px;
  }
`

export const CreateProjectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
