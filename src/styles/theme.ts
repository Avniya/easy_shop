import { createTheme } from '@mui/material/styles';
import { Phudu } from 'next/font/google';

// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const phudu = Phudu({
  weight:["400","500","600","700"],
  style:["normal"],
  subsets:['latin']
})

export const theme = createTheme({
    palette: {
      mode:"light",
      primary: {
        main: '#FFA559',
      },
      secondary: {
        main: '#89375F',
      },
    },
    spacing: 10,
    typography:{
      fontFamily: phudu.style.fontFamily,
      h1:{
        fontSize:"6rem",
        fontWeight: "500",
      },
      h2:{
        fontSize:"4rem",
        fontWeight: "400",
      },
      h3:{
        fontSize:"3rem",
      }
    },
    components:{
      MuiButton:{
        // defaultProps: {
        //   disableRipple: true,
        // },
        styleOverrides:{
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'outlined' &&
              {
                backgroundColor: ownerState.color,
                border:"2px solid",
              }),
          }),
        }
      }
    }
  });

  const Colors = {
    primary: "#FFA559",
    secondary: "#89375F",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
  };