import React from "react"

import ClearIcon from "@mui/icons-material/Clear"
import { Grid, InputAdornment } from "@mui/material"

import { ClearButton, SearchContainer, SearchInput } from "./SearchBar.styled"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClearSearch: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
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
    </SearchContainer>
  )
}

export default SearchBar
