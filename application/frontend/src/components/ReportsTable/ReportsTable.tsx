import dayjs from "dayjs"
import { Report } from "~pages/report/Report"

import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined"
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined"
import { Table, TableBody, TableHead } from "@mui/material"

import StatusChipComponent from "../StatusChip/StatusChip"
import {
  AuthorAvatar,
  AuthorContainer,
  CustomTableContainer,
  DateText,
  ProjectName,
  StyledTableCell,
  StyledTableRow,
  TableHeaderRow,
} from "./ReportsTable.styled"

interface ReportsTableProps {
  reports: Report[]
  onReportClick: (report: Report) => void
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports, onReportClick }) => {
  const { t } = useTranslation()
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [sortedReports, setSortedReports] = useState<Report[]>(reports)

  useEffect(() => {
    setSortedReports(
      [...reports].sort((a, b) => {
        const aDate = dayjs(a.endDate).valueOf()
        const bDate = dayjs(b.endDate).valueOf()
        return sortOrder === "asc" ? aDate - bDate : bDate - aDate
      }),
    )
  }, [reports, sortOrder])

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"))
  }

  return (
    <CustomTableContainer>
      <Table>
        <TableHead>
          <TableHeaderRow>
            <StyledTableCell>{t("reportsTable.name")}</StyledTableCell>
            <StyledTableCell>{t("reportsTable.status")}</StyledTableCell>
            <StyledTableCell>{t("reportsTable.author")}</StyledTableCell>
            <StyledTableCell
              onClick={handleSort}
              style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              {t("reportsTable.startDate")}
              {sortOrder === "asc" ? (
                <ArrowDropUpOutlinedIcon style={{ marginLeft: "8px" }} />
              ) : (
                <ArrowDropDownOutlinedIcon style={{ marginLeft: "8px" }} />
              )}
            </StyledTableCell>
            <StyledTableCell>{t("reportsTable.endDate")}</StyledTableCell>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {sortedReports.map((report) => (
            <StyledTableRow key={report.id}>
              <StyledTableCell>
                <ProjectName onClick={() => onReportClick(report)} style={{ cursor: "pointer" }}>
                  {report.name}
                </ProjectName>
              </StyledTableCell>
              <StyledTableCell>
                <StatusChipComponent status={report.status} />
              </StyledTableCell>
              <StyledTableCell>
                <AuthorContainer>
                  <AuthorAvatar src={report.authorAvatar} alt={report.author} />
                  {report.author}
                </AuthorContainer>
              </StyledTableCell>
              <StyledTableCell>
                <DateText>{dayjs(report.startDate).format("DD/MM/YYYY HH:mm")}</DateText>
              </StyledTableCell>
              <StyledTableCell>
                <DateText>{dayjs(report.endDate).format("DD/MM/YYYY HH:mm")}</DateText>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
  )
}

export default ReportsTable
