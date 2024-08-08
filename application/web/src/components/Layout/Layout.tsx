import { Header } from "@src/components/Header";
import Markup from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Theme } from "@src/components/Theme";

export const Layout = () => {
  return (
    <Markup.Container>
      <Theme>
        <Markup.GlobalStyle />
        <Header />
        <Outlet />
      </Theme>
    </Markup.Container>
  );
};
