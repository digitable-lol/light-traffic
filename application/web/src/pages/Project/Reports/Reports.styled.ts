import styled from "styled-components"

import { Button } from "@mui/material"

export const Container = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-left: auto;
`

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
