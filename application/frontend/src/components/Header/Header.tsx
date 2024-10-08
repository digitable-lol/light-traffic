import { UserController } from "~api/controllers/UserController"
import { useTheme } from "~components/Theme"
import { ThemeEnum } from "~types/theme/enum"

import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { AccountCircleOutlined, MoreVertOutlined, NotificationsOutlined } from "@mui/icons-material"
import { Button, IconButton, Switch, Tooltip, Typography } from "@mui/material"

import {
  Container,
  IconButtons,
  LeftSection,
  Logo,
  NavButtons,
  RightSection,
  Switches,
} from "./Header.styled"

export const Header: React.FC = () => {
  const { theme, change } = useTheme()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    UserController.get()
  }, [])

  return (
    <Container>
      <LeftSection>
        <Logo>
          <Typography variant="h6" component="div">
            LOGO
          </Typography>
        </Logo>
        <NavButtons>
          <Button
            onClick={() => navigate("/")}
            sx={{
              color: "inherit",
              textDecoration: "none",
              textTransform: "none",
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
              },
            }}
          >
            {t("projects")}
          </Button>
          <Button
            onClick={() => console.log("Quiz clicked")}
            sx={{
              color: "inherit",
              textDecoration: "none",
              textTransform: "none",
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
              },
            }}
          >
            {t("quiz")}
          </Button>
          <Button
            onClick={() => console.log("Rating clicked")}
            sx={{
              color: "inherit",
              textDecoration: "none",
              textTransform: "none",
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
              },
            }}
          >
            {t("rating")}
          </Button>
        </NavButtons>
      </LeftSection>

      <RightSection>
        <IconButtons>
          <Tooltip title={t("notifications")}>
            <IconButton
              sx={{
                backgroundColor: "rgba(238, 238, 238, 1)",
                borderRadius: "6px",
                width: "28px",
                height: "28px",
              }}
            >
              <NotificationsOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("profile")}>
            <IconButton
              sx={{
                backgroundColor: "rgba(238, 238, 238, 1)",
                borderRadius: "6px",
                width: "28px",
                height: "28px",
              }}
            >
              <AccountCircleOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("more")}>
            <IconButton
              sx={{
                backgroundColor: "rgba(238, 238, 238, 1)",
                borderRadius: "6px",
                width: "28px",
                height: "28px",
              }}
            >
              <MoreVertOutlined />
            </IconButton>
          </Tooltip>
        </IconButtons>

        <Switches>
          <Tooltip title={t("toggleTheme")}>
            <Switch
              onChange={(_, checked) => {
                change(checked ? ThemeEnum.Dark : ThemeEnum.Light)
              }}
            />
          </Tooltip>
          <Tooltip title={t("changeLanguage")}>
            <Switch
              onChange={(_, checked) =>
                checked ? i18n.changeLanguage("en") : i18n.changeLanguage("ru")
              }
            />
          </Tooltip>
        </Switches>
      </RightSection>
    </Container>
  )
}
