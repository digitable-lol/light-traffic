import { createTheme } from "@mui/material";
import { ThemeEnum } from "@src/@types/theme/enum";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./Theme.hooks";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeProps {
  children?: ReactNode | ReactNode[];
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.Dark);

  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          theme,
          change: setCurrentTheme,
        }}
      >
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
