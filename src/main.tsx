import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import { CreateFeedback } from './pages/CreateFeedback/CreateFeedback';
import { ListFeedback } from './pages/ListFeedback/ListFeedback';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { SignOut } from './features/Signout';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export enum PATHS {
  HOME = "/",
  SIGN_IN = "/login",
  SIGN_UP = "/register",
  CREATE_FB = "/feedback/create",
  LIST_FB = "/feedback",
  SIGN_OUT = "/logout",

}

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element:<ListFeedback />,
  },
  {
    path: PATHS.SIGN_IN,
    element:<SignIn />,
  },
  {
    path: PATHS.SIGN_UP,
    element:<SignUp />,
  },  
  {
    path: PATHS.CREATE_FB,
    element:<CreateFeedback />,
  },
  {
    path: PATHS.LIST_FB,
    element:<ListFeedback />,
  },
  {
    path: PATHS.SIGN_OUT,
    element:<SignOut/>,
  },
]);

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <ToastContainer/> 
        <RouterProvider router={router} />
      </AppWrapper>
    </QueryClientProvider>
  </React.StrictMode>,
)
