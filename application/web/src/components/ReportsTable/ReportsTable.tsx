import dayjs from "dayjs"

import React from "react"

import { Chip, Table, TableBody, TableHead } from "@mui/material"

import {
  AuthorAvatar,
  AuthorContainer,
  CustomTableContainer,
  DateText,
  ProjectName,
  StyledTableCell,
  StyledTableRow,
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
  return (
    <CustomTableContainer>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Author</StyledTableCell>
            <StyledTableCell>Start Date</StyledTableCell>
            <StyledTableCell>End Date</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <StyledTableRow key={report.id}>
              <StyledTableCell>
                <ProjectName>{report.name}</ProjectName>
              </StyledTableCell>
              <StyledTableCell>
                <Chip label={report.status} color="warning" variant="outlined" size="medium" />
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
