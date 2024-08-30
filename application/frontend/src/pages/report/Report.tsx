import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import HomeIcon from "@mui/icons-material/Home"

import stack from "src/assets/stack.svg"
import CreateReportButton from "src/components/CreateReportButton/CreateReportButton"
import { NavButton } from "src/components/NavButton"
import ReportOverlay from "src/components/ReportOverlay/ReportOverlay"
import ReportsTable from "src/components/ReportsTable/ReportsTable"
import { SearchBar } from "src/components/SearchBar"
import { ViewModeToggle } from "src/components/ViewModeToggle"
import { Gantt } from "src/lib/gantt/gantt"
import { Task, ViewMode } from "src/types/public-types"

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

const stageColors: { [key: string]: string } = {
  Initial: "#4caf50",
  Onboarding: "#ff9800",
  "In progress": "#2196f3",
  "In review": "#9e9e9e",
  "In test": "#f44336",
}

const tasks: Task[] = reports.map((report) => ({
  id: report.id.toString(),
  name: report.name,
  start: new Date(report.startDate),
  end: new Date(report.endDate),
  progress: 0,
  color: stageColors[report.stage] || "#9e9e9e",
  type: "project",
}))

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

  const handleDateChange = (taskId: string, newDate: Date) => {
    console.log(`Date changed for task ${taskId}: ${newDate}`)
  }

  const handleProgressChange = (taskId: string, newProgress: number) => {
    console.log(`Progress changed for task ${taskId}: ${newProgress}`)
  }

  const handleDoubleClick = (taskId: string) => {
    console.log(`Task ${taskId} double-clicked`)
  }

  const handleClick = (taskId: string) => {
    console.log(`Task ${taskId} clicked`)
  }

  const handleDelete = (taskId: string) => {
    console.log(`Task ${taskId} deleted`)
  }

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(`Task ${task.id} ${isSelected ? "selected" : "deselected"}`)
  }

  const handleExpanderClick = (task: Task) => {
    console.log(`Expander clicked for task ${task.id}`)
  }

  const minDate = new Date(Math.min(...reports.map((r) => new Date(r.startDate).getTime())))
  const maxDate = new Date(Math.max(...reports.map((r) => new Date(r.endDate).getTime())))

  const reportData = reports.map((report) => ({
    ...report,
    color: stageColors[report.stage],
    startDate: new Date(report.startDate),
    endDate: new Date(report.endDate),
  }))

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
          style={{ flexGrow: 1, marginRight: "16px" }}
        />
        <ViewModeToggle viewMode={viewMode} onToggleViewMode={toggleViewMode} />
      </SearchBarContainer>
      <ReportListContainer>
        {viewMode === "list" ? (
          <ReportsTable reports={filteredReports} />
        ) : (
          <Gantt
            tasks={tasks}
            headerHeight={60}
            columnWidth={70}
            listCellWidth="200px"
            rowHeight={60}
            ganttHeight={500}
            viewMode={ViewMode.Week}
            preStepsCount={2}
            locale="ru" //ochko1
            barFill={70}
            barCornerRadius={5}
            barProgressColor="#007aff" //ochko2
            barProgressSelectedColor="#007aff"
            barBackgroundColor="#d3d3d3"
            barBackgroundSelectedColor="#bfbfbf"
            projectProgressColor="#32c5d2"
            projectProgressSelectedColor="#24a4a9"
            projectBackgroundColor="#f5a623"
            projectBackgroundSelectedColor="#f39c12"
            milestoneBackgroundColor="#e67e22"
            milestoneBackgroundSelectedColor="#d35400"
            rtl={false}
            handleWidth={10}
            timeStep={60000}
            arrowColor="blue"
            fontFamily="Arial, sans-serif"
            fontSize="16px"
            arrowIndent={25}
            todayColor="rgba(255, 0, 0, 0.2)"
            viewDate={new Date("2024-08-01")}
            TooltipContent={({ task }) => <div>Tooltip for {task.name}</div>}
            TaskListHeader={({ rowHeight }) => <div style={{ height: rowHeight }}>Отчеты</div>}
            TaskListTable={({ tasks, rowHeight }) => (
              <table>
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            onDateChange={handleDateChange}
            onProgressChange={handleProgressChange}
            onDoubleClick={handleDoubleClick}
            onClick={handleClick}
            onDelete={handleDelete}
            onSelect={handleSelect}
            onExpanderClick={handleExpanderClick}
          />
        )}
      </ReportListContainer>
      <ReportOverlay isOpen={isOverlayOpen} onClose={closeOverlay} />
    </Container>
  )
}

export default ReportPage
