import dayjs from "dayjs"
import { CustomMenuItem } from "~components/CustomMenuItem"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()
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
            <Typography variant="h6">{t("reportOverlay.createReport")}</Typography>
          </OverlayHeader>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth label={t("reportOverlay.reportName")} variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>{t("reportOverlay.trafficLightColor")}</InputLabel>
                    <Select label={t("reportOverlay.trafficLightColor")} defaultValue="">
                      <CustomMenuItem status="Error" value="Error">
                        {t("reportOverlay.error")}
                      </CustomMenuItem>
                      <CustomMenuItem status="Warning" value="Warning">
                        {t("reportOverlay.warning")}
                      </CustomMenuItem>
                      <CustomMenuItem status="Success" value="Success">
                        {t("reportOverlay.success")}
                      </CustomMenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12} container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label={t("reportOverlay.startDate")}
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
                    label={t("reportOverlay.endDate")}
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
                  <Tab label={t("reportOverlay.main")} />
                  <Tab label={t("reportOverlay.goals")} />
                </Tabs>
              </Grid>

              <Grid item xs={12}>
                {tab === 0 && (
                  <>
                    <Grid container spacing={2} marginTop={2}>
                      <Grid item xs={12}>
                        <Typography variant="h6">{t("reportOverlay.colors")}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <ColorTextContainer>
                          <ColorCircle color="red" />
                          <TextField
                            variant="outlined"
                            label={t("reportOverlay.colorValue")}
                            fullWidth
                          />
                        </ColorTextContainer>
                        <ColorTextContainer>
                          <ColorCircle color="orange" />
                          <TextField
                            variant="outlined"
                            label={t("reportOverlay.colorValue")}
                            fullWidth
                          />
                        </ColorTextContainer>
                        <ColorTextContainer>
                          <ColorCircle color="green" />
                          <TextField
                            variant="outlined"
                            label={t("reportOverlay.colorValue")}
                            fullWidth
                          />
                        </ColorTextContainer>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} marginTop={2}>
                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>{t("reportOverlay.onVacation")}</InputLabel>
                          <Select
                            label={t("reportOverlay.onVacation")}
                            value={onVacation}
                            onChange={(e) => setOnVacation(e.target.value)}
                          >
                            <MenuItem value="Yes">{t("reportOverlay.yes")}</MenuItem>
                            <MenuItem value="No">{t("reportOverlay.no")}</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel>{t("reportOverlay.reporterOnVacation")}</InputLabel>
                          <Select
                            label={t("reportOverlay.reporterOnVacation")}
                            value={reporterOnVacation}
                            onChange={(e) => setReporterOnVacation(e.target.value)}
                          >
                            <MenuItem value="Yes">{t("reportOverlay.yes")}</MenuItem>
                            <MenuItem value="No">{t("reportOverlay.no")}</MenuItem>
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
                        {t("reportOverlay.addGoal")}
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
                    {t("reportOverlay.submit")}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={onClose}
                    style={{ marginLeft: "8px" }}
                  >
                    {t("reportOverlay.cancel")}
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
