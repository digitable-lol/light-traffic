import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { Tab, Tabs } from "@mui/material"

import { NavbarHooks } from "./hooks"
import { NavbarTypes } from "./types"

interface Props {
  tabs: Array<NavbarTypes.Tab>
}

export const Navbar: React.FC<Props> = ({ tabs }) => {
  const navigate = useNavigate()
  const [value, setValue] = NavbarHooks.useValue(tabs)

  const handleChange = useCallback(
    (_: React.SyntheticEvent, value: string) => {
      navigate(value)
      setValue(value)
    },
    [setValue],
  )

  return (
    <Tabs  value={value} onChange={handleChange}>
      {tabs.map((tab) => (
        <Tab sx={{ height: 60 }} label={tab.label} value={tab.to} />
      ))}
    </Tabs>
  )
}
