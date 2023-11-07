import { ErrorButton } from 'app/providers/ErorrBounrady'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            <ErrorButton />
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
