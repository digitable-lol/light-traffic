import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const ReportSearchBar = ({ placeholder = "Поиск..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TextField
      variant="standard"
      value={searchTerm}
      onChange={handleChange}
      placeholder={placeholder}
      fullWidth
      InputProps={{
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={clearSearch} edge="end">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ReportSearchBar;
