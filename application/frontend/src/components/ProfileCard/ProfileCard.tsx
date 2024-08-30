import React from "react"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import { ArrowIcon, Avatar, ProfileCardContainer, ProfileName } from "./ProfileCard.styled"

interface ProfileCardProps {
  profile: {
    id: number
    name: string
    avatar: string
  }
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <ProfileCardContainer>
      <Avatar src={profile.avatar} alt={profile.name} />
      <ProfileName>{profile.name}</ProfileName>
      <ArrowIcon>
        <ArrowForwardIcon />
      </ArrowIcon>
    </ProfileCardContainer>
  )
}

export default ProfileCard
