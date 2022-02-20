import React from "react";
import BlogPage from "./container/Blog_section/BlogPage";
import DevProjectPage from "./container/DevelopmentProjects/DevProjectPage";
import Landing from "./container/Landing/Landing";
import Card1 from "./container/Research_Papers/card";
import Footer from './common/Footer/Footer';
import { createTheme, ThemeProvider} from '@material-ui/core';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#999999'
      },
      secondary: {
        main: '#ffffff'
      },
      text: {
        primary: '#00b7eb'
      }
    },
    typography: {
      fontFamily: 'Helvetica',
    }
  })

  return (
    <>
      <Landing />
      <DevProjectPage />
      <BlogPage />
      <Card1 />
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>
    </>
  )
}