import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import HomeIcon from "@mui/icons-material/Home"

import stack from "src/assets/stack.svg"
import CreateReportButton from "src/components/CreateReportButton/CreateReportButton"
import { NavButton } from "src/components/NavButton"
import ReportOverlay from "src/components/ReportOverlay/ReportOverlay"
import ReportTimeline from "src/components/ReportTimeline/ReportTimeline"
import ReportsTable from "src/components/ReportsTable/ReportsTable"
import { SearchBar } from "src/components/SearchBar"
import { ViewModeToggle } from "src/components/ViewModeToggle"

import {
  Container,
  HeaderSection,
  NavButtonContainer,
  ReportListContainer,
  SearchBarContainer,
  StyledBreadcrumbs,
  StyledTitle,
  TitleSection,
} from "./Report.styled"

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
    status: "Error",
    author: "Jane Smith",
    authorAvatar: "/path/to/avatar2.jpg",
    startDate: "2023-08-05T09:15:00",
    endDate: "2023-08-15T16:45:00",
    stage: "In progress",
  },
  {
    id: 3,
    name: "Report 3",
    status: "Warning",
    author: "Jane Smith",
    authorAvatar: "/path/to/avatar2.jpg",
    startDate: "2023-08-25T09:15:00",
    endDate: "2023-09-15T16:45:00",
    stage: "In review",
  },
]

export const ReportPage: React.FC = () => {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list")
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleClearSearch = () => {
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

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const minDate = new Date(Math.min(...reports.map((r) => new Date(r.startDate).getTime())))
  const maxDate = new Date(Math.max(...reports.map((r) => new Date(r.endDate).getTime())))

  return (
    <Container>
      <NavButtonContainer>
        <StyledBreadcrumbs aria-label="breadcrumb">
          <NavButton to="/projects" icon={<HomeIcon fontSize="small" />}>
            {t("projectList")}
          </NavButton>
          <NavButton to="/projects/1">{t("projectName", { name: "Название проекта" })}</NavButton>
        </StyledBreadcrumbs>
      </NavButtonContainer>
      <HeaderSection>
        <TitleSection>
          <img src={stack} alt={t("stackIconAlt")} style={{ width: 40, height: 40 }} />
          <StyledTitle>{t("reportList")}</StyledTitle>
        </TitleSection>
        <CreateReportButton onClick={handleCreateReport} />
      </HeaderSection>
      <SearchBarContainer>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
          variant="standard"
          placeholder={t("searchPlaceholder")}
          style={{ flexGrow: 1, marginRight: "16px" }}
        />
        <ViewModeToggle viewMode={viewMode} onToggleViewMode={toggleViewMode} />
      </SearchBarContainer>
      <ReportListContainer>
        {viewMode === "list" ? (
          <ReportsTable reports={filteredReports} />
        ) : (
          <ReportTimeline reports={filteredReports} startDate={minDate} endDate={maxDate} />
        )}
      </ReportListContainer>
      <ReportOverlay isOpen={isOverlayOpen} onClose={closeOverlay} />
    </Container>
  )
}

export default ReportPage
