import React, { useState } from "react"

import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"

import settings from "src/assets/settings.svg"
import { CreateProjectButton } from "src/components/CreateProjectButton"
import { NavButton } from "src/components/NavButton"
import { ProjectCard } from "src/components/ProjectCard"
import { SearchBar } from "src/components/SearchBar"

import {
  Container,
  HeaderSection,
  NavButtonContainer,
  ProjectList,
  SearchBarContainer,
  StyledTitle,
  TitleSection,
} from "./Project.styled"

const projects = [
  { id: 1, name: "Project Alpha", avatar: "https://via.placeholder.com/40" },
  { id: 2, name: "Project Beta", avatar: "https://via.placeholder.com/40" },
]

export const ProjectPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Container>
      <NavButtonContainer>
        <NavButton to="/projects" icon={<HomeIcon fontSize="small" />}>
          Список проектов
        </NavButton>
      </NavButtonContainer>
      <HeaderSection>
        <TitleSection>
          <img src={settings} alt="Settings" style={{ width: 40, height: 40 }} />
          <StyledTitle>Список проектов</StyledTitle>
        </TitleSection>
        {/* <CreateProjectContainer>
          <CreateProjectButton onClick={() => console.log("Create Project")} />
        </CreateProjectContainer> */}
      </HeaderSection>
      <SearchBarContainer>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
          variant="outlined"
          startIcon={<SearchIcon />}
          placeholder="Search"
        />
      </SearchBarContainer>
      <ProjectList>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </Container>
  )
}

export default ProjectPage
