import dayjs from "dayjs"

import React, { useState } from "react"
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

export interface Report {
  id: number
  name: string
  status: "Error" | "Success" | "In Progress" | string
  author: string
  authorAvatar: string
  startDate: string
  endDate: string
}

interface ReportsTableProps {
  reports: Report[]
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  const { t } = useTranslation()

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [sortedReports, setSortedReports] = useState<Report[]>(reports)

  const handleSort = () => {
    const sorted = [...reports].sort((a, b) => {
      const aDate = dayjs(a.endDate).valueOf()
      const bDate = dayjs(b.endDate).valueOf()
      return sortOrder === "asc" ? aDate - bDate : bDate - aDate
    })

    setSortedReports(sorted)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
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
              ) : sortOrder === "desc" ? (
                <ArrowDropDownOutlinedIcon style={{ marginLeft: "8px" }} />
              ) : (
                <ArrowDropUpOutlinedIcon style={{ marginLeft: "8px", opacity: 0.5 }} />
              )}
            </StyledTableCell>
            <StyledTableCell>{t("reportsTable.endDate")}</StyledTableCell>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {sortedReports.map((report) => (
            <StyledTableRow key={report.id}>
              <StyledTableCell>
                <ProjectName>{report.name}</ProjectName>
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
