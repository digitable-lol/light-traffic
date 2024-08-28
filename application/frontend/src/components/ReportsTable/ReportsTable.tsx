import dayjs from "dayjs"

import React from "react"
import { useTranslation } from "react-i18next"

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
  status: "Error" | "Success" | "In Progress"
  author: string
  authorAvatar: string
  startDate: string
  endDate: string
}

interface ReportsTableProps {
  reports: Report[]
}

export const ReportsTable: React.FC<ReportsTableProps> = ({ reports }) => {
  const { t } = useTranslation()

  return (
    <CustomTableContainer>
      <Table>
        <TableHead>
          <TableHeaderRow>
            <StyledTableCell>{t("reportsTable.name")}</StyledTableCell>
            <StyledTableCell>{t("reportsTable.status")}</StyledTableCell>
            <StyledTableCell>{t("reportsTable.author")}</StyledTableCell>
            <StyledTableCell>{t("reportsTable.startDate")}</StyledTableCell>
            <StyledTableCell>{t("reportsTable.endDate")}</StyledTableCell>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
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
