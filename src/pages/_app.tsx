import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { createTheme } from '@mui/material/styles';

import { red } from '@mui/material/colors';
import { render } from 'react-dom';
import createEmotionCache from "@/utils/createEmotionCache";
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../styles/theme"
import { CssBaseline, Paper } from '@mui/material';
import MainLayout from "@/layout/mainLayout";

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const clientSideEmotionCache = createEmotionCache();

//NOTE: Don't use <StyledEngineProvider injectFirst/>
// render(
//   <CacheProvider value={muiCache}>
//     <ThemeProvider theme={myTheme}>
//       <Root />
//     </ThemeProvider>
//   </CacheProvider>,
//   document.getElementById('root'),
// );

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={emotionCache}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CacheProvider>
    </ThemeProvider>
    // <Component {...pageProps} />
  )
}
