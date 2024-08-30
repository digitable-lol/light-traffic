import React from "react"
import { useNavigate } from "react-router-dom"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Box } from "@mui/material"

import { ArrowIcon, Avatar, ProfileCardContainer, ProfileName } from "./ProfileCard.styled"

const getAvatarColor = (index: number) => {
  const colors = [
    "rgba(0, 145, 255, 1)",
    "rgba(0, 100, 200, 1)",
    "rgba(255, 140, 0, 1)",
    "rgba(200, 150, 255, 1)",
    "rgba(0, 200, 125, 1)",
    "rgba(200, 200, 200, 1)",
    "rgba(255, 255, 180, 1)",
    "rgba(255, 180, 180, 1)",
  ]
  return colors[index % colors.length]
}

interface ProfileCardProps {
  profile: {
    id: number
    name: string
    avatar?: string
  }
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { id, name, avatar } = profile
  const avatarLetter = name.charAt(0).toUpperCase()
  const avatarColor = getAvatarColor(id)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate("/projects")
  }

  return (
    <ProfileCardContainer onClick={handleCardClick}>
      <Avatar color={avatar ? undefined : avatarColor}>
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        ) : (
          avatarLetter
        )}
      </Avatar>
      <Box>
        <ProfileName>{name}</ProfileName>
      </Box>
      <ArrowIcon>
        <ArrowForwardIcon />
      </ArrowIcon>
    </ProfileCardContainer>
  )
}

export default ProfileCard
