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
  DateCell,
  DateNumber,
  DayOfWeek,
  LineContainer,
  ScrollableBox,
  StickyColumnCell,
  StickyHeaderCell,
  TimelineCell,
} from "./ReportTimeline.styled"

type Report = {
  id: number
  name: string
  startDate: string
  endDate: string
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

const stageColors: { [key: string]: string } = {
  Initial: "rgba(0, 122, 255, 1)",
  Onboarding: "rgba(88, 86, 214, 1)",
  "In progress": "rgba(255, 59, 48, 1)",
  "In review": "rgba(255, 149, 0, 1)",
  "In test": "rgba(52, 199, 89, 1)",
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
                      <DateCell>
                        <DayOfWeek variant="body2">{adjustedDaysOfWeek[day.getDay()]}</DayOfWeek>
                        <DateNumber variant="body2">{day.getDate()}</DateNumber>
                      </DateCell>
                    </StickyHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell />
                    {days.map((day, index) => {
                      const reportStartDate = new Date(report.startDate)
                      const reportEndDate = new Date(report.endDate)

                      const dayStart = new Date(day)
                      dayStart.setHours(0, 0, 0, 0)

                      const dayEnd = new Date(day)
                      dayEnd.setHours(23, 59, 59, 999)

                      const isWithinRange = dayStart <= reportEndDate && dayEnd >= reportStartDate

                      const color = stageColors[report.stage]

                      return (
                        <TimelineCell key={index}>
                          {isWithinRange && <LineContainer color={color} />}
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
