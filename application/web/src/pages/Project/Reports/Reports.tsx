import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { Layers } from "@mui/icons-material"
import { Button, CircularProgress, IconButton, Typography } from "@mui/material"

import { Breadcrumbs } from "src/components/Breadcrumbs"
import { Report, ReportsTable } from "src/components/ReportsTable"

import { Container, CreateProjectContainer, HeaderSection, TitleSection } from "./Reports.styled"

export const ReportsPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState<any>({})

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
      setState({ id: 123213, name: "Дудочник" })
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    console.log(state)
    navigate(location.pathname, { state })
  }, [state])

  if (loading) {
    return <CircularProgress />
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
    },
    {
      id: 2,
      name: "Report 2",
      status: "In Progress",
      author: "Jane Smith",
      authorAvatar: "/path/to/avatar2.jpg",
      startDate: "2023-08-05T09:15:00",
      endDate: "2023-08-15T16:45:00",
    },
  ]

  return (
    <Container>
      <Breadcrumbs />
      <HeaderSection>
        <TitleSection>
          <IconButton
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <Layers />
          </IconButton>
          <Typography variant="h5" fontWeight={500}>
            Список отчетов
          </Typography>

          <CreateProjectContainer>
            <Button variant="contained">Создать отчет</Button>
          </CreateProjectContainer>
        </TitleSection>
      </HeaderSection>
      <ReportsTable reports={reports} />
    </Container>
  )
}

export default ReportsPage
