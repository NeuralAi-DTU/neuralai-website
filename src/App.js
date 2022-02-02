import React from 'react';
import Footer from './common/Footer/Footer';
import Landing from './container/Landing/Landing';
import { createTheme, ThemeProvider} from '@material-ui/core';
import BlogPage from "./container/Blog_section/BlogPage";
import Card1 from "./container/Research_Papers/card";

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
      <ThemeProvider theme={theme}>
        <Landing />
        <BlogPage />
        <Card1 />
        <Footer/>
      </ThemeProvider>
    </>
  )
}