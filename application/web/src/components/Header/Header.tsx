import { Switch } from "@mui/material";
import Markup from "./Header.styled";
import { useTheme } from "@src/components/Theme";
import { ThemeEnum } from "@src/@types/theme/enum";

export const Header = () => {
  const { change } = useTheme();

  return (
    <Markup.Container>
      Header
      <Switch
        onChange={(_, checked) => {
          change(checked ? ThemeEnum.Dark : ThemeEnum.Light);
        }}
      />
    </Markup.Container>
  );
};
