import React, { useState } from "react"

import { Settings } from "@mui/icons-material"
import { Container, Grid } from "@mui/material"

import CreateReportButton from "src/components/CreateReportButton/CreateReportButton"
import { NavButton } from "src/components/NavButton"
import ReportOverlay from "src/components/ReportOverlay/ReportOverlay"
import ReportsTable from "src/components/ReportsTable/ReportsTable"
import { SearchBar } from "src/components/SearchBar"

import { Report } from "../../components/ReportsTable/ReportsTable"
import { Header, StyledContainer, Title } from "./Report.styled"
import { SettingsButton } from "src/pages/project/Project.styled"

export const ReportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "list" ? "grid" : "list"))
  }

  const handleCreateReport = () => {
    setOverlayOpen(true)
  }

  const closeOverlay = () => {
    setOverlayOpen(false)
  }

  const reports: Report[] = [
    {
      id: 1,
      name: "Report 1",
      status: "Success",
      author: "John Doe",
      authorAvatar: "/path/to/avatar1.jpg",
      startDate: "2023-08-01T13:00:00",
      endDate: "2023-08-10T14:30:00",
    },
    {
      id: 2,
      name: "Report 2",
      status: "In Progress",
      author: "Jane Smith",
      authorAvatar: "/path/to/avatar2.jpg",
      startDate: "2023-08-05T09:15:00",
      endDate: "2023-08-15T16:45:00",
    },
  ]

  return (
    <StyledContainer>
      <Container maxWidth="lg">
        <NavButton to="/">Home</NavButton>/
        <NavButton to="/projects">Проект название проекта</NavButton>
        <Header container>
          <Grid item>
            <SettingsButton>
              <Settings />
            </SettingsButton>
            <Title variant="h5">Reports</Title>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="flex-end">
            <CreateReportButton onClick={handleCreateReport} />
          </Grid>
        </Header>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          viewMode={viewMode}
          onToggleViewMode={toggleViewMode}
          onClearSearch={clearSearch}
        />
        <ReportsTable reports={reports} />
      </Container>
      <ReportOverlay isOpen={isOverlayOpen} onClose={closeOverlay} />
    </StyledContainer>
  )
}

export default ReportPage
