import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './Router';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
// utils
import { theme } from './utils/theme';
import { GlobalStyle, BasicStyle } from './utils/globalStyles';

const client = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BasicStyle />
          <RouterProvider router={router}/>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </div>
);

