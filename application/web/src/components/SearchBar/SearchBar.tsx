import React from "react"

import ClearIcon from "@mui/icons-material/Clear"
import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import { Grid, InputAdornment } from "@mui/material"

import { ClearButton, SearchContainer, SearchInput, ViewToggleButton } from "./SearchBar.styled"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  viewMode: "list" | "grid"
  onToggleViewMode: () => void
  onClearSearch: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  viewMode,
  onToggleViewMode,
  onClearSearch,
}) => {
  return (
    <SearchContainer container spacing={2}>
      <Grid item xs={12} sm={6}>
        <SearchInput
          variant="standard"
          placeholder="Search reports"
          value={searchQuery}
          onChange={onSearchChange}
          InputProps={{
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
      <Grid item xs={12} sm={6} container justifyContent="flex-end">
        <ViewToggleButton onClick={onToggleViewMode}>
          {viewMode === "list" ? <ViewModuleIcon /> : <ViewListIcon />}
        </ViewToggleButton>
      </Grid>
    </SearchContainer>
  )
}

export default SearchBar
