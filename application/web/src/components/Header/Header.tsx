import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { AccountCircle, Message, MoreVert, Notifications } from "@mui/icons-material"
import { Button, IconButton, Switch, Tooltip, Typography } from "@mui/material"

import { UserController } from "src/api/controllers/UserController"
import { useTheme } from "src/components/Theme"
import { useNavigationRoutes } from "src/routes/routes"
import { ThemeEnum } from "src/types/theme/enum"

import { Navbar } from "../Navbar"
import {
  Container,
  IconButtons,
  LeftSection,
  Logo,
  RightSection,
  Switches,
} from "./Header.styled"

export const Header: React.FC = () => {
  const { theme, change } = useTheme()
  const { t, i18n } = useTranslation()
  const navigationRoutes = useNavigationRoutes()

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
        <Navbar tabs={navigationRoutes} />
        {/* <NavButtons>
          <Button
            onClick={() => console.log("Home clicked")}
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
              },
            }}
          >
            {t("home")}
          </Button>
          <Button
            onClick={() => console.log("Projects clicked")}
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
              },
            }}
          >
            {t("projects")}
          </Button>
        </NavButtons> */}
      </LeftSection>

      <RightSection>
        <IconButtons>
          <Tooltip title={t("messages")}>
            <IconButton>
              <Message />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("notifications")}>
            <IconButton>
              <Notifications />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("profile")}>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("more")}>
            <IconButton>
              <MoreVert />
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
