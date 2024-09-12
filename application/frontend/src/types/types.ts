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

export interface Goal {
  title: string
  status: string
  description: string
}

export type ReportStage = "Initial" | "Onboarding" | "In progress" | "In review" | "In test"
