import React from "react"
import { Link, useNavigate } from "react-router-dom"

import { ArrowForward } from "@mui/icons-material"
import { Avatar } from "@mui/material"

import { CardContainer, ProjectName } from "./ProjectCard.styled"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    avatar?: string
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate()
  const handleClick = (project) => {
    navigate(`/projects/${project.id}`)
  }
  const avatarShortName = project.name
    .split(" ")
    .filter((word) => word)
    .map((word) => word[0])
    .join("")

  return (
    <CardContainer onClick={() => handleClick(project)}>
      <Avatar src={project.avatar} alt={project.name}>
        {avatarShortName}
      </Avatar>
      <ProjectName>{project.name}</ProjectName>
      <ArrowForward />
    </CardContainer>
  )
}
