import React from "react"
import { useNavigate } from "react-router-dom"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import { ArrowIcon, Avatar, CardContainer, ProjectName } from "./ProjectCard.styled"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    avatar: string
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, name, avatar } = project
  const navigate = useNavigate()

  const handleCardClick = () => {
    const userId = 1
    navigate(`/${userId}/projects/${id}/reports`)
  }

  return (
    <CardContainer onClick={handleCardClick}>
      <Avatar src={avatar} alt={name} />
      <ProjectName>{name}</ProjectName>
      <ArrowIcon>
        <ArrowForwardIcon />
      </ArrowIcon>
    </CardContainer>
  )
}

export default ProjectCard
