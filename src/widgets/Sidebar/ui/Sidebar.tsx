import React, { useState } from 'react'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const {t} = useTranslation();

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid={'sidebar'}
            className={classNames(cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className])}>

            <Button
                size={SizeButton.XL}
                square
                theme={ThemeButton.INVERTED_BACKGROUND}
                className={cls.collapsedButton}
                data-testid='toggle-button'
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                
                <AppLink  className={cls.item}
                    theme={AppLinkTheme.INVERTED_SECONDARY}
                    to={RoutePath.main}>
                    <HomeIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                
                
                <AppLink   className={cls.item}
                    theme={AppLinkTheme.INVERTED_SECONDARY}
                    to={RoutePath.about}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Про нас')}
                    </span>
                </AppLink>
               
            </div>

            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.LangSwitcher} />
            </div>
        </div>
    );
}
