import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { Suspense, useContext, useState } from 'react'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'


export const App = () => {
const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('App', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Suspense>
          <Routes>
            <Route path='/home' element={<MainPageAsync />} />
            <Route path='/about' element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
    </div>

  )
}
