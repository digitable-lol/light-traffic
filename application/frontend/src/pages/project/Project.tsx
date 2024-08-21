import React from "react"

import { Settings } from "@mui/icons-material"
import HomeIcon from "@mui/icons-material/Home"
import { Typography } from "@mui/material"

import { CreateProjectButton } from "src/components/CreateProjectButton"
import { NavButton } from "src/components/NavButton"
import { ProjectCard } from "src/components/ProjectCard"

import { SettingsButton } from "./Project.styled"
import {
  Container,
  CreateProjectContainer,
  HeaderSection,
  ProjectList,
  TitleSection,
} from "./Project.styled"

const projects = [
  { id: 1, name: "Project Alpha", avatar: "https://via.placeholder.com/40" },
  { id: 2, name: "Project Beta", avatar: "https://via.placeholder.com/40" },
]

export const ProjectPage: React.FC = () => {
  return (
    <Container>
      <NavButton to="/" icon={<HomeIcon fontSize="small" />}>
        Home
      </NavButton>
      <HeaderSection>
        <TitleSection>
          <SettingsButton>
            <Settings />
          </SettingsButton>
          <Typography variant="h5">Список проектов</Typography>
        </TitleSection>

        <CreateProjectContainer>
          <CreateProjectButton onClick={() => console.log("Create Project")} />
        </CreateProjectContainer>
      </HeaderSection>

      <ProjectList>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </Container>
  )
}

export default ProjectPage
