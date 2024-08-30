import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import SearchIcon from "@mui/icons-material/Search"
import { Box } from "@mui/material"

import { ProfileCard } from "src/components/ProfileCard"
import { SearchBar } from "src/components/SearchBar"

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const profiles = [
    { id: 1, name: "Профиль 1", avatar: "https://via.placeholder.com/50" },
    { id: 2, name: "Профиль 2", avatar: "https://via.placeholder.com/50" },
    { id: 3, name: "Профиль 3", avatar: "https://via.placeholder.com/50" },
  ]

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
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </Box>
      </ContentContainer>
    </RootContainer>
  )
}

export default Home
