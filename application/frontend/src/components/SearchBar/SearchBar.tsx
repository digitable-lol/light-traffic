import React from "react"

import ClearIcon from "@mui/icons-material/Clear"
import { Grid, InputAdornment } from "@mui/material"

import {
  ClearButton,
  InputAdornmentIcon,
  OutlinedSearchInput,
  SearchContainer,
  StandardSearchInput,
} from "./SearchBar.styled"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClearSearch: () => void
  variant?: "standard" | "outlined"
  startIcon?: React.ReactNode
  placeholder?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onClearSearch,
  variant = "standard",
  startIcon,
  placeholder = "Search",
}) => {
  const InputComponent = variant === "outlined" ? OutlinedSearchInput : StandardSearchInput

  return (
    <SearchContainer container spacing={2}>
      <Grid item xs={12}>
        <InputComponent
          variant={variant}
          placeholder={placeholder}
          value={searchQuery}
          onChange={onSearchChange}
          InputProps={{
            startAdornment: startIcon ? (
              <InputAdornment position="start">
                <InputAdornmentIcon>{startIcon}</InputAdornmentIcon>
              </InputAdornment>
            ) : null,
            endAdornment: searchQuery ? (
              <InputAdornment position="end">
                <ClearButton onClick={onClearSearch}>
                  <ClearIcon />
                </ClearButton>
              </InputAdornment>
            ) : null,
          }}
        />
      </Grid>
    </SearchContainer>
  )
}

export default SearchBar
