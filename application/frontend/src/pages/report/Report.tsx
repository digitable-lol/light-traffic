import React, { useState } from "react"

import { Settings } from "@mui/icons-material"
import HomeIcon from "@mui/icons-material/Home"
import { Container, Grid } from "@mui/material"

import CreateReportButton from "src/components/CreateReportButton/CreateReportButton"
import { NavButton } from "src/components/NavButton"
import ReportOverlay from "src/components/ReportOverlay/ReportOverlay"
import ReportTimeline from "src/components/ReportTimeline/ReportTimeline"
import ReportsTable from "src/components/ReportsTable/ReportsTable"
import { SearchBar } from "src/components/SearchBar"

import { SettingsButton } from "../Project/Project.styled"
import { Header, StyledContainer, Title } from "./Report.styled"

const stageColors = {
  Initial: "rgba(0, 122, 255, 1)",
  Onboarding: "rgba(88, 86, 214, 1)",
  "In progress": "rgba(255, 59, 48, 1)",
  "In review": "rgba(255, 149, 0, 1)",
  "In test": "rgba(52, 199, 89, 1)",
}

type ReportStage = "Initial" | "Onboarding" | "In progress" | "In review" | "In test"

type Report = {
  id: number
  name: string
  status: string
  author: string
  authorAvatar: string
  startDate: string
  endDate: string
  stage: ReportStage
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
    stage: "Initial",
  },
  {
    id: 2,
    name: "Report 2",
    status: "In Progress",
    author: "Jane Smith",
    authorAvatar: "/path/to/avatar2.jpg",
    startDate: "2023-08-05T09:15:00",
    endDate: "2023-08-15T16:45:00",
    stage: "In progress",
  },
  {
    id: 3,
    name: "Report 3",
    status: "In Progress",
    author: "Jane Smith",
    authorAvatar: "/path/to/avatar2.jpg",
    startDate: "2023-08-25T09:15:00",
    endDate: "2023-09-15T16:45:00",
    stage: "In review",
  },
]

const getDaysArray = (start: Date, end: Date): Date[] => {
  const arr = []
  const dt = new Date(start)
  while (dt <= end) {
    arr.push(new Date(dt))
    dt.setDate(dt.getDate() + 1)
  }
  return arr
}

export const ReportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list")
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "list" ? "timeline" : "list"))
  }

  const handleCreateReport = () => {
    setOverlayOpen(true)
  }

  const closeOverlay = () => {
    setOverlayOpen(false)
  }

  const minDate = new Date(Math.min(...reports.map((r) => new Date(r.startDate).getTime())))
  const maxDate = new Date(Math.max(...reports.map((r) => new Date(r.endDate).getTime())))

  const days = getDaysArray(minDate, maxDate)

  const reportData = reports.map((report) => ({
    ...report,
    color: stageColors[report.stage],
    startDate: new Date(report.startDate),
    endDate: new Date(report.endDate),
  }))

  return (
    <StyledContainer>
      <Container maxWidth="lg">
        <NavButton to="/" icon={<HomeIcon fontSize="small" />}>
          Home
        </NavButton>
        /<NavButton to="/projects">Проект название проекта</NavButton>
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
        {viewMode === "list" ? (
          <ReportsTable reports={reports} />
        ) : (
          <ReportTimeline reports={reportData} startDate={minDate} endDate={maxDate} />
        )}
      </Container>
      <ReportOverlay isOpen={isOverlayOpen} onClose={closeOverlay} />
    </StyledContainer>
  )
}

export default ReportPage
