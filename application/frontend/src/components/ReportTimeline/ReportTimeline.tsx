import React from "react"

import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"

import {
  HeaderText,
  LineContainer,
  ScrollableBox,
  StickyColumnCell,
  StickyHeaderCell,
  TimelineCell,
} from "./ReportTimeline.styled"

type Report = {
  id: number
  name: string
  startDate: Date
  endDate: Date
  color: string
  stage: string
}

type ReportTimelineProps = {
  reports: Report[]
  startDate: Date
  endDate: Date
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const getDaysArray = (start: Date, end: Date): Date[] => {
  const arr = []
  const dt = new Date(start)
  while (dt <= end) {
    arr.push(new Date(dt))
    dt.setDate(dt.getDate() + 1)
  }
  return arr
}

export const ReportTimeline: React.FC<ReportTimelineProps> = ({ reports, startDate, endDate }) => {
  const days = getDaysArray(startDate, endDate)
  const adjustedDaysOfWeek = [...daysOfWeek.slice(1), daysOfWeek[0]]

  return (
    <Container>
      <Box display="flex" flexDirection="row">
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StickyHeaderCell>
                    <Typography variant="body1" fontWeight="bold">
                      Название отчета
                    </Typography>
                  </StickyHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <StickyColumnCell>
                      <Typography variant="body1">{report.name}</Typography>
                    </StickyColumnCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <ScrollableBox>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  {days.map((day, index) => (
                    <StickyHeaderCell key={index} align="center">
                      <HeaderText variant="body2">{adjustedDaysOfWeek[day.getDay()]}</HeaderText>
                      <Typography variant="body2">{day.getDate()}</Typography>
                    </StickyHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell />
                    {days.map((day, index) => {
                      const isWithinRange =
                        day >= new Date(report.startDate.setHours(0, 0, 0, 0)) &&
                        day <= new Date(report.endDate.setHours(23, 59, 59, 999))
                      return (
                        <TimelineCell key={index}>
                          {isWithinRange && <LineContainer color={report.color} />}
                        </TimelineCell>
                      )
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ScrollableBox>
      </Box>
    </Container>
  )
}

export default ReportTimeline
