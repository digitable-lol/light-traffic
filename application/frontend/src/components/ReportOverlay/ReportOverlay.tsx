import dayjs from "dayjs"

import React, { useState } from "react"

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material"

import { GoalsTable } from "../GoalsTable"
import {
  Backdrop,
  ButtonContainer,
  ColorCircle,
  ColorTextContainer,
  CreateReportOverlay,
  OverlayContainer,
  OverlayHeader,
} from "./ReportOverlay.styled"

interface ReportOverlayProps {
  isOpen: boolean
  onClose: () => void
}

interface Goal {
  title: string
  status: string
  description: string
}

export const ReportOverlay: React.FC<ReportOverlayProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<number>(0)
  const [onVacation, setOnVacation] = useState<string>("")
  const [reporterOnVacation, setReporterOnVacation] = useState<string>("")
  const [goals, setGoals] = useState<Goal[]>([])

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  const handleAddGoal = () => {
    setGoals([...goals, { title: "", status: "", description: "" }])
  }

  const handleGoalChange = (index: number, field: keyof Goal, value: string) => {
    const updatedGoals = [...goals]
    updatedGoals[index][field] = value
    setGoals(updatedGoals)
  }

  return (
    <>
      <Backdrop isOpen={isOpen} />
      <CreateReportOverlay isOpen={isOpen}>
        <OverlayContainer>
          <OverlayHeader>
            <Typography variant="h6">Создать отчет</Typography>
          </OverlayHeader>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth label="Название отчета" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Итоговый цвет светофора</InputLabel>
                    <Select label="Итоговый цвет светофора" defaultValue="">
                      <MenuItem value="Success">Успех</MenuItem>
                      <MenuItem value="Error">Ошибка</MenuItem>
                      <MenuItem value="In Progress">В процессе</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12} container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Дата начала"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    defaultValue={dayjs().format("YYYY-MM-DDTHH:mm")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Дата окончания"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    defaultValue={dayjs().add(1, "day").format("YYYY-MM-DDTHH:mm")}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Tabs value={tab} onChange={handleTabChange} aria-label="report tabs">
                  <Tab label="Основное" />
                  <Tab label="Цели" />
                </Tabs>
              </Grid>

              <Grid item xs={12}>
                {tab === 0 && (
                  <>
                    <Grid container spacing={2} marginTop={2}>
                      <Grid item xs={12}>
                        <Typography variant="h6">Цвета светофора</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <ColorTextContainer>
                          <ColorCircle color="red" />
                          <TextField variant="outlined" label="value" fullWidth />
                        </ColorTextContainer>
                        <ColorTextContainer>
                          <ColorCircle color="orange" />
                          <TextField variant="outlined" label="value" fullWidth />
                        </ColorTextContainer>
                        <ColorTextContainer>
                          <ColorCircle color="green" />
                          <TextField variant="outlined" label="value" fullWidth />
                        </ColorTextContainer>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} marginTop={2}>
                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Идет ли кто-то в отпуск?</InputLabel>
                          <Select
                            label="Идет ли кто-то в отпуск?"
                            value={onVacation}
                            onChange={(e) => setOnVacation(e.target.value)}
                          >
                            <MenuItem value="Yes">Да</MenuItem>
                            <MenuItem value="No">Нет</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>Идет ли в отпуск тот, кто пишет отчет?</InputLabel>
                          <Select
                            label="Идет ли в отпуск тот, кто пишет отчет?"
                            value={reporterOnVacation}
                            onChange={(e) => setReporterOnVacation(e.target.value)}
                          >
                            <MenuItem value="Yes">Да</MenuItem>
                            <MenuItem value="No">Нет</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </>
                )}

                {tab === 1 && (
                  <>
                    <Grid item xs={12}>
                      <Button variant="text" color="primary" onClick={handleAddGoal}>
                        + Добавить цель
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <GoalsTable goals={goals} onGoalChange={handleGoalChange} />
                    </Grid>
                  </>
                )}
              </Grid>

              <Grid item xs={12} container spacing={2} justifyContent="flex-end">
                <ButtonContainer>
                  <Button variant="contained" color="primary" type="submit">
                    Создать
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={onClose}
                    style={{ marginLeft: "8px" }}
                  >
                    Отмена
                  </Button>
                </ButtonContainer>
              </Grid>
            </Grid>
          </form>
        </OverlayContainer>
      </CreateReportOverlay>
    </>
  )
}

export default ReportOverlay
