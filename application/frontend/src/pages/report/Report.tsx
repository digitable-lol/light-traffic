import stack from "~assets/stack.svg"
import CreateReportButton from "~components/CreateReportButton/CreateReportButton"
import { NavButton } from "~components/NavButton"
import ReportOverlay from "~components/ReportOverlay/ReportOverlay"
import ReportsTable from "~components/ReportsTable/ReportsTable"
import { SearchBar } from "~components/SearchBar"
import { ViewModeToggle } from "~components/ViewModeToggle"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import HomeIcon from "@mui/icons-material/Home"

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

  return (
    <Container>
      <NavButtonContainer>
        <StyledBreadcrumbs aria-label="breadcrumb">
          <NavButton to="/" icon={<HomeIcon fontSize="small" />}>
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
        />
        <ViewModeToggle viewMode={viewMode} onToggleViewMode={toggleViewMode} />
      </SearchBarContainer>
      <ReportListContainer>
        <ReportsTable reports={filteredReports} />
      </ReportListContainer>
      <ReportOverlay isOpen={isOverlayOpen} onClose={closeOverlay} />
    </Container>
  )
}

export default ReportPage
