import { useTheme } from "next-themes";
import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const onClickToggleDark = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <HeaderStyles>
      <div className="body">Hello</div>
      <button onClick={onClickToggleDark}>Change theme</button>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.div``;
