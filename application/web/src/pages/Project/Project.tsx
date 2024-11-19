import React from "react"

import { Search, Settings } from "@mui/icons-material"
import { IconButton, Input, InputAdornment, TextField, Typography } from "@mui/material"

import { Breadcrumbs } from "src/components/Breadcrumbs"
import { ProjectCard } from "src/components/ProjectCard"

import { Container, HeaderSection, ProjectList, TitleSection } from "./Project.styled"

const projects = [
  { id: 1, name: "Project Alpha" },
  { id: 2, name: "Project Beta" },
]

export const ProjectPage: React.FC = () => {
  return (
    <Container>
      <Breadcrumbs />
      <HeaderSection>
        <TitleSection>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <Settings />
          </IconButton>
          <Typography variant="h5" fontWeight={500}>
            Список проектов
          </Typography>
        </TitleSection>
      </HeaderSection>

      <TextField
        placeholder="Поиск"
        variant="outlined"
        fullWidth
        sx={{
          borderWidth: "0px",
          borderColor: "transparent",
        }}
        InputProps={{
          sx: {
            background: "#EEEEEE",
            borderWidth: "0px",
            borderRadius: 7,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />

      <ProjectList>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </Container>
  )
}

export default ProjectPage
