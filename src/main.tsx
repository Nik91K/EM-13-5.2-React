import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import FirstPage from './pages/First/index.tsx'
import SecondPage from './pages/Second/index.tsx'
import ThirdPage from './pages/Third/index.tsx'
import NotFoundPage from './pages/NotFound/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path ='/' element = {<App/>}/>
      <Route path ='/page-1' element = {<FirstPage/>}/>
      <Route path ='/page-2' element = {<SecondPage/>}/>
      <Route path ='/page-3' element = {<ThirdPage/>}/>
      <Route path ='*' element = {<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
)
