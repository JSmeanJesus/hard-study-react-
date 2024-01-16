import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import '../../src/app/styles/themes/dark.scss'
import '../../src/app/styles/themes/light.scss'
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <Suspense>
                <I18nextProvider i18n={i18next}>
                    <BrowserRouter>
                        <div className="App light">
                            <Story />
                        </div>
                    </BrowserRouter>
                </I18nextProvider>
            </Suspense>
        ),
    ],
}

export default preview
