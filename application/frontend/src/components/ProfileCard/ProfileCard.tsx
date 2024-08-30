import React from "react"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Box } from "@mui/material"

import { ArrowIcon, Avatar, ProfileCardContainer, ProfileName } from "./ProfileCard.styled"

const getRandomColor = () => {
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
  return colors[Math.floor(Math.random() * colors.length)]
}

interface ProfileCardProps {
  profile: {
    id: number
    name: string
    avatar?: string
  }
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { name, avatar } = profile
  const avatarLetter = name.charAt(0).toUpperCase()
  const avatarColor = getRandomColor()

  return (
    <ProfileCardContainer>
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
