import { useUser } from "context/UserContext"
import { ProfileCard } from "~components/ProfileCard"
import { SearchBar } from "~components/SearchBar"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import SearchIcon from "@mui/icons-material/Search"
import { Box } from "@mui/material"

import {
  ContentContainer,
  HeaderSection,
  ImageContainer,
  RootContainer,
  SearchContainer,
  StyledTitle,
  TitleSection,
} from "./Home.styles"

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const { t } = useTranslation()
  const { selectUser } = useUser()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const profiles = [
    { id: 1, name: "Абоба", avatar: "" },
    { id: 2, name: "Бибоба", avatar: "" },
    { id: 3, name: "Вибоббв", avatar: "" },
  ]

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleProfileClick = (profile: { id: number; name: string; avatar: string }) => {
    selectUser(profile)
  }

  return (
    <RootContainer>
      <ImageContainer />
      <ContentContainer>
        <HeaderSection>
          <TitleSection>
            <StyledTitle>{t("selectUser")}</StyledTitle>
          </TitleSection>
        </HeaderSection>
        <SearchContainer>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
            variant="outlined"
            startIcon={<SearchIcon />}
            placeholder={t("search")}
          />
        </SearchContainer>

        <Box display="flex" flexDirection="column" gap={2}>
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </Box>
      </ContentContainer>
    </RootContainer>
  )
}

export default Home
