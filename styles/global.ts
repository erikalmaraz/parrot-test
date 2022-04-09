import { createGlobalStyle } from "styled-components"
import { GlobalVariables } from "./global.interfaces"

/* GLOBAL VARIABLES */
export const GlobalSettingsVariables: GlobalVariables = {
  fontFamily: "Roboto",
  fontSize: "16px",
  marginSize: 0,
  paddingSize: 0,
  boxSizing: "border-box",
}

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: ${GlobalSettingsVariables.fontFamily}, sans-serif;
    font-size: ${GlobalSettingsVariables.fontSize};
    box-sizing: ${GlobalSettingsVariables.boxSizing};
    padding: ${GlobalSettingsVariables.paddingSize};
    margin: ${GlobalSettingsVariables.marginSize};
  }
`
