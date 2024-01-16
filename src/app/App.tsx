import { classNames } from 'shared/lib/helpers/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'

export const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div id="App" className={classNames('App', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
