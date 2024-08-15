import React from "react"

import { ArrowForwardIos } from "@mui/icons-material"

import { ArrowIcon, Avatar, CardContainer, ProjectName } from "./ProjectCard.styled"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    avatar: string
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <CardContainer>
      <Avatar src={project.avatar} alt={project.name} />
      <ProjectName>{project.name}</ProjectName>
      <ArrowIcon>
        <ArrowForwardIos />
      </ArrowIcon>
    </CardContainer>
  )
}
