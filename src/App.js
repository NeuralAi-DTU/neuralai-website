<<<<<<< HEAD
import React from 'react';
import Footer from './common/Footer/Footer';
import Landing from './container/Landing/Landing';
import { createTheme, ThemeProvider} from '@material-ui/core';
=======
import React from "react";
import BlogPage from "./container/Blog_section/BlogPage";
import Landing from "./container/Landing/Landing";
import Card1 from "./container/Research_Papers/card";
>>>>>>> 22ddcfc7f049c2cad121a999897405fc399ba414

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
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <Landing />
        <Footer/>
      </ThemeProvider>
=======
      <Landing />
      <BlogPage />
      <Card1 />
>>>>>>> 22ddcfc7f049c2cad121a999897405fc399ba414
    </>
  )
}