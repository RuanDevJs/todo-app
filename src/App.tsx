import { ThemeProvider } from "styled-components";
import Header from "./Layout/Header";

import "./styles/global.css";
import themes from "./themes";
import Tasks from "./Layout/Tasks";

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <Header />
      <Tasks />
    </ThemeProvider>
  );
}
