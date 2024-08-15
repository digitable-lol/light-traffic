import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { AccountCircle, Message, MoreVert, Notifications } from "@mui/icons-material"
import { Button, IconButton, Switch, Tooltip, Typography } from "@mui/material"

import { UserController } from "src/api/controllers/UserController"
import { useTheme } from "src/components/Theme"
import { ThemeEnum } from "src/types/theme/enum"

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
        </NavButtons>
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
