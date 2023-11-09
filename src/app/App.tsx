import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/helpers/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

export const App = () => {
    const { theme } = useTheme()

    
    return (
        <div id='App' className={classNames('App', {}, [theme])}>
            <Suspense  fallback={ <PageLoader/> }>
                <Navbar />

                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>

    )
}
