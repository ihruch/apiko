import React from "react";

export const themes = {
  dark: {
    bgcolor: "linear-gradient(180deg, #090810 0%, #171236 100%)"
  },
  light: {
    bgcolor: "#F2F2F2"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
});



