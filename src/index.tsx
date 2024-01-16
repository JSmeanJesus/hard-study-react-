import { App } from 'app/App'
import { ErrorBoundary } from 'app/providers/ErorrBounrady'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = createRoot(document.getElementById('root')!)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
)
