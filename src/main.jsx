import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './Router/route';
import ContextCom from './Context/Context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextCom>
      <RouterProvider router={router} />
    </ContextCom>
  </StrictMode>,
)
