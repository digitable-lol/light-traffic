import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import SearchIcon from "@mui/icons-material/Search"
import { CardContent, Grid, Typography } from "@mui/material"

import { SearchBar } from "src/components/SearchBar"

import {
  ContentContainer,
  HeaderSection,
  ImageContainer,
  ProfileCard,
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

        <Grid container spacing={2}>
          {[1, 2, 3].map((profile) => (
            <Grid item xs={12} sm={6} md={4} key={profile}>
              <ProfileCard>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Профиль {profile}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Краткое описание профиля {profile}.
                  </Typography>
                </CardContent>
              </ProfileCard>
            </Grid>
          ))}
        </Grid>
      </ContentContainer>
    </RootContainer>
  )
}

export default Home
