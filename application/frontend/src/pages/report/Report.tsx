import stack from "~assets/stack.svg"
import CreateReportButton from "~components/CreateReportButton/CreateReportButton"
import { NavButton } from "~components/NavButton"
import ReportOverlay from "~components/ReportOverlay/ReportOverlay"
import ReportsTable from "~components/ReportsTable/ReportsTable"
import { SearchBar } from "~components/SearchBar"
import { Report } from "~types/types"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

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

const initialReports: Report[] = [
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
    name: "aboba",
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
  const { userId, projectId } = useParams<{ userId: string; projectId: string }>()
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list")
  const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false)
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)
  const [reports, setReports] = useState<Report[]>(initialReports)

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
    setSelectedReport(null)
    setOverlayOpen(true)
  }

  const closeOverlay = () => {
    setOverlayOpen(false)
  }

  const handleReportClick = (report: Report) => {
    setSelectedReport(report)
    setOverlayOpen(true)
  }

  const handleDeleteReport = (report: Report) => {
    setReports((prevReports) => prevReports.filter((r) => r.id !== report.id))
  }

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Container>
      <NavButtonContainer>
        <StyledBreadcrumbs aria-label="breadcrumb">
          <NavButton to={`/${userId}/projects`} icon={<HomeIcon fontSize="small" />}>
            {t("projectList")}
          </NavButton>
          <NavButton to={`/${userId}/projects/${projectId}`}>
            {t("projectName", { name: "Название проекта" })}
          </NavButton>
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
      </SearchBarContainer>
      <ReportListContainer>
        <ReportsTable reports={filteredReports} onReportClick={handleReportClick} />
      </ReportListContainer>
      <ReportOverlay
        isOpen={isOverlayOpen}
        onClose={closeOverlay}
        report={selectedReport}
        isEditMode={!!selectedReport}
        onDelete={handleDeleteReport}
      />
    </Container>
  )
}

export default ReportPage
