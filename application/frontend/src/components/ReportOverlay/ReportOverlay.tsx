import dayjs from "dayjs"
import { CustomMenuItem } from "~components/CustomMenuItem"

import React, { useEffect, useState } from "react"
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
  report: Report | null
  isEditMode: boolean
  onDelete?: (report: Report) => void
}

type ReportStage = "Initial" | "Onboarding" | "In progress" | "In review" | "In test"

export interface Report {
  id: number
  name: string
  status: "Error" | "Success" | "In Progress" | string
  author: string
  authorAvatar: string
  startDate: string
  endDate: string
  stage: ReportStage
  goals?: Goal[]
  onVacation?: string
  reporterOnVacation?: string
}

interface Goal {
  title: string
  status: string
  description: string
}

export const ReportOverlay: React.FC<ReportOverlayProps> = ({
  isOpen,
  onClose,
  report,
  isEditMode,
  onDelete,
}) => {
  const { t } = useTranslation()
  const [tab, setTab] = useState<number>(0)
  const [onVacation, setOnVacation] = useState<string>(report?.onVacation || "")
  const [reporterOnVacation, setReporterOnVacation] = useState<string>(
    report?.reporterOnVacation || "",
  )
  const [goals, setGoals] = useState<Goal[]>(report?.goals || [])
  const [reportName, setReportName] = useState<string>(report?.name || "")
  const [trafficLightColor, setTrafficLightColor] = useState<string>(report?.status || "")
  const [startDate, setStartDate] = useState<string>(
    dayjs(report?.startDate).format("YYYY-MM-DDTHH:mm"),
  )
  const [endDate, setEndDate] = useState<string>(dayjs(report?.endDate).format("YYYY-MM-DDTHH:mm"))

  useEffect(() => {
    if (isEditMode && report) {
      setReportName(report.name || "")
      setTrafficLightColor(report.status || "")
      setStartDate(dayjs(report.startDate).format("YYYY-MM-DDTHH:mm"))
      setEndDate(dayjs(report.endDate).format("YYYY-MM-DDTHH:mm"))
      setGoals(report.goals || [])
      setOnVacation(report.onVacation || "")
      setReporterOnVacation(report.reporterOnVacation || "")
    }
  }, [isEditMode, report])

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

  const handleDeleteGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      reportName,
      trafficLightColor,
      startDate,
      endDate,
      onVacation,
      reporterOnVacation,
      goals,
    })
    onClose()
  }

  return (
    <>
      <Backdrop isOpen={isOpen} />
      <CreateReportOverlay isOpen={isOpen}>
        <OverlayContainer>
          <OverlayHeader>
            <Typography variant="h6">
              {isEditMode ? t("reportOverlay.editReport") : t("reportOverlay.createReport")}
            </Typography>
          </OverlayHeader>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label={t("reportOverlay.reportName")}
                    variant="outlined"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>{t("reportOverlay.trafficLightColor")}</InputLabel>
                    <Select
                      label={t("reportOverlay.trafficLightColor")}
                      value={trafficLightColor}
                      onChange={(e) => setTrafficLightColor(e.target.value)}
                    >
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
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label={t("reportOverlay.endDate")}
                    type="datetime-local"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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
                      <GoalsTable
                        goals={goals}
                        onGoalChange={handleGoalChange}
                        onDeleteGoal={handleDeleteGoal}
                      />
                    </Grid>
                  </>
                )}
              </Grid>

              <Grid item xs={12} container spacing={2} justifyContent="flex-end">
                <ButtonContainer>
                  <Button variant="contained" color="primary" type="submit">
                    {isEditMode ? t("reportOverlay.save") : t("reportOverlay.submit")}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={onClose}
                    style={{ marginLeft: "8px" }}
                  >
                    {t("reportOverlay.cancel")}
                  </Button>
                  {isEditMode && onDelete && (
                    <Button
                      variant="outlined"
                      color="error"
                      style={{ marginLeft: "8px" }}
                      onClick={() => report && onDelete(report)}
                    >
                      {t("reportOverlay.delete")}
                    </Button>
                  )}
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
