import { useUser } from "context/UserContext"
import { UserController } from "~api/controllers/UserController"
import { useTheme } from "~components/Theme"
import UserSelectModal from "~components/UserSelectModal/UserSelectModal"

import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { Button, Switch, Tooltip, Typography } from "@mui/material"

import { Container, LeftSection, Logo, NavButtons, RightSection, Switches } from "./Header.styled"

export const Header: React.FC = () => {
  const { theme } = useTheme()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const { selectedUser, users } = useUser()

  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    UserController.get()
  }, [])

  const handleUserClick = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleSelectProfile = (profileId: number) => {
    console.log("Selected Profile ID:", profileId)
    setModalOpen(false)
  }

  useEffect(() => {
    console.log("Loaded users:", users)
  }, [users])

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
            onClick={() => navigate("/projects")}
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
        </NavButtons>
      </LeftSection>

      <RightSection>
        {selectedUser && (
          <Typography
            variant="subtitle1"
            sx={{ marginRight: "16px", cursor: "pointer" }}
            onClick={handleUserClick}
          >
            {selectedUser.name}
          </Typography>
        )}
        <Switches>
          <Tooltip title={t("changeLanguage")}>
            <Switch
              onChange={(_, checked) =>
                checked ? i18n.changeLanguage("en") : i18n.changeLanguage("ru")
              }
            />
          </Tooltip>
        </Switches>
      </RightSection>

      <UserSelectModal
        open={isModalOpen}
        onClose={handleCloseModal}
        profiles={users}
        onSelectProfile={handleSelectProfile}
      />
    </Container>
  )
}
